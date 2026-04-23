"use client";
import React from "react";
import Image from "next/image";
import Html from "../../../public/Html.png";
import Css from "../../../public/CSS.png";
import Javascript from "../../../public/JS.png";
import ReactLogo from "../../../public/React.png";
import ReduxLogo from "../../../public/Redux.png";
import Tailwind from "../../../public/Tailwind Css.png";
import Bootstrap from "../../../public/Bootstrap.png";
import NodeLogo from "../../../public/NodeLogo.png";
import Mongodb from "../../../public/mongodb.svg";
import Express from "../../../public/Express.png";
import NextJs from "../../../public/NextJs.png";
import MernStack from "../../../public/mernstack.png";
import img from "../../../public/webdev.png";
import imgpng from "../../../public/imgpng.jpg";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

function About() {
  return (
    <div className="relative " id="about">
      <div className="bg-white dark:bg-gradient-to-r from-blue-500 to-purple-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-center mb-5"
            >
              About Me
            </motion.h2>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="content-center text-center flex justify-center "
            >
              <Image
                className="w-30 h-30  md:w-40 md:h-40 border-2 border-black hover:border-red-400 rounded-full "
                src={imgpng}
                alt="image.png"
              />
            </motion.div>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl"
            >
              👋 Hi, I&apos;m Niraj Kumar
            </motion.p>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="mt-4 max-w-2xl text-xl text-gray-950 font-bold lg:mx-auto"
            >
              A Full-Stack Developer with expertise in web development,SEO, and
              the MERN stack.
            </motion.p>
          </div>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.5 }}
            className="mt-10"
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold ">My Journey</h3>
                <p className="mt-4 text-lg text-gray-950 font-bold">
                  I started my journey in web development with a passion for
                  creating intuitive and scalable applications. With proficiency
                  in the MERN stack (MongoDB, Express.js, React, and Node.js), I
                  have built Projects such as a full-stack food ordering website
                  , a job portal, and even a LinkedIn clone. My projects
                  demonstrate my ability to integrate powerful backend solutions
                  with sleek, user-friendly frontend designs.
                </p>
                <Image
                  src={MernStack}
                  alt=""
                  className="p-2 rounded-lg w-52 mt-4"
                />
              </div>
              <div className="border border-red-400 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold ">Skills & Expertise</h3>
                <div className="flex text-white  items-center justify-center flex-wrap gap-3">
                  <div className="bg-black border border-red-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <Image src={Html} alt="" className="w-10" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="bg-black border border-red-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <Image src={Css} alt="" className="w-8" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="bg-black border border-red-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <Image src={Javascript} alt="" className="w-10" />
                    <span className="font-semibold">Javascript</span>
                  </div>
                  <div className="bg-black border border-red-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <Image
                      src={ReactLogo}
                      alt=""
                      className="w-8 rounded-full"
                    />
                    <span className="font-semibold">Vite React</span>
                  </div>
                  <div className="bg-black border border-red-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <Image src={ReduxLogo} alt="" className="w-8" />
                    <span className="font-semibold">Redux</span>
                  </div>
                  <div className="bg-black border border-red-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <Image src={Tailwind} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">Tailwind Css</span>
                  </div>
                  <div className="bg-black border border-red-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <Image src={Bootstrap} alt="" className="w-10" />
                    <span className="font-semibold">Bootstrap</span>
                  </div>
                  <div className="bg-black border border-red-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <Image src={NodeLogo} alt="" className="w-10" />
                    <span className="font-semibold">Node Js</span>
                  </div>
                  <div className="bg-black border border-red-400 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <Image src={Mongodb} alt="" className="w-10" />
                    <span className="font-semibold">Mongodb</span>
                  </div>
                  <div className="bg-black  border border-red-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <Image src={Express} alt="" className="w-10" />
                    <span className="font-semibold">Express Js</span>
                  </div>
                  <div className=" border text-black border-red-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <Image src={NextJs} alt="" className="w-9" />
                    <span className="font-semibold">Next Js</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 gap-12 lg:grid-cols-2 mt-12"
          >
            <div className="">
              <h3 className="text-2xl font-semibold">My Certificate</h3>
              <p className="mt-4 text-lg text-gray-950 font-bold">
                👋 Hello <br />i am Niraj Kumar and i completed diploma in
                electronics engineering but i am interested web development i am
                a web developer with Two years of experience i recently
                completed a web development course from{" "}
                <span className="text-white cursor-pointer">
                  <a href="https://pwskills.com">
                   pwskills.com
                  </a>
                </span>{" "}
                which has given me the latest skills and knowledge in the web
                development industry i learned practical skills in building
                website of clients. <br />
                i enjoy working with other web developers and designers to make
                websites that match the clients brand and business objectives i
                am committed to keeping up with the latest industry trends and
                best practices and i attend professional web development course
                to improve my skills <br />
                my goal is to create website that are both visually appealing
                and easy to use i take pride in exceeding clients expectations
                and delivering projects on time if you are looking for a Web
                developer with skills and experience please feel free to get in
                touch with me...
              </p>
            </div>
            <div className="pt-10">
              <Image className="border-2 rounded-2xl" src={img} alt="" />
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.7 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-semibold">More About Me</h3>
            <p className="mt-4 text-lg text-gray-950 font-bold">
              Apart from coding, I am passionate about learning new technologies
              and keeping myself up-to-date with the latest trends in web
              development and Gen Ai, I also run a YouTube channel where I teach
              Javascript, MERN Stack development, Wordpress and digital
              Marketing, helping others dive deep into the world of programming
              and technology.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
