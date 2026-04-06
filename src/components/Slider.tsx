"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { scaleIn } from "@/utils/animations";
import Image from "next/image";

export default function SliderPage() {
  const slides = [
    {
      id: 1,
      image: "/assets/cl1.jpeg",
      title: "Slide One",
      description:
        "Hey i am Dhiraj kumar  this is good developer create my website juice shop i seal near order hostel and restorant .  ",
    },
    {
      id: 2,
      image: "/assets/cl2.png",
      title: "Slide Two",
      description:
        "Hi i am dr. Rintu Kumar this is good developer my website create health care appointment application and good  Experience the beauty of nature in this field .",
    },
    {
      id: 3,
      image: "/assets/cl3.png",
      title: "Slide Three",
      description:
        "Hi i am Sambhu Das this is good developer my website create health care appointment application and good  Experience the beauty of nature in this field . ",
    },
    {
      id: 4,
      image: "/assets/manicon.png",
      title: "Slide Four",
      description:
        "Hi i am mohit Kumar this boy good developer create my website i seal makhana . ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const AUTO_PLAY = true;
  const AUTO_PLAY_INTERVAL = 1000;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!AUTO_PLAY || isPaused) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(id);
  }, [isPaused]);

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-screen  h-screen flex items-center justify-center transition-all duration-700 ease-in-out">
        <div className="flex text-black dark:text-white flex-col items-center">
          <motion.h1
            {...scaleIn}
            transition={{ delay: 0.1 }}
            className="text-4xl text-center font-bold  mb-6"
          >
            Build This Client Projects
          </motion.h1>
          <motion.div {...scaleIn} transition={{ delay: 0.2 }}>
            <Image
              src={slides[currentIndex].image}
              width={320}
              height={240}
              alt={slides[currentIndex].title}
              className="w-80 h-56 object-cover rounded-xl shadow-lg mb-6"
            />
          </motion.div>
          <motion.h1
            {...scaleIn}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl  font-bold mb-3"
          >
            {slides[currentIndex].title}
          </motion.h1>
          <motion.p
            {...scaleIn}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-gray-900 max-w-xl text-center"
          >
            {slides[currentIndex].description}
            <h1 className="p-2">⭐⭐⭐⭐⭐</h1>
          </motion.p>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 text-white text-3xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/80"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 text-white text-3xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/80"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
