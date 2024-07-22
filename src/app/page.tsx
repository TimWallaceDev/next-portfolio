import Image from "next/image";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Projects } from "@/components/projects/projects";
import { Resume } from "@/components/resume/Resume"
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <main className="">
      <Resume/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  );
}
