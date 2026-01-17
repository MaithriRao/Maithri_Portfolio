import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { publications } from "../../constants/publicationsData";
import { loadPublicationContent } from "../../utils/publicationLoader";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

const PublicationDetail = () => {
  const { slug } = useParams();
  const publication = publications.find((p) => p.slug === slug);

  const [content, setContent] = useState("");

  useEffect(() => {
    if (slug) {
      loadPublicationContent(slug).then((data) => setContent(data));
    }
  }, [slug]);

  if (!publication) {
    return (
      <div className="text-white p-10">
        Publication not found.
      </div>
    );
  }

  return (
    <div className="text-white p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{publication.title}</h1>
      <p className="text-slate-400 mb-2">{publication.authors}</p>
      <p className="text-slate-500 mb-8">
        {publication.journal} • {publication.year}
      </p>

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold text-white mb-6 mt-8">
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

export default PublicationDetail;
