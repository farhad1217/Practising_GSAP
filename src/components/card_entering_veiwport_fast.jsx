import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function CardEnteringViewportFast(){
    useGSAP(()=>{
        const boxes = gsap.utils.toArray(".screen2 > div")
        boxes.forEach((box)=>{
            const tween = gsap.to(box, {
                y: -200,
                duration: 0.3,
                paused: true
            })

            ScrollTrigger.create({
                trigger: box,
                start: "start bottom",
                end: "bottom bottom",
                markers: {
                    startColor: "orange",
                    endColor: "orange"
                },
                onEnter: ()=>{
                    tween.play()
                }
            })
            
            ScrollTrigger.create({
                trigger: box,
                start: "start-=200 bottom",
                end: "bottom bottom",
                markers: {
                    startColor: "red",
                    endColor: "red"
                },
                onLeaveBack: ()=>{
                    tween.reverse()
                }
            })
        })
    })

    return <>
        <div className="scree1 w-full h-screen bg-black">Scroll</div>
        <div className="scree1 w-full h-screen bg-black">Scroll</div>
        <div className="screen2 relative">
            <div className="box1 w-30 h-40 bg-amber-500 absolute top-0 left-300">Box 1</div>
            <div className="box1 w-30 h-40 bg-red-500 absolute top-50 left-100">Box 2</div>
            <div className="box1 w-30 h-40 bg-green-500 absolute top-100 left-300">Box 3</div>
            <div className="box1 w-30 h-40 bg-blue-500 absolute top-150 left-100">Box 4</div>
            <div className="box1 w-30 h-40 bg-pink-500 absolute top-200 left-300">Box 5</div>
        </div>
    </>
}