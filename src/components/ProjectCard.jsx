import { Link } from "react-router-dom";
import { Calendar, Users, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, view = "grid" }) {
  const isGrid = view === "grid";

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group block overflow-hidden rounded-2xl border border-[#1e293b] bg-[#0f1420]/40 hover:border-[#334155] transition ${
        isGrid ? "flex flex-col" : "flex flex-col sm:flex-row"
      }`}
    >
      {/* Cover */}
      <div
        className={`relative overflow-hidden bg-[#141620] ${
          isGrid ? "aspect-video" : "sm:w-48 aspect-video sm:aspect-square"
        }`}
      >
        {project.cover ? (
          <img
            src={project.cover}
            alt={project.title}
            className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-[#334155] text-sm opacity-60">
            No Image
          </div>
        )}

        {/* Year badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs bg-[#0f172a]/80 text-[#e2e8f0] border border-[#1e293b]">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col ${!isGrid ? "flex-1" : ""}`}>
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-xl font-semibold text-[#e2e8f0] group-hover:text-[#8b5cf6] transition">
            {project.title}
          </h3>
          <ExternalLink className="h-5 w-5 text-[#94a3b8] group-hover:text-[#8b5cf6] transition" />
        </div>

        <p className="text-sm text-[#94a3b8] mb-4 line-clamp-2">
          {project.summary}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.categories?.map((category) => (
            <span
              key={category}
              className="px-2.5 py-1 text-xs rounded-full bg-[#141620] border border-[#1e293b] text-[#e2e8f0]"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-full bg-[#1e1f2a] text-[#8b5cf6]"
            >
              {tag}
            </span>
          ))}
          {project.tags?.length > 4 && (
            <span className="px-2.5 py-1 text-xs rounded-full bg-[#1e1f2a] text-[#8b5cf6]">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-6 text-sm text-[#94a3b8] mt-auto">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{project.year}</span>
          </div>
          {project.teamSize && (
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>
                {project.teamSize}{" "}
                {project.teamSize === 1 ? "person" : "people"}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
