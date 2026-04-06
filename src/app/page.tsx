"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import logo from "../../public/Hero.png";
import { motion } from "framer-motion";
import RobotCanvas from "../components/RobotCanvas";
import { fadeInUp, scaleIn } from "@/utils/animations";

import Chatbot from "../components/Chatbot2";

export default function Home() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = [
    "Mobile App Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Backend Developer",
    "C++",
    "java",
    "payrhan",
    "FullStack web Developer",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
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
  }, [subIndex, index, deleting, texts]);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-x-hidden">
      <div className="relative z-10 text-black dark:text-white text-center w-full min-h-screen flex items-center justify-center">
        <div className="flex items-center flex-col lg:flex-row gap-4 sm:gap-8 md:gap-16   lg:gap-80   w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
          <div className="w-full lg:w-1/3 h-auto max-w-sm md:max-w-md lg:max-w-none mx-auto p-4 sm:p-6 md:p-10 lg:p-14 order-last lg:order-last">
            <div className="relative ">
              <div className="relative rounded-3xl border border-slate-200 dark:border-white/20 bg-white/40 dark:bg-black/40 p-1 shadow-2xl transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(15deg)] hover:shadow-[0_30px_70px_rgba(59,130,246,0.30)]">
                <Image
                  className="absolute inset-5 w-[calc(100%-2.5rem)] h-[calc(100%-2.5rem)] object-cover rounded-2xl [transform:translateZ(10px)]"
                  src={logo}
                  alt="Hero illustration"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#0ea5e9] to-[#9333ea] p-4 sm:p-5 transform transition duration-700 [transform-style:preserve-3d] group-hover:rotate-6 group-hover:scale-105 relative">
                  <div className="absolute inset-5 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.2),transparent_45%)] border border-slate-200 dark:border-white/10 " />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start lg:text-left justify-center mx-auto lg:mx-0 max-w-xl order-first lg:order-first">
            <motion.h1
              {...scaleIn}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left"
            >
              👋Hello{"!"}, Welcome to 
              <br />
              My Youtube Channel aiCoderWithcoffee
            </motion.h1>
            <motion.h2
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left mt-2"
            >
              Hi, i am <span className="text-red-400">Niraj Kumar👋</span>
            </motion.h2>
            <motion.h3
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center lg:text-left mt-2"
            >
              <span className="text-red-400">and </span>
              <span>I&apos;m a Passionate </span>
            </motion.h3>
            <motion.h2
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center lg:text-left mt-2 text-red-400"
            >
              {text}
              <span className="border-r-2 border-white animate-pulse ml-1" />
            </motion.h2>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-center lg:text-left mt-2 lg:mt-2"
            >
              Your one-stop solution for all coding needs!
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-2 sm:gap-3 mt-4 md:mt-4 "
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-black px-4 py-1 md:px-8 md:py-3 border-2 rounded-xl cursor-pointer text-white text-sm md:text-base hover:bg-white hover:text-black hover:border-black lg:border-red-400 dark:border-white transition-all duration-300">
                  Hire Me
                </button>
              </Link>
              <Link href="/FRONTEND.pdf" download className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-black text-white px-4 py-1 md:px-8 md:py-3 border-2 rounded-xl cursor-pointer text-sm md:text-base hover:bg-white hover:text-black hover:border-black lg:border-red-400 dark:border-white transition-all duration-300">
                  Download Cv
                </button>
              </Link>
            </motion.div>

            <motion.span
              {...fadeInUp}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start items-center gap-2 sm:gap-3 md:gap-4 mt-4 md:mt-4 text-3xl sm:text-4xl md:text-3xl md:pl-8"
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
                href="https://www.instagram.com/nirajroy50/?hl=en"
              >
                <FaInstagramSquare />
              </Link>
              <Link
                className="bg-black text-white p-2 rounded-lg hover:bg-red-400 transition-all duration-300"
                href="http://www.youtube.com/@aiCoderwithCoffee-10003M"
              >
                <FaYoutubeSquare />
              </Link>
            </motion.span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-0">
          <Chatbot />
        </div>
      </div>

      <div className="absolute inset-0 z-0 w-full h-full">
        <RobotCanvas />
      </div>
    </div>
  );
}
