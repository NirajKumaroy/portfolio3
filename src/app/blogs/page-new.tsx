"use client";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/app/data/blogData";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const categories = ["All", "HTML", "CSS", "JavaScript", "React", "Tailwind"];

  const filteredPosts = blogPosts
    .filter((post) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        (post.title?.toLowerCase() || "").includes(searchLower) ||
        (post.description?.toLowerCase() || "").includes(searchLower) ||
        (post.h1?.toLowerCase() || "").includes(searchLower) ||
        (post.content?.toLowerCase() || "").includes(searchLower) ||
        (post.h?.toLowerCase() || "").includes(searchLower);
      const matchesCategory =
        selectedCategory === "All" || post.h === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.id - a.id;
        case "oldest":
          return a.id - b.id;
        case "alphabetical":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-indigo-100/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Enhanced Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-900"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30">
                📝 Welcome to My Blog
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Dive into <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-400">
                Web Development
              </span>{" "}
              Insights
            </h1>

            <p className="text-xl md:text-2xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge web development techniques, design
              principles, and technology insights that will elevate your coding
              journey
            </p>

            {/* Premium Search and Filter Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              {/* Enhanced Search Bar */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-linear-to-r from-white/20 to-white/10 backdrop-blur-lg rounded-2xl border border-white/20"></div>
                <div className="relative flex items-center">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Search articles, topics, or keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-8 py-5 pr-16 rounded-2xl border-0 bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 text-lg focus:ring-4 focus:ring-white/50 focus:outline-none shadow-2xl"
                    />
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
                      {searchTerm && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSearchTerm("")}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          title="Clear search"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </motion.button>
                      )}
                      <div className="w-px h-6 bg-gray-300"></div>
                      <svg
                        className="w-6 h-6 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter Controls */}
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
                {/* Sort Dropdown */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    aria-label="Sort by"
                    className="appearance-none px-6 py-3 pr-10 rounded-xl border-0 shadow-xl bg-white/95 backdrop-blur-sm text-gray-900 focus:ring-4 focus:ring-white/50 text-sm font-medium"
                  >
                    <option value="newest">🕒 Newest First</option>
                    <option value="oldest">📅 Oldest First</option>
                    <option value="alphabetical">🔤 A-Z</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </motion.div>

                {/* Category Pills */}
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg ${
                        selectedCategory === category
                          ? "bg-white text-indigo-600 shadow-indigo-200 scale-105"
                          : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm hover:shadow-xl"
                      }`}
                    >
                      {category === "All" && "🌟"} {category === "HTML" && "🏗️"}{" "}
                      {category === "CSS" && "🎨"}
                      {category === "JavaScript" && "⚡"}{" "}
                      {category === "React" && "⚛️"}{" "}
                      {category === "Tailwind" && "💨"}
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Search Results Counter */}
              {(searchTerm || selectedCategory !== "All") && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 text-center"
                >
                  <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                    <span className="text-indigo-100 text-sm font-medium">
                      Found{" "}
                      <span className="font-bold text-white">
                        {filteredPosts.length}
                      </span>{" "}
                      article{filteredPosts.length === 1 ? "" : "s"}
                      {searchTerm && ` matching "${searchTerm}"`}
                      {selectedCategory !== "All" && ` in ${selectedCategory}`}
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Post Section */}
      {featuredPost && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-linear-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold rounded-full shadow-lg">
                ⭐ FEATURED ARTICLE
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Must Read
            </h2>
            <div className="w-32 h-1.5 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <Link href={`/blogs/${featuredPost.id}`}>
            <motion.div
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer border border-gray-100 dark:border-gray-700"
            >
              {/* Premium Image Container */}
              <div className="relative h-80 md:h-96 overflow-hidden rounded-t-3xl">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Featured Badge */}
                <div className="absolute top-6 left-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-linear-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold rounded-full shadow-lg"
                  >
                    ⭐ FEATURED
                  </motion.div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-4 py-2 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white text-sm font-semibold rounded-full shadow-lg">
                    {featuredPost.h}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {featuredPost.title.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Author
                      </p>
                      <p className="text-gray-900 dark:text-white font-semibold">
                        Your Name
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium">5 min read</span>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 line-clamp-3">
                  {featuredPost.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm font-medium rounded-full">
                      {featuredPost.h}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      •
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      Jan 15, 2024
                    </span>
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-indigo-600 dark:text-indigo-400 font-semibold group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300"
                  >
                    Read Full Article
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      )}

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest Articles
          </h2>
          <div className="w-32 h-1.5 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            Explore our collection of in-depth tutorials, tips, and insights
          </p>
        </motion.div>

        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24"
          >
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              No Articles Found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto text-lg">
              We couldn&apos;t find any articles matching your search. Try
              different keywords or clear your filters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSortBy("newest");
                }}
                className="px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Clear All Filters
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory("All")}
                className="px-8 py-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Show All Articles
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Enhanced Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white text-xs font-semibold rounded-full shadow-lg"
                    >
                      {post.h}
                    </motion.span>
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-black/50 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      3 min
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-xs">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>3 min read</span>
                    </div>

                    <Link href={`/blogs/${post.id}`}>
                      <motion.div
                        whileHover={{ scale: 1.05, x: 3 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
