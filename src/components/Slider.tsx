"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { scaleIn } from "@/utils/animations";
import Image from "next/image";

export default function Slider() {
  const slides = [
    {
      id: 1,
      image: "/assets/cl1.jpeg",
      title: "Slide One",
      description:
        "Hey, I am Dhiraj Kumar, a good developer who created a website for a juice shop. I sell near order hostels and restaurants.",
    },
    {
      id: 2,
      image: "/assets/cl2.png",
      title: "Slide Two",
      description:
        "Hi, I am Dr. Rintu Kumar, a good developer who created a website for a health care appointment application with great experience. Experience the beauty of nature in this field.",
    },
    {
      id: 3,
      image: "/assets/cl3.png",
      title: "Slide Three",
      description:
        "Hi, I am Sambhu Das, a good developer who created a website for a health care appointment application with great experience. Experience the beauty of nature in this field.",
    },
    {
      id: 4,
      image: "/assets/manicon.png",
      title: "Slide Four",
      description:
        "Hi, I am Mohit Kumar, a good developer who created a website for selling makhana.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const AUTO_PLAY = true;
  const AUTO_PLAY_INTERVAL = 4000;

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
  }, [isPaused, AUTO_PLAY, slides.length]);

  return (
    <section
      aria-label="Autoplay slider"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
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
          </motion.p>
          <motion.div {...scaleIn} transition={{ delay: 0.5 }} className="p-2">
            ⭐⭐⭐⭐⭐
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 text-white text-3xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/80"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 text-white text-3xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/80"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
