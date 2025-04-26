"use client";

import React, { useState, useEffect, MouseEvent } from "react"; // <- notice MouseEvent imported here
import Head from "next/head";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaDatabase, FaGitAlt, FaEnvelope, FaLinkedin, FaGithub, FaJava, FaHtml5, FaCode, FaCss3Alt } from "react-icons/fa";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Dustin Lambert | Portfolio</title>
        <meta name="description" content="A portfolio website showcasing my work and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Spotlight Effect */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none mix-blend-overlay"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent)`,
        }}
      ></div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: `${scrollProgress}%` }}></div>

      {/* Profile Section */}
      <main className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-5 pt-20 text-center z-10">
        <motion.h1
          className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I&apos;m Dustin Lambert
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Software Developer | AWS Enthusiast | Cybersecurity Learner
        </motion.p>
      </main>

      {/* About Me Section */}
      <section id="about" className="py-16 px-5 bg-gray-800 text-white text-center shadow-lg rounded-lg mx-5 my-10">
        <h2 className="text-4xl font-bold text-blue-400">About Me</h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg mt-4">
          Passionate software developer specializing in full-stack development, cloud computing, and cybersecurity. 
          Dedicated to building scalable and secure applications while continuously learning and exploring new technologies.
        </p>
      </section>

      {/* Skills Section with Icons */}
      <section id="skills" className="py-16 px-5 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold text-blue-400">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-6">
          {[
            { icon: <FaJs />, name: "JavaScript" },
            { icon: <FaReact />, name: "React.js" },
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <FaAws />, name: "AWS" },
            { icon: <FaDocker />, name: "Docker" },
            { icon: <FaPython />, name: "Python" },
            { icon: <FaDatabase />, name: "Databases" },
            { icon: <FaGitAlt />, name: "Git/GitHub" },
            { icon: <FaJava />, name: "Java" },
            { icon: <FaHtml5 />, name: "HTML" },
            { icon: <FaCode />, name: "C++" },
            { icon: <FaCss3Alt />, name: "CSS" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 border border-gray-700 rounded-lg bg-gray-800 hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-all flex flex-col items-center shadow-lg transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-5xl text-white">{skill.icon}</div>
              <p className="mt-2 text-lg font-semibold text-white">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-5 bg-gray-800 text-white text-center">
        <h2 className="text-4xl font-bold text-purple-400">Contact Me</h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-6">
          Interested in working together? Connect with me!
        </p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:dustinlambert1127@yahoo.com" className="text-blue-400 text-5xl hover:text-blue-600 transition transform hover:scale-110">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/dustin-lambert-a86a2a232" target="_blank" className="text-blue-400 text-5xl hover:text-blue-600 transition transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://github.com/dlamb1127" target="_blank" className="text-blue-400 text-5xl hover:text-blue-600 transition transform hover:scale-110">
            <FaGithub />
          </a>
        </div>
      </section>
    </>
  );
}
