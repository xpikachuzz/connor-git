import { useGSAP } from "@gsap/react"
import { ProjectCard } from "./ProjectCard"
import gsap from "gsap"

export const Projects = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#project",
        scroller: "body",
        start: "top top",
        end: "bottom 0%",
        scrub: true,
        pin: true
      }
    })
    

    tl.to(".top", {
      transform: "translateX(-60%)",
      duration: 25
    })
    
    tl.to(".mid", {
      transform: "translateX(-80%)",
      duration: 25
    }, "<")
    
    tl.to(".bot", {
      transform: "translateX(-68%)",
      duration: 25
    }, "<")
  })

  return (
    <section id="project" className="flex flex-col items-start">
      <div className="my-10 mx-auto">
        <h1 className="text-4xl font-extralight w-full text-center">(<span className="font-semibold text-3xl">PROJECTS</span>)</h1>
      </div>
      <div className="projects-collec h-full flex flex-col justify-center items-start">
        {/* top row */}
        <div className="top w-full  h-full">
          <ProjectCard left={"left-0"}/>
          <ProjectCard left={"left-1/6"}/>
          <ProjectCard left={"left-1/3"}/>
          <ProjectCard left={"left-1/2"}/>
          <ProjectCard left={"left-2/3"}/>
        </div>
        {/* mid row */}
        <div className="mid w-full  h-full">
          <ProjectCard left={"left-0 w-1/3"}/>
          <ProjectCard left={"left-1/4 w-1/2"}/>
          <ProjectCard left={"left-3/4 w-1/3"}/>
        </div>
        {/* bot row */}
        <div className="bot w-full  h-full">
          <ProjectCard left={"left-0 w-1/6"}/>
          <ProjectCard left={"left-1/4 "}/>
          <ProjectCard left={"left-1/2 w-1/6"}/>
          <ProjectCard left={"left-3/4 w-1/6"}/>
        </div>
      </div>
    </section>
  )
}
