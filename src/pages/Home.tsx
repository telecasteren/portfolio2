import { Meta } from "@/components/Meta";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div id="home">
      <Meta title="Tele Caster Nilsen - Portfolio" />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
