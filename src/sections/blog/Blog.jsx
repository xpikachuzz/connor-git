import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const blog_images = document.querySelectorAll(".blog-img-cont img")

export const Blog = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#blog",
        scroller: "body",
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
        pin: true
      }
    })
    tl.from("#blog h1 span", {
      opacity: 0,
      stagger: 0.3,
      y: 500,
      duration: 10,
    })

    const scale = 0.6
    const yPercent = 150
    const duration = 15
    tl.from(".blog-img-1", {
      duration: 5,
      yPercent
    })
    tl.to(".blog-img-1", {
      scale,
      duration
    })
    tl.from(".blog-img-2", {
      duration,
      yPercent
    }, "<")
    tl.to(".blog-img-2", {
      scale,
      duration
    })
    tl.from(".blog-img-3", {
      duration,
      yPercent
    }, "<")
    tl.to(".blog-img-3", {
      scale,
      duration
    })
    tl.from(".blog-img-4", {
      duration,
      yPercent
    }, "<")
    tl.to(".blog-img-4", {
      scale,
      duration
    })
    tl.from(".blog-img-5", {
      duration,
      yPercent
    }, "<")
    tl.to(".blog-img-5", {
      scale,
      duration
    })

  })

  return (
    <section id="blog" className="flex flex-col justify-center items-center">
      <h1 className="text-9xl">
        <span>B</span>
        <span>L</span>
        <span>O</span>
        <span>G</span>
      </h1>
      {/* images */}
      <div className="blog-img-cont flex justify-center items-center">
        <img className="blog-img-1" src="https://framerusercontent.com/images/pO4KCsGIbaSjQBd9sLDYp3CLlzg.jpg"/>
        <img className="blog-img-2" src="https://framerusercontent.com/images/pO4KCsGIbaSjQBd9sLDYp3CLlzg.jpg"/>
        <img className="blog-img-3" src="https://framerusercontent.com/images/pO4KCsGIbaSjQBd9sLDYp3CLlzg.jpg"/>
        <img className="blog-img-4" src="https://framerusercontent.com/images/pO4KCsGIbaSjQBd9sLDYp3CLlzg.jpg"/>
        <img className="blog-img-5" src="https://framerusercontent.com/images/pO4KCsGIbaSjQBd9sLDYp3CLlzg.jpg"/>
      </div>
    </section>
  )
}
