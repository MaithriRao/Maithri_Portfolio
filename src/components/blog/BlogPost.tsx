import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants';
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { getBlogPostBySlug, loadBlogPostContent, type BlogPostMeta } from '../../utils/blogLoader';
import { getPostBySlug } from '../../data/blogData';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostMeta | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [coverImage, setCoverImage] = useState<string>('');

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      const postMeta = getBlogPostBySlug(slug);
      
      if (!postMeta) {
        setLoading(false);
        return;
      }

      setPost(postMeta);
      
      // Get cover image from blogData
      const blogDataPost = getPostBySlug(slug);
      if (blogDataPost?.image) {
        setCoverImage(blogDataPost.image);
      }
      
      try {
        const postContent = await loadBlogPostContent(slug);
        setContent(postContent);
      } catch (error) {
        console.error('Error loading post content:', error);
        setContent('Error loading post content. Please try again later.');
      }
      
      setLoading(false);
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mb-4"></div>
          <h1 className="text-2xl font-bold text-white">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-slate-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.article
          initial="hidden"
          animate="show"
          variants={fadeIn("up", 0.2)}
          className="bg-slate-800 rounded-2xl shadow-2xl p-8"
        >
          <div className="mb-12">
            {/* Cover Image */}
            {coverImage && (
              <div className="mb-8 -mx-8">
                <img 
                  src={coverImage}
                  alt={post.title}
                  className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
                  loading="lazy"
                />
              </div>
            )}
            
            <div className="flex items-center gap-4 text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <time>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</time>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div className="blog-content prose prose-slate prose-invert max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
              components={{
                table: ({ children }) => (
                  <div className="overflow-x-auto my-8">
                    <table className="w-full border-collapse bg-slate-800/50 border border-slate-600 rounded-lg overflow-hidden">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-slate-700">
                    {children}
                  </thead>
                ),
                th: ({ children }) => (
                  <th className="px-4 py-3 text-left text-cyan-400 font-semibold text-sm uppercase tracking-wide border-b border-slate-600">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-4 py-3 text-slate-300 border-b border-slate-600 last:border-b-0">
                    {children}
                  </td>
                ),
                tr: ({ children }) => (
                  <tr className="hover:bg-slate-700/50 transition-colors">
                    {children}
                  </tr>
                ),
                code: ({ node, inline, className, children, ...props }: any) => {
                  if (inline) {
                    return (
                      <code 
                        className="bg-slate-800 text-cyan-400 px-2 py-1 rounded text-sm font-mono"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code 
                      className={`${className} font-mono text-sm`}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 overflow-x-auto my-6">
                    {children}
                  </pre>
                ),
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold text-white mb-6 mt-8 first:mt-0">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-slate-200 mb-3 mt-6">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="text-white font-semibold">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="text-cyan-300 italic">
                    {children}
                  </em>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-cyan-400 bg-slate-800 pl-4 py-2 my-6 rounded-r-lg">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-slate-300 mb-4 space-y-2">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-slate-300">
                    {children}
                  </li>
                ),
                img: ({ src, alt }) => (
                  <img 
                    src={src} 
                    alt={alt || ''}
                    className="w-full rounded-lg my-6 border border-slate-700 shadow-lg"
                    loading="lazy"
                  />
                ),
                a: ({ href, children }) => (
                  <a 
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                  >
                    {children}
                  </a>
                )
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </motion.article>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <Link 
            to="/blog"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to all posts
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
