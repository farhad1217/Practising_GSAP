import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)

export default function ScrollAnimation1(){

    useGSAP(()=>{
        const Tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                end: "+=300% bottom",
                pin: true,
                scrub: true,
                pinSpacing: false,
                markers: true
            }
        })
        Tl
        .to(".box1", {
            xPercent: -100,
        })
        .to(".box2", {
            scaleX: 0,
        })
    })

    return <>
        <div className="relative w-full h-screen wrapper">
    <div className="absolute inset-0 w-full h-screen bg-blue-600 z-30 box1">
        Box 1
    </div>

    <div className="absolute inset-0 w-full h-screen bg-black z-20 box2">
        Box 2
    </div>

    <div className="absolute inset-0 w-full h-screen bg-red-700 z-10 box3">
        Box 3
    </div>
</div>
    </>
}