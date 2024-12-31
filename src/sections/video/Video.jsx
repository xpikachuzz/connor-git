import { useGSAP } from "@gsap/react"
import gsap from "gsap"


export const Video = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#video",
        scroller: "body",
        start: "top top",
        scrub: true,
        pin: true,
      }
    })

    tl.from(".sticky-h1-left", {
      xPercent: -200,
      duration: 5
    })
    tl.from(".sticky-h1-right", {
      xPercent: 200,
      duration: 5
    }, "<")
    tl.to(".sticky-vid video", {
      scale: 1,
      duration: 5
    }, "<")
  })

  return (
    <section id="video">
      <div className="sticky-vid h-full flex flex-col justify-center items-center">
        <video autoPlay muted loop playsInline >
          <source src="https://framerusercontent.com/modules/assets/BcIElVBzSD9P1ht5PhehnVyzTA~0iRDOKjSaNyoXJfsXAcSsdeEYSbJ8aAp3MvS5ts7LL0.mp4" type="video/mp4"/>
        </video>
        <div className="sticky-h1-cont text-white flex">
          <h2 className="sticky-h1-left mr-2">SHOW</h2>
          <h2 className="sticky-h1-right">CASE</h2>
        </div>
      </div>
    </section>
  )
}
