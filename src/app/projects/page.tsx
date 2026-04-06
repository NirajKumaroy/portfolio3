"use client";
import { useState } from "react";
import Image from "next/image";
import image01 from "../../../public/images/portfolio2.png";
import image1 from "../../../public/images/candaygame.png";
import image2 from "../../../public/images/bubble.png";
import image3 from "../../../public/images/Snake.png";
import image4 from "../../../public/images/music.png";
import image5 from "../../../public/images/calculater1.png";
import image6 from "../../../public/images/movie.png";
import image7 from "../../../public/images/Resume.png";
import image8 from "../../../public/images/Doctor.png";
import image9 from "../../../public/images/music3.png";
import image10 from "../../../public/images/sapacimg.png";
import image11 from "../../../public/images/QRcode.png";
import image12 from "../../../public/images/portfolio.png";
import image13 from "../../../public/images/ecommerce2.png";
import image14 from "../../../public/images/blogpost2.png";
import image15 from "../../../public/images/spacegame.png"
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const projects = [
  {
    id: 15,
    title: "SpaceWar Game ",
    description:
      "This is a SpaceWar Game built using nextjs, tailwindcss and framer-motion. and typeScript",
    skills: "nextjs, tailwindcss, framer-motion TypeScript",
    image: image15,
    video: "/spacegame.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  {
    id: 0,
    title: "portfolio Website",
    description:
      "This is a portfolio website built using HTML, CSS, and JavaScript.",
    skills: "Html, Css, Javascript",
    image: image01,
    video: "/portfolio2.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  {
    id: 12,
    title: "portfolio website",
    description: "Full-stack portfolio website with project showcase and contact form.",
    skills: "nextjs, tailwindcss, framer-motion ",
    image: image12,
    video: "/portfolio.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  {
    id: 13,
    title: "E-commerce Website",
    description: "This is an E-commerce Website built using Next.js, Tailwind CSS, and Framer Motion.",
    skills: "nextjs, tailwindcss, framer-motion ",
    image: image13,
    video: "/e-commerce.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  {
    id: 14,
    title: "Blog Post Website",
    description: "This is a Blog Post Website built using Next.js, Tailwind CSS, and Framer Motion.",
    skills: "nextjs, tailwindcss, framer-motion ",
    image: image14,
    video: "/blogpost.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  {
    id: 1,
    title: "Space War Game",
    description:
      "This is Space War Game build this game html,css and Javascript ",
    skills: "Html, Css, Javascrit",
    image: image10,
    video: "/game1.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  {
    id: 2,
    title: "Bubble Shooter Game",
    description:
      "This is Bubble Shooter Game build this game html,css and Javascript",
    skills: "Html, Css, Javascrit",
    image: image2,
    video: "/Bubble.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  {
    id: 3,
    title: "Snake Game",
    description: "This is Snake Game build this game html,css and Javascript",
    skills: "Html, Css, Javascrit",
    image: image3,
    video: "/snakeVideo.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  {
    id: 4,
    title: "Music App",
    description: "This is Music App build this game html,css and Javascript",
    skills: "Html, Css, Javascrit",
    image: image4,
    video: "/music.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  {
    id: 5,
    title: "Candy Crush Game",
    description: "This is Candy Crush Game build this game html,css and Javascript.",
    skills: "Html, Css, Javascrit",
    image: image1,
    video: "/Candy.mp4",
    github: "https://github.com/NirajKumaroy",
  },

  {
    id: 6,
    title: "Movies search",
    description: "This is Movies Search web page build this page using html,css and Javascript.",
    skills: "Html, Css, Javascrit",
    image: image6,
    video: "/Movies.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  {
    id: 7,
    title: "Resume builder",
    description: "This is Resume Builder web page build this page using html,css and Javascript.",
    skills: "Html, Css, Javascrit",
    image: image7,
    video: "/Resume.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  {
    id: 8,
    title: "Doctor health appointment",
    description: "This is Doctor Health Appointment web page build this page using html,css and Javascript.",
    skills: "Html, Css, Javascrit",
    image: image8,
    video: "/doctor.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  {
    id: 9,
    title: "Music E-Commerce Store",
    description: "This is Music E-Commerce Store web page build this page using html,css and Javascript.",
    skills: "Html, Css, Javascrit",
    image: image9,
    video: "/muVideo.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  {
    id: 10,
    title: "Calculator App",
    description: "This is Calculator App build this app using html,css and Javascript.",
    skills: "Html, Css, Javascrit",
    image: image5,
    video: "/calculator.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  {
    id: 11,
    title: "QRcode Generator",
    description: "This is QRcode Generator web page build this page using html,css and Javascript.",
    skills: "Html, Css, Javascrit",
    image: image11,
    video: "/QRcode.mp4",
    github: "https://github.com/NirajKumaroy",
  },
  
  // Add more up to 10 projects with same structure
];

export default function ProjectSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="bg-white  dark:bg-gradient-to-r from-blue-500 to-purple-500 py-12">
      <motion.h2
        {...fadeInUp}
        transition={{ delay: 0.1 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        My Projects
      </motion.h2>

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10"
      >
        {projects.map(
          ({ id, title, description, skills, image, video, github }) => (
            <div
              key={id}
              className="bg-gray-800 p-5 rounded-lg shadow-md transform 
              transition-transform duration-300 hover:scale-105    border-2 border-red-400 hover:border-white"
            >
              <Image
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded mb-4 border border-gray-700"
              />
              <h3 className="text-xl text-white font-semibold mb-1">{title}</h3>
              <p className="text-gray-400 text-sm mb-4">{description}</p>
              <h3 className="text-xl text-white font-semibold mb-2">
                {skills}
              </h3>
              <div className="flex gap-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm"
                >
                  GitHub
                </a>
                <button
                  onClick={() => setActiveVideo(video)}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
                >
                  Live Demo
                </button>
              </div>
            </div>
          )
        )}
      </motion.div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black rounded-lg overflow-hidden w-[90%] max-w-3xl relative">
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-90"
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-2 right-2 text-white text-2xl bg-red-600 rounded-full w-8 h-8 flex items-center justify-center"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
