import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SectionScrollSnap(){

    useGSAP(()=>{
        const box = gsap.utils.toArray(".animation > div")
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
                    snapTo: "labels",
                    duration: 0.1,
                    ease: "none",
                    delay: 0
                }
            }
        })
        tl.addLabel("box0")
        box.forEach((item, i)=>{
            tl.to(item, {x: -item.getBoundingClientRect().left})
            .addLabel(`box${i+1}`)
        }
        )
    })

    return <>
        <div className="screen1 w-full h-screen flex justify-center items-center">
            <div className="boxref">Scroll </div>
        </div>
        <div className="screen2 w-full h-screen bg-black">
            <div className="animation w-full h-screen flex justify-center items-center gap-20">
                <div className="box1 w-60 h-60 bg-amber-500 relative">Box 1</div>
                <div className="box2 w-60 h-60 bg-red-500 relative">Box 2</div>
                <div className="box3 w-60 h-60 bg-green-500 relative">Box 3</div>
                <div className="box4 w-60 h-60 bg-pink-500 relative">Box 4</div>
                <div className="box5 w-60 h-60 bg-gray-500 relative">Box 5</div>
            </div>
        </div>
    </>
}