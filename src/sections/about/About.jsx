import { useGSAP } from "@gsap/react"
import gsap from "gsap"


export const About = () => {

  useGSAP(() => {
    gsap.to('.about__text', {
      color: "white",
      scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 60%",
        scrub: true,
        end: "50%"
      }
    })
  })

  return (
    <section id="about" className="about bg-transparent flex justify-center items-center h-screen">
      <div className="about__container w-3/5">
        <div className="about__text text-gray-900 text-center text-2xl uppercase">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, non consequuntur asperiores, 
          modi ex aliquid delectus, amet voluptas doloremque placeat cupiditate accusantium libero 
          iusto voluptate animi. Itaque asperiores totam eos dolor, voluptas in. Ratione optio 
          possimus eos placeat vel, est ut animi et, accusamus facilis nobis saepe similique, neque 
          eligendi.
        </div>
      </div>
    </section>
  )
}
