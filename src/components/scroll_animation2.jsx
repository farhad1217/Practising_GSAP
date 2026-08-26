
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)

export default function ScrollAnimation2() {
  useGSAP(() => {
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=500%", 
        scrub: true,
        markers: true,
        pin: true,
        pinSpacing: false
      },
    })

    tl.to(".box2", { yPercent: -100 })  
      .to(".box1", { xPercent: -100 }) 
      .to(".box3", { yPercent: -200 })   
      .to(".box2", { yPercent: -200 })
      .to(".box2", { xPercent: -200 }) 
  })

  return (
   <div className="wrapper ">
      <div className="box1 w-full h-screen bg-blue-600 opacity-100 flex items-center justify-center text-9xl relative  z-30">
        Box 1
      </div>
      <div className="box2  w-full h-screen bg-green-800 opacity-100 flex items-center justify-center text-9xl relative  z-20">
        Box 2
      </div>
      <div className="box3 w-full h-screen bg-red-700 opacity-100 flex items-center justify-center text-9xl relative  z-10">
        Box 3
      </div>
    </div>
  )
}