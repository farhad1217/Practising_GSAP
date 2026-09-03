import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function MaskingAnimation() {

    useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".screen1",
            start: "top top",
            end: "200% top",
            pin: true,
            scrub: true,
            markers: true,
            onEnter: (self) => {
                const targetScroll = self.labelToScroll("tween2Start")
                self.scroll(targetScroll)
            }
        }
    })

    tl
    .fromTo(".box1", 
        { maskSize: "100%", webkitMaskSize: "100%" },
        { maskSize: "0%", webkitMaskSize: "0%", duration: 100 }
    )
    .addLabel("tween2Start")
    .to(".box2", { y: 100, duration: 100 })
})

    return <>
        <div className="w-full h-screen">Scroll</div>
        <div className="screen1 w-full h-screen bg-gray-600 flex justify-center items-center">
            <div className="box1 mask-size-[0%] mask-center mask-no-repeat mask-[url('/assets/image/mask.png')] w-100 h-100 bg-black text-white flex justify-center items-center">Box 1</div>
            <div className="box2 w-100 h-100 bg-white text-black flex justify-center items-center">Box 2 </div>
        </div>
    </>
        
}