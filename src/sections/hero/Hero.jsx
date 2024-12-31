import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



export const Hero = () => {

  // gsap
  useGSAP(() => {
    gsap.from(".hero__cta h4", {
      yPercent: 100,
      duration: 1,
      delay: 0.2
    })

    gsap.from(".hero__title__header span", {
      yPercent: 110,
      duration: 0.5,
      stagger: 0.05,
      delay: 0.2
    }, "<+=0>")
  })

  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen">
      <div className="hero__container h-screen w-full flex flex-col justify-center items-center gap-36">
        <div className="hero__title overflow-y-hidden">
          <h1 className="hero__title__header inline-block text-9xl">
            <span className='inline-block'>C</span>
            <span className='inline-block'>O</span>
            <span className='inline-block'>N</span>
            <span className='inline-block'>N</span>
            <span className='inline-block'>O</span>
            <span className='inline-block'>R</span>
          </h1>
        </div>
        <div className="hero__cta overflow-y-hidden">
          <h4 className="font-light text-5xl">(<span className="font-semibold text-4xl">STUDIO</span>)</h4>
        </div>
      </div>
    </section>
)
}
