"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";
import RobotCanvas from "../components/RobotCanvas";
import { fadeInUp, scaleIn } from "@/utils/animations";
import logo from "../../public/Hero.png";
import logo1 from "../../public/mernstack.png";
import Chatbot from "@/components/Chatbot2";

export default function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const texts = [
      "Mobile App Developer",
      "Frontend Developer",
      "UI/UX Designer",
      "Backend Developer",
      "C++",
      "Java",
      "Python",
      "Full-Stack Web Developer",
    ];

    if (index === texts.length) return setIndex(0);

    const current = texts[index];

    if (!deleting && subIndex === current.length) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
        setText(current.substring(0, subIndex));
      },
      deleting ? 50 : 150,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <div className="relative h-screen ">
      <div className=" absolute inset-0 z-10 text-black dark:text-white text-left flex items-center justify-center">
        <div className="flex items-center flex-col md:flex-row gap-5 sm:gap-10 md:gap-20 lg:gap-80 w-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mr-0 ml-0">
          <div className="flex flex-col text-center md:text-left justify-center max-w-md md:max-w-lg lg:pr-16">
            <motion.h1
              {...scaleIn}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-center md:text-left mb-2"
            >
              👋 Hello!
            </motion.h1>
            <motion.h2
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left mb-2"
            >
              Hi, I&apos;m <span className="text-red-400">Niraj Kumar</span>
            </motion.h2>
            <motion.h3
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left mb-2"
            >
              <span className="text-red-400">and </span>
              <span>I&apos;m a passionate </span>
            </motion.h3>
            <motion.h2
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left text-red-400 mb-4"
            >
              {text}
              <span className="border-r-2 border-white animate-pulse ml-1" />
            </motion.h2>

            <motion.p
              {...scaleIn}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-base font-bold text-center md:text-left mb-1"
            >
              Welcome to my YouTube channel, aicoderwithcoffee
            </motion.p>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-center md:text-left mt-2 mb-4"
            >
              Your one-stop solution for all coding needs!
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-4"
            >
              <Link
                href="/contact"
                className="bg-black px-4 py-2 border-2 rounded-xl text-white text-sm sm:text-base text-center hover:bg-white hover:text-black hover:border-black lg:border-red-400 dark:border-white transition-all duration-300"
              >
                Hire Me
              </Link>
              <Link
                href="/FRONTEND.pdf"
                download
                className="bg-black text-white px-4 py-2 border-2 rounded-xl text-sm sm:text-base text-center hover:bg-white hover:text-black hover:border-black lg:border-red-400 dark:border-white transition-all duration-300"
              >
                Download CV
              </Link>
            </motion.div>

            <motion.span
              {...fadeInUp}
              transition={{ delay: 0.8 }}
              className="flex justify-center items-center mt-6 gap-3 text-2xl sm:text-3xl md:text-4xl"
            >
              <Link
                className="bg-black text-white p-2 rounded-lg hover:bg-red-400 transition-all duration-300"
                href="https://github.com/NirajKumaroy"
              >
                <FaGithubSquare />
              </Link>
              <Link
                className="bg-black text-white p-2 rounded-lg hover:bg-red-400 transition-all duration-300"
                href="https://www.linkedin.com/in/niraj-kumar-%F0%9F%87%AE%F0%9F%87%B3-685a55254/"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="bg-black text-white p-2 rounded-lg hover:bg-red-400 transition-all duration-300"
                href="https://www.instagram.com/nirajroy50/"
              >
                <FaInstagramSquare />
              </Link>
              <Link
                className="bg-black text-white p-2 rounded-lg hover:bg-red-400 transition-all duration-300"
                href="https://www.youtube.com/@aiCoderwithCoffee-10003M"
              >
                <FaYoutubeSquare />
              </Link>
            </motion.span>
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.9 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <Image
              className="w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 lg:w-60 lg:h-30"
              src={logo1}
              alt="mernstack.png"
            />

            <Image
              className="w-48 h-64 sm:w-64 sm:h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28.4rem]"
              src={logo}
              alt="hero.png"
            />
          </motion.div>
        </div>
        <Chatbot />
      </div>

      <RobotCanvas />
    </div>
  );
}
