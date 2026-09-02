import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Radar from "@/components/Radar";
import ScrollObserver from "@/components/ScrollObserver";
import { getGithubProjects } from "@/lib/github";

export default async function Home() {
  // You can change 'paulohbarbosa' to any username you want
  const githubProjects = await getGithubProjects("paulohbarbosa");

  return (
    <>
      <ScrollObserver />
      <div className="bg-elements">
        <div className="glow glow-blue"></div>
        <div className="glow glow-purple"></div>
        <div className="grid-overlay"></div>
      </div>

      <Navbar />
      <Hero />
      <Skills />
      <Radar />
      <Timeline />
      <Projects githubProjects={githubProjects} />
      <Testimonials />
      <CTA />
    </>
  );
}
