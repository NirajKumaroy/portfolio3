"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/app/servicesData/servicesData";

export default function servicesPostPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number.parseInt(params.id);
  const post = services.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-950 dark:via-purple-950 dark:to-indigo-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-8xl mb-6">🔍</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Service not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The service you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Back to Services
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-40 lg:pt-40 lg:pb-48 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Services
            </Link>

            <div className=" ">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 shadow-lg border border-white/20">
                ✨ Premium Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto">
                {post.title}
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                {post.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
        >
          {/* Featured Image Container */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full bg-gray-200 dark:bg-gray-700">
            <Image
              src={post.image ?? "/placeholder.jpg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>

          {/* Content Body */}
          <div className="p-8 sm:p-12 lg:p-16">
            <div className="prose prose-lg sm:prose-xl max-w-none text-gray-600 dark:text-gray-300 mb-12">
              <p className="whitespace-pre-line leading-relaxed">
                {post.Content}
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="mt-16 pt-12 border-t border-gray-100 dark:border-gray-700">
              <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Choose This Service?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Everything you need to succeed with top-tier results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "High-quality, responsive design tailored to your needs",
                  "Modern technologies and best practices implementation",
                  "Performance optimized for fast loading and smooth user experience",
                  "SEO-friendly structure to improve search engine visibility",
                  "Cross-browser compatibility and mobile responsiveness",
                  "24/7 dedicated support and maintenance",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start p-5 rounded-2xl bg-blue-50 dark:bg-gray-700/50 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors duration-300 border border-blue-100/50 dark:border-gray-600/50"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-4 text-gray-700 dark:text-gray-200 font-medium">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                    Let&apos;s discuss your project requirements and see how we
                    can help you achieve your goals with this service.
                  </p>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get a Free Quote
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
