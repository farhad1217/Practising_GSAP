import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalAnimation(){
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".box-wrapper",
                start: "top top",
                end: "+=300% bottom",
                scrub: true,
                markers: true,
                pin: true,
                pinSpacer: true
            }
        })
        tl.to(".animation", {xPercent: -100})
    })
    return <>
        <div className="upper w-full h-screen"></div>
        <div className="box-wrapper  bg-black">
            <div className="animation w-full h-screen flex justify-center items-center gap-20">
                <div className="box1 w-75 h-75 bg-red-500 text-black flex justify-center items-center">Box 1</div>
                <div className="box2 w-75 h-75 bg-green-500 text-black flex justify-center items-center">Box 1</div>
                <div className="box3 w-75 h-75 bg-blue-500 text-black flex justify-center items-center">Box 1</div>
            </div>
        </div>
    </>
}