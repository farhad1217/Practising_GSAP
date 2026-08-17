import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"

export default function GsapTimeline(){
    const [isPlaying, setIsPlaying] = useState(true)
    const boxTl = useRef(null)

    useGSAP(()=>{

        boxTl.current = gsap.timeline({
            paused: true, 
            repeat: -1, 
            yoyo: true,
            onUpdate: ()=> {
                if(boxTl.current.time() === 0){
                    setIsPlaying(true) 
                    boxTl.current.restart()
                    boxTl.current.pause()
                }
            }
        })

        boxTl.current.to(".box-1", {
            x: 500,
            duration: 2,
            ease: "power3.out"
        }).to(".box-2", {
            x: 500,
            duration: 2,
            ease: "power3.out"
        }).to(".box-3", {
            x: 500,
            duration: 2,
            ease: "power3.out"
        })
    })
    

    function handlePlayPause(){
        if(isPlaying){
            if(boxTl.current.reversed()){
                boxTl.current.reverse()
                setIsPlaying(!isPlaying)
            }
            else{
                boxTl.current.play()
                setIsPlaying(!isPlaying)
            }
        }
        else{
            boxTl.current.pause()
            setIsPlaying(!isPlaying)
        }
    }

    function handleReverse(){
        if(boxTl.current.time() !== 0){
            if(boxTl.current.reversed()){
                boxTl.current.play()
            }
            else{
                boxTl.current.reverse()
            }
            setIsPlaying(false)
        }
    }

    function handleRestart(){
        if(boxTl.current.time() !== 0){
            boxTl.current.restart()
            setIsPlaying(false) 
        }
    }

    return <>
        <div className="box-1 w-37.5 h-37.5 font-bold bg-red-600 flex items-center justify-center mt-20">Box 1</div>
        <div className="box-2 w-37.5 h-37.5 font-bold bg-green-600 flex items-center justify-center mt-20">Box 2</div>
        <div className="w-37.5 h-37.5 font-bold bg-blue-600 flex items-center justify-center mt-20 box-3 mb-30">Box 3</div>
        <button onClick={handlePlayPause}  className="bg-white ml-20 p-2 rounded-lg playPause">{isPlaying? "Play": "Pause"}</button>
        <button onClick={handleReverse} className="bg-white ml-20 p-2 rounded-lg reverse">reverse</button>
        <button onClick={handleRestart} className="bg-white ml-20 p-2 rounded-lg restart">restart</button>
    </>
}
