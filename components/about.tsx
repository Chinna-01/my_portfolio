"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
          <SectionHeading>About me</SectionHeading>
          <p className="mb-3">
          A passionate and results-driven Software Engineer with over {" "}  
          <span className="font-medium">
          4+ years</span>  of experience
           in building and maintaining web applications. 
           I specialize in {" "}  
           <span className="font-medium">
            .NET Core, ASP.NET, SQL Server, and full-stack development.{" "}
           </span>
            My work involves crafting scalable APIs, integrating complex data systems, 
            and delivering high-performance features for sales force automation (SFA) projects
             across various industries.

            I enjoy solving real-world business challenges through clean code,
             efficient architecture, and collaborative development.
              From front-end interfaces to back-end logic and database design, 
              I bring a holistic approach to software development. 
              I’m always eager to learn new technologies and improve user experiences
               through continuous innovation.
               I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a software
            developer. 
          </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and listening to music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
        {/* I am currently
        learning about{" "} */}
        {/* <span className="font-medium">Bachelor of Computer Applications</span>. */}
      </p>
    </motion.section>
  );
}
