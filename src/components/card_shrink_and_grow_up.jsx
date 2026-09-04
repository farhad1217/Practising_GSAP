import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function CardShrinkAndGrowUP(){

    useGSAP(()=>{
        const duration = [30, 60, 90, 10, 55, 77, 59, 81, 36]
        const boxes = gsap.utils.toArray(".screen1 > div")
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".screen1",
                start: "top top",
                end: "200% top",
                pin: true,
                scrub: true,
                markers: true
            }
        })
        tl
        .to(boxes[4], {scale: 0, duration: 100, ease: "none"})
        boxes.forEach((box, i)=>{
            if(i!==4){
                tl.to(box, {
                    scale: 1,
                    duration: duration[i],
                    ease: "none"
                }, duration[i])
                .to(box, {visibility: "hidden", duration: 0}, ">")
            }
        })
    })

    return <>
        <div className="screen1 w-full h-screen bg-amber-400 grid grid-cols-3 justify-items-center items-center gap-1">
            <div className="box1 scale-0 flex justify-center w-40 h-40 bg-amber-950 items-center">Box 1</div>
            <div className="box2 scale-0 flex justify-center w-40 h-40 bg-red-600 items-center">Box 2</div>
            <div className="box3 scale-0 flex justify-center w-40 h-40 bg-blue-500 items-center">Box 3</div>
            <div className="box4 scale-0 flex justify-center w-40 h-40 bg-pink-500 items-center">Box 4</div>
            <div className="box5 scale-100 flex justify-center w-60 h-60 bg-black items-center">Box 5</div>
            <div className="box6 scale-0 flex justify-center w-40 h-40 bg-gray-500 items-center">Box 6</div>
            <div className="box7 scale-0 flex justify-center w-40 h-40 bg-white items-center">Box 7</div>
            <div className="box8 scale-0 flex justify-center w-40 h-40 bg-purple-500 items-center">Box 8</div>
            <div className="box9 scale-0 flex justify-center w-40 h-40 bg-green-500 items-center">Box 9</div>
        </div>
    </>
}