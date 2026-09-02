import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxAnimation(){

    useGSAP(()=>{
        const boxes = gsap.utils.toArray(".screen2 > div")
        const speeds = [2.2, 0.4, 1.0, 3.6, 0.7]
        const tl = gsap.timeline({
            defaults: {ease: "none"},
            scrollTrigger: {
                trigger: ".screen2",
                start: "top bottom",
                end: "bottom top",
                
                scrub: true,
                markers: true,
                
            }
        })

        boxes.forEach((box, i)=>{
            tl.to(box, {
                y: ()=> -window.innerHeight * speeds[i],
            }, "<")
        })

    })

    return <>
        <div className="screen1 w-full h-screen bg-black">Scroll</div>
        <div className="screen2 w-full h-screen flex justify-center items-center gap-20">
            <div className="box1 w-30 h-40 bg-amber-500">Box 1</div>
            <div className="box1 w-30 h-40 bg-red-500">Box 2</div>
            <div className="box1 w-30 h-40 bg-green-500">Box 3</div>
            <div className="box1 w-30 h-40 bg-blue-500">Box 4</div>
            <div className="box1 w-30 h-40 bg-pink-500">Box 5</div>
        </div>
        <div className="screen1 w-full h-screen bg-black">Scroll</div>
    </>
}