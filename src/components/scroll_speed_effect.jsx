import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollSpeedEffect(){
    const lenis = new Lenis({
        duration: 0.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    const container = useRef()
    useGSAP(() => {
    const boxes = gsap.utils.toArray(".screen2 > div")
    const quickScales = boxes.map((box) =>
        gsap.quickTo(box, "scaleY", { duration: 0.5, ease: "power3" })
    )

    ScrollTrigger.create({
        trigger: ".screen2",
        start: "top bottom",
        end: "bottom bottom",
        markers: true,
        onUpdate: (self) => {
            const velocity = self.getVelocity()
            const scale = gsap.utils.clamp(0.5, 1.5, 1 + velocity * 0.0001)
            quickScales.forEach((qs) => qs(scale))
            window.addEventListener("scrollend", () => {
                quickScales.forEach((qs) => qs(1))
            })
        }
    })
}, { scope: container })

    
    
    return <>
        <div className="screen1 w-full h-screen"></div>
        <div ref={container} className="screen2 min-h-screen flex flex-col items-center justify-center gap-50">
            <div className="box1 w-52 h-52 flex justify-center items-center bg-amber-500">Box 1</div>
            <div className="box2 w-52 h-52 flex justify-center items-center bg-red-500">Box 2</div>
            <div className="box3 w-52 h-52 flex justify-center items-center bg-green-500">Box 3</div>
            <div className="box4 w-52 h-52 flex justify-center items-center bg-blue-500">Box 4</div>
            <div className="box5 w-52 h-52 flex justify-center items-center bg-pink-500">Box 5</div>
            <div className="box6 w-52 h-52 flex justify-center items-center bg-gray-500">Box 6</div>
            <div className="box7 w-52 h-52 flex justify-center items-center bg-black">Box 7</div>
        </div>
    </>
}