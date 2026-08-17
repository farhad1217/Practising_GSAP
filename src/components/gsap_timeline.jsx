import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function GsapTimeline(){

    useGSAP(()=>{
        const play = document.querySelector(".play")
        const pause = document.querySelector(".pause")
        const reverse = document.querySelector(".reverse")
        const restart = document.querySelector(".restart")

        const boxTl = gsap.timeline({paused: false})

        boxTl.to(".box-1", {
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

        play.addEventListener("click", ()=>{
            boxTl.play()
        })

        pause.addEventListener("click", ()=>{
            boxTl.pause()
        })

        reverse.addEventListener("click", ()=>{
            boxTl.reverse()
        })

        restart.addEventListener("click", ()=>{
            boxTl.restart()
        })
    })
    

    return <>
        <div className="box-1 w-[150px] h-[150px] font-bold bg-red-600 flex items-center justify-center mt-20">Box 1</div>
        <div className="box-2 w-[150px] h-[150px] font-bold bg-green-600 flex items-center justify-center mt-20">Box 2</div>
        <div className="w-[150px] h-[150px] font-bold bg-blue-600 flex items-center justify-center mt-20 box-3 mb-30">Box 3</div>
        <button className="bg-white ml-20 p-2 rounded-lg play">play</button>
        <button className="bg-white ml-20 p-2 rounded-lg pause">pause</button>
        <button className="bg-white ml-20 p-2 rounded-lg reverse">reverse</button>
        <button className="bg-white ml-20 p-2 rounded-lg restart">restart</button>
    </>
}
