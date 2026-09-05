import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function VideoAnimation(){

    useGSAP(()=>{
        gsap.to(".video", {
            currentTime: 15,
            ease: "none",
            scrollTrigger: {
                trigger: ".screen",
                start: "top top",
                end: "300% top",
                pin: true,
                scrub: 0.5,
                markers: true
            }
        })
    })

    return <>
        <div className="screen w-full h-screen">
            <video className="video w-full h-full object-cover" src="/assets/video/video.mp4" muted playsInline></video>
        </div>
    </>
}