import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { FiExternalLink, FiCalendar, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getFeaturedPosts } from "../../data/blogData";

const BlogsSection = () => {
  // Get your actual blog posts with images from blogData
  const featuredPosts = getFeaturedPosts().slice(0, 6); // Show first 6 featured posts

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div
      id="Blogs"
      className="max-w-[1200px] mx-auto pt-[120px] pb-[100px] px-4"
    >
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Latest Articles
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
        <p className="text-slate-400 text-center text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
          Explore my thoughts on AI, DevOps, System Administration, and cutting-edge technology insights
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredPosts.map((post, index) => (
          <motion.article
            key={post.id}
            className="bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-700/30 hover:border-cyan-400/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
            variants={fadeIn("up", 0.1 * (index + 1))}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Blog Header */}
            <div className="relative h-48 bg-gradient-to-br from-slate-700/50 to-slate-800/50 overflow-hidden">
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
                  <span className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {post.category?.includes('DevOps') ? '⚙️' :
                      post.category?.includes('AI') || post.category?.includes('Artificial Intelligence') ? '🤖' :
                      post.category?.includes('Network') ? '🌐' :
                      post.category?.includes('Linux') || post.category?.includes('System') ? '🐧' : '📝'}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <div className="flex items-center gap-1.5">
                  <FiCalendar className="w-4 h-4 text-cyan-400" />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center gap-1.5">
                  <FiClock className="w-4 h-4 text-cyan-400" />
                  {post.readTime}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                {post.title}
              </h3>
              
              <p className="text-slate-300 mb-5 leading-relaxed text-sm line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.slice(1, 3).map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs bg-slate-700/40 text-slate-300 px-2.5 py-1 rounded-full border border-slate-600/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More Button */}
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-all duration-300 font-medium text-sm group-hover:translate-x-1"
              >
                Read Article
                <FiExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {/* View All Articles Button */}
      <motion.div
        className="text-center"
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-3 text-slate-300 hover:text-white border-2 border-slate-600/50 hover:border-cyan-400/50 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 backdrop-blur-sm"
        >
          View All Articles
          <FiExternalLink className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
};

export default BlogsSection;
