"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { services } from "@/app/servicesData/servicesData";
import SliderPage from "@/components/Slider";

const serviceIcons = ["⚡", "💻", "🎨", "🚀", "📱", "🔧"];

function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="relative dark:bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen bg-gradient-to-br py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
      id="service"
    >
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>

      <div className="relative container mx-auto max-w-7xl">
        <SliderPage />

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm md:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 uppercase tracking-widest mb-4 inline-block"
          >
            ✨ My Expertise
          </motion.span>
          <motion.h2
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
          >
            Services I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Offer
            </span>
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2 sm:px-0"
          >
            Delivering cutting-edge solutions tailored to your business needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />

              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 h-full border border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                {/* Icon Section */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 inline-block"
                >
                  {serviceIcons[index % serviceIcons.length]}
                </motion.div>

                {/* Service Number Badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className="inline-flex items-center justify-center w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xs sm:text-sm">
                    {service.id < 10 ? `0${service.id}` : service.id}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mt-4 sm:mt-6">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <div className="flex items-center text-gray-700 dark:text-gray-200">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3" />
                    <span className="text-sm">Professional & Reliable</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-200">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3" />
                    <span className="text-sm">Timely Delivery</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-200">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href={`/services/${service.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Learn More{" "}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-28 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Ready to start your project?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
              Get in touch and let&apos;s discuss how I can help bring your
              vision to life
            </p>
            
            <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            >
              Contact Me
            </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
