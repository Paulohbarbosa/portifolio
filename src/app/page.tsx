"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Radar from "@/components/Radar";

export default function Home() {
  useEffect(() => {
    // Scroll Reveal Logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
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
      <Projects />
      <Testimonials />
      <CTA />
    </>
  );
}
