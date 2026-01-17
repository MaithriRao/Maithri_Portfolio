import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants';
import { FiArrowLeft, FiCalendar, FiClock, FiExternalLink } from 'react-icons/fi';
import { blogPosts } from '../../data/blogData';

const BlogList: React.FC = () => {
  // Use the actual blog posts with images and proper data
  const allBlogPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const categories = [...new Set(allBlogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn("down", 0.2)}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All Blog Posts
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Insights on DevOps, Machine Learning, Networking, and Software Development
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Categories Filter */}
        <motion.div
          className="mb-12"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
        >
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <div className="flex flex-wrap gap-3">
            <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
              All Posts
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-slate-700 text-slate-300 px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-cyan/50 transition-all duration-300 group"
              variants={fadeIn("up", 0.2 * (index + 1))}
              initial="hidden"
              animate="show"
            >
              {/* Blog Cover Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  // Show category icon when no image
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl">
                      {post.category?.includes('DevOps') ? '⚙️' :
                        post.category?.includes('AI') || post.category?.includes('Artificial Intelligence') ? '🤖' :
                        post.category?.includes('Network') ? '🌐' :
                        post.category?.includes('Linux') || post.category?.includes('System') ? '🐧' : '📝'}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan/20 text-cyan text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan transition-colors duration-300">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-cyan hover:text-white transition-colors duration-300 font-semibold"
                >
                  Read More
                  <FiExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Back to Portfolio */}
        <motion.div
          className="text-center mt-16"
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <FiArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default BlogList;
