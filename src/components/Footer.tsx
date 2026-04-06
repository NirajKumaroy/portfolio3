import React from "react";
import Image from "next/image";
import logo1 from "../../public/experience.png";
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaEnvelope,
  FaPhone,
  FaMapMarkedAlt,
} from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="bg-white/80  dark:bg-dark/80  flex justify-between items-center">
        <div className="flex flex-col items-center justify-center p-6">
          <Link
            href="/"
            className="text-xl font-bold items-start text-red-400 p-5"
          >
            codeWater&trade;
          </Link>
          <div className="mb-1">
            <FaEnvelope className="inline-block text-red-400 mr-2"></FaEnvelope>
            <a
              href="mailto:youremail@example.com"
              className="font-bold cursor-pointer"
            >
              {" "}
              Email Us : nirajbgs0@gmail.com
            </a>
          </div>
          <div className="mb-1">
            <FaPhone className="inline-block text-red-400 mr-2"></FaPhone>
            <span className="font-bold cursor-pointer">
              Contact No : +91-7667556440
            </span>
          </div>
          <div className="mb-1">
            <FaMapMarkedAlt className="inline-block text-red-400 mr-2"></FaMapMarkedAlt>
            <span className="font-bold cursor-pointer">
              Address : Patna Bihar,India
            </span>
          </div>
          <Image className="w-20 h-20 mb-2" src={logo1} alt="" />
        </div>

        <div className="hidden md:block">
          <h2 className="font-bold text-xl mt-4">CodeWater</h2>
          <div className="w-20 h-1 border-b-2 border-red-400 rounded-2xl my-2"></div>
          <div className="font-bold cursor-pointer">
            <p>Aobut Us</p>
            <p>FAQS</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div className=" mr-5">
          <h2 className="font-bold text-xl mt-4 ">Quick Link</h2>
          <div className="w-18 h-1 border-b-2 mr-5 border-red-400 rounded-2xl my-2"></div>
          <div className="flex flex-col font-bold cursor-pointer">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/services">Services</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="hidden md:block mr-10">
          <h2 className="font-bold text-xl mt-5">follow Us</h2>
          <div className="w-18 h-1 border-b-2 border-red-400 rounded-2xl my-2"></div>
          <span className=" justify-center items-center mt-5 gap-2 text-4xl">
            <Link className="bg-black" href="https://github.com/NirajKumaroy">
              <FaGithubSquare />
            </Link>
            <Link
              className="bg-black"
              href="https://www.linkedin.com/in/niraj-kumar-%F0%9F%87%AE%F0%9F%87%B3-685a55254/"
            >
              <FaLinkedin />
            </Link>
            <Link className="bg-black" href="">
              <FaInstagramSquare />
            </Link>
          </span>
        </div>
      </div>
      <p className="bg-amber-700 text-white dark:text-black h-14 font-bold text-center pt-4 text-sm">
        Welcome aiCoderWithcoffee. &copy; {new Date().getFullYear()}{" "}
        MySite aiCoderWithcoffee. All rights reserved.
      </p>
    </>
  );
}

export default Footer;
