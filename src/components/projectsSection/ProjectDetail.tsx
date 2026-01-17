import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../../constants/projectsData";
import { loadProjectContent } from "../../utils/projectLoader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";


const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const [content, setContent] = useState("");

  useEffect(() => {
    if (slug) {
      loadProjectContent(slug).then(setContent);
    }
  }, [slug]);

  if (!project) {
    return <div className="text-white p-10">Project not found.</div>;
  }

  return (
    <div className="text-white p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="text-slate-300 mb-6 text-lg">{project.year}</p>

      <div className="blog-content prose prose-slate prose-invert max-w-none">
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeHighlight, rehypeRaw]}
    components={{
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
      p: ({ children }) => (
        <p className="text-slate-300 leading-relaxed mb-4">
          {children}
        </p>
      ),
      img: ({ src, alt }) => (
        <img
          src={src}
          alt={alt || ""}
          className="w-full rounded-lg my-6 border border-slate-700 shadow-lg"
          loading="lazy"
        />
      ),
      ul: ({ children }) => (
        <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
          {children}
        </ul>
      ),
      li: ({ children }) => (
        <li className="text-slate-300">{children}</li>
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
          <code className={`${className} font-mono text-sm`} {...props}>
            {children}
          </code>
        );
      },
      pre: ({ children }) => (
        <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 overflow-x-auto my-6">
          {children}
        </pre>
      ),
    }}
  >
    {content}
  </ReactMarkdown>
</div>

    </div>
  );
};

export default ProjectDetail;
