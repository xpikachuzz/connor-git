import { Hero } from "./sections/hero/Hero"
import { LineContainer } from "./sections/LineContainer"
import { About } from './sections/about/About';
import { Video } from "./sections/video/Video";
import { Projects } from "./sections/projects/Projects";
import { Blog } from "./sections/blog/Blog";

const App = () => {


  return (
    <main className="bg-black w-full p-0">
      <LineContainer />
      <main className="min-h-screen max-w-screen-2xl w-full mx-auto  flex flex-col items-center text-white">
        <Hero />
        <About />
        <Video />
        <Projects />
        <Blog />
      </main>
    </main>
  )
}

export default App