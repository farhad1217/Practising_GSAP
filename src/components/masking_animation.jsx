import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function MaskingAnimation() {

    useGSAP(() => {
        const tl =  gsap.timeline({
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
        .to(".box1", {
            webkitMaskSize: "100%",
            ease: "none",
            duration: 100
        })
        .to(".box2", {
            visibility: "visible",
            duration: 30
        }, "<70%")
    })

    return <>
        <div className="screen1 w-full h-screen bg-gray-600 flex justify-center items-center">
            <div className="box1 mask-size-[0%] mask-center mask-no-repeat mask-[url('/assets/image/mask.png')] w-100 h-100 bg-black text-white flex justify-center items-center">Box 1</div>
            <div className="box2 invisible w-100 h-100 bg-white text-black flex justify-center items-center">Box 2 </div>
        </div>
    </>
        
}