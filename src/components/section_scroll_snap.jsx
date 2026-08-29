import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SectionScrollSnap(){

    useGSAP(()=>{
        const box = gsap.utils.toArray(".animation > div")
        const step = box[1].getBoundingClientRect().left - box[0].getBoundingClientRect().left
        const frame = gsap.utils.toArray(".frame")
        gsap.set(".animation", {x: -box[0].getBoundingClientRect().left + frame[0].getBoundingClientRect().left })
        gsap.set(box[0], {scale: 0.7})
        box.pop()
        const tl = gsap.timeline({
            ease: "none",
            scrollTrigger: {
                trigger: ".screen2",
                start: "top top",
                end: "bottom top",
                pin: true,
                scrub: true,
                markers: true,
                snap: {
                    snapTo: "labelsDirectional",
                    duration: 0.2,
                }
            }
        })

        tl.addLabel("box0")
        box.forEach((_, i)=>{
            tl
            .to(".animation", {x: `-=${step}`})
            .to(box[i+1], {scale: 0.7}, "<")
            .to(box[i], {scale: 1}, "<")
            .addLabel(`box${i+1}`)
        })
        const boxx = gsap.utils.toArray(".animation > div")
        tl.to(boxx[boxx.length-1], {scale: 0.7}, "<")
    })

    return <>
        <div className="screen1 w-full h-screen flex justify-center items-center">
            <div className="boxref">Scroll </div>
        </div>
        <div className="screen2 w-full h-screen bg-black overflow-x-hidden">
            <div className="w-full h-screen flex justify-center items-center bg-transparent">            
                <div className="animation w-full h-screen flex justify-center items-center gap-20">
                    <div className="box1 w-60 h-60 bg-amber-500 relative flex justify-center items-center text-5xl">Box 1</div>
                    <div className="box2 w-60 h-60 bg-red-500 relative flex justify-center items-center text-5xl">Box 2</div>
                    <div className="box3 w-60 h-60 bg-green-500 relative flex justify-center items-center text-5xl">Box 3</div>
                    <div className="box4 w-60 h-60 bg-pink-500 relative flex justify-center items-center text-5xl">Box 4</div>
                    <div className="box5 w-60 h-60 bg-gray-500 relative flex justify-center items-center text-5xl">Box 5</div>
                </div>
                <div className="frame w-60 h-60 border-4 border-amber-50 fixed"></div>
            </div>
        </div>
    </>
}