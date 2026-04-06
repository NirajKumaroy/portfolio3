"use client";
import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

function Contact() {
  return (
    <div
      className="bg-white h-screen dark:bg-gradient-to-r from-blue-500 to-purple-500 py-12"
      id="contact"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Contact Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <motion.h3
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-transparent bg-clip-text bg-black  mb-4"
            >
              Let&apos;s Talk
            </motion.h3>
            <motion.p {...fadeInUp} transition={{ delay: 0.3 }}>
              I&apos;m open to discussing web development prjectgs or
              partnership opportunities.
            </motion.p>

            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-black mr-2"></FaEnvelope>
              <motion.a
                {...fadeInUp}
                transition={{ delay: 0.4 }}
                href="mailto:youremail@example.com"
                className="hover:underline"
              >
                nirajbgs0@gmail.com
              </motion.a>
            </div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              className="mb-4"
            >
              <FaPhone className="inline-block text-black mr-2"></FaPhone>
              <span>+91-7667556440</span>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="mb-4"
            >
              <FaMapMarkedAlt className="inline-block text-black mr-2"></FaMapMarkedAlt>
              <span>Patna Bihar,India</span>
            </motion.div>
          </div>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.7 }}
            className="flex-1 w-full"
          >
            <form
              action={"https://api.web3forms.com/submit"}
              method="POST"
              className="space-y-4"
            >
              <input
                type="hidden"
                name="access_key"
                value={"7c42e71e-1ee8-42e6-abd5-031666473bab"}
              />
              <label htmlFor="name" className="block mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full p-2 rounded text-white bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-white"
                name="name"
                placeholder="Enter You Name"
                required
              />

              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 rounded text-white bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-white"
                name="email"
                placeholder="Enter You Email"
                required
              />

              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                className="w-full p-2 rounded text-white bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-white"
                name="message"
                rows={5}
                placeholder="Enter You Message"
                required
              />

              <button
                className="bg-gradient-to-r from-purple-600 to-yellow-50 font-bold text-black md:inline
            transform transition-transform border-2 hover:bg-black hover:text-white duration-300 hover:scale-105 px-8 py-2 rounded-xl"
              >
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
