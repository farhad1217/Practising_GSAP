import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation1() {
  useGSAP(() => {
    const Tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=300% bottom",
        pin: true,
        scrub: 1,
        pinSpacing: false,
        markers: true,
      },
    });
    Tl.to(".box1", {
      xPercent: -100,
    }).to(
      ".box2",
      {
        xPercent: 100,
      },
      "<",
    ).to(".box4", {
        top: 0
    })
  });

  return (
    <>
      <div className="relative w-full h-screen wrapper overflow-x-hidden">
        <div className="absolute inset-0 w-full h-screen bg-blue-600 z-30 box1">
          Box 1
        </div>

        <div className="absolute inset-0 w-full h-screen bg-black z-20 box2">
          Box 2
        </div>

        <div className="absolute inset-0 w-full h-screen bg-red-700 z-10 box3">
          Box 3
        </div>
        <div className="absolute inset-0 w-full h-screen bg-green-700 z-10 box4 -top-250 flex items-center justify-center">
          <div><h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            animi, corporis tenetur velit nemo eaque eum hic. Numquam eaque
            quisquam amet, pariatur, minus quos consequatur odit doloribus nobis
            natus hic.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            animi, corporis tenetur velit nemo eaque eum hic. Numquam eaque
            quisquam amet, pariatur, minus quos consequatur odit doloribus nobis
            natus hic.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            animi, corporis tenetur velit nemo eaque eum hic. Numquam eaque
            quisquam amet, pariatur, minus quos consequatur odit doloribus nobis
            natus hic.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            animi, corporis tenetur velit nemo eaque eum hic. Numquam eaque
            quisquam amet, pariatur, minus quos consequatur odit doloribus nobis
            natus hic.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            animi, corporis tenetur velit nemo eaque eum hic. Numquam eaque
            quisquam amet, pariatur, minus quos consequatur odit doloribus nobis
            natus hic.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            animi, corporis tenetur velit nemo eaque eum hic. Numquam eaque
            quisquam amet, pariatur, minus quos consequatur odit doloribus nobis
            natus hic.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            animi, corporis tenetur velit nemo eaque eum hic. Numquam eaque
            quisquam amet, pariatur, minus quos consequatur odit doloribus nobis
            natus hic.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            animi, corporis tenetur velit nemo eaque eum hic. Numquam eaque
            quisquam amet, pariatur, minus quos consequatur odit doloribus nobis
            natus hic.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            animi, corporis tenetur velit nemo eaque eum hic. Numquam eaque
            quisquam amet, pariatur, minus quos consequatur odit doloribus nobis
            natus hic.
          </h1>
          </div>
        </div>
      </div>
    </>
  );
}
