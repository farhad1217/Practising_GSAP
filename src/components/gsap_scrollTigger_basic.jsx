import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Gsap_scrollTigger(){
    useGSAP(()=>{
        gsap.to(".box-3", {
            width: "500px",
            scrollTrigger: {
                trigger: ".box-2",
                markers: true,
                start: "top 20%",
                end: "bottom 0%",
                scrub: true,
                pin: ".box-3-wrapper",
                pinSpacing: false
            }
        })
    })
    return <>
        <div className="box-1 w-37.5 h-37.5 font-bold bg-red-600 flex items-center justify-center mt-20">Box 1</div>
        <div className="box-2 w-37.5 h-37.5 font-bold bg-green-600 flex items-center justify-center mt-20">Box 2</div>
        <div className="box-3-wrapper mt-20 mb-30"><div className="box-3 w-37.5 h-37.5 font-bold bg-blue-600 flex items-center justify-center">Box 3</div></div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis ad voluptate adipisci quasi commodi nobis consectetur, dicta exercitationem consequatur ducimus, neque veritatis amet quam impedit fuga numquam. Totam, alias!</h1>
    </>
}