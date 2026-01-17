import { Link } from "react-router-dom";
import { publications } from "../../constants/publicationsData";

const Publications = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-10">
          Publications
        </h1>

        <div className="space-y-8">
          {publications.map((pub) => (
            <div
              key={pub.slug}
              className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700"
            >
              <h2 className="text-2xl font-semibold text-cyan-400">
                {pub.title}
              </h2>

              <p className="text-slate-300 mt-2">{pub.authors}</p>
              <p className="text-slate-500 text-sm">
                {pub.journal} • {pub.year}
              </p>

              <div className="mt-4 flex gap-4">
                <Link
                  to={`/publications/${pub.slug}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Read More
                </Link>

                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    View Paper
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
