/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from "react-router-dom"

export default function Room(){
    const { roomId } = useParams()

    if(!roomId) return <div>Required Id</div>

    const myMeeting = async(element: any) => {
     const appID = 1086116416
     const serverSecret = "894010a9667137fa9ee0ff7efbdeb11e"
     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(),'Lorrys Code')

     const zc = ZegoUIKitPrebuilt.create(kitToken)

     zc.joinRoom({
        container: element,
        sharedLinks: [
            {
                name: "Copy Link",
                url: `https://calling-zoom.vercel.app/room/${roomId}`
            }
        ],
        scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: false
     })
    }

    return(
        <div className="w-full relative h-screen flex justify-center items-center bg-zinc-950">
            <img src="./../../../public/elipse.svg" alt="Elipse" className="absolute top-0 right-0"  />
           <div ref={myMeeting}/>
        </div>
    )
}