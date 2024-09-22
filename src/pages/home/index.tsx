import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Particles from "../../animate/particles";
import { generateMeetingId } from "../../hooks/generate-id-call";


export default function Home(){
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
    const [roomCode, setMeetingId] = useState('');

    useEffect(() => {
      const id = generateMeetingId();
      setMeetingId(id);
    }, []); 
    const navigate = useNavigate();
    
    const handleJoinRoom = useCallback(() => {
         navigate(`/room/${roomCode}`)
    }, [roomCode, navigate])
    
   
    useEffect(() => {
      setColor(theme === "dark" ? "#ffffff" : "#ffffff");
    }, [theme]);

    return(
        <div className="relative flex h-screen w-full  flex-col items-center justify-center overflow-hidden  bg-zinc-950 md:shadow-xl">
      <div className="size-aut z-30 flex flex-col gap-16 justify-center items-center">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b  to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
       Vamos interagir no <span className="text-blue-600">Calling</span>
      </span>
      <button 
      onClick={handleJoinRoom}
      className="w-[400px] py-[2rem] hover:cursor-pointer text-slate-100 rounded-md text-lg font-semibold px-[5rem] bg-blue-600"
      >
        Criar Sala
      </button>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
    )
}