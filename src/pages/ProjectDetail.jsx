import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  FileText,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Briefcase,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePortfolioData } from "../utils/userPortFolioData";
import { setStorageItem, STORAGE_KEYS } from "../utils/localStorage";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data } = usePortfolioData();
  const { projects } = data;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projects.find((p) => p.slug === slug);
  const currentProjectIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject =
    currentProjectIndex > 0 ? projects[currentProjectIndex - 1] : null;
  const nextProject =
    currentProjectIndex < projects.length - 1
      ? projects[currentProjectIndex + 1]
      : null;

  useEffect(() => {
    if (project) setStorageItem(STORAGE_KEYS.LAST_PROJECT, project.slug);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0e0f14] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/projects")}
            className="px-6 py-2 rounded-lg bg-[#8b5cf6] hover:bg-[#7c3aed] transition"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const allImages = [project.cover, ...(project.gallery || [])];

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0f14] text-[#e2e8f0] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/projects")}
          className="mb-8 flex items-center text-[#94a3b8] hover:text-[#8b5cf6] transition"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Projects
        </button>

        {/* Hero / Gallery */}
        <div className="mb-12">
          <div className="relative aspect-video bg-[#141620] rounded-xl overflow-hidden">
            <img
              src={allImages[currentImageIndex]}
              alt={`${project.title} - ${currentImageIndex + 1}`}
               className="object-contain w-full h-full transition-all duration-300 "
            />

            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer bg-[#0f172a]/70 backdrop-blur-sm p-2 rounded-full hover:bg-[#1e293b] transition"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer bg-[#0f172a]/70 backdrop-blur-sm p-2 rounded-full hover:bg-[#1e293b] transition"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {allImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentImageIndex
                          ? "bg-[#8b5cf6] w-6"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 text-xs rounded-full border border-[#1e293b] bg-[#141620] text-[#e2e8f0]"
              >
                {category}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-[#94a3b8] mb-6">{project.summary}</p>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 text-sm mb-6 text-[#94a3b8]">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> {project.year}
            </span>
            {project.role && (
              <span className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" /> {project.role}
              </span>
            )}
            {project.teamSize && (
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                {project.teamSize}{" "}
                {project.teamSize === 1 ? "person" : "people"}
              </span>
            )}
            {project.status && (
              <span className="px-3 py-1 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-xs">
                {project.status}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[#8b5cf6] text-white flex items-center gap-2 hover:bg-[#7c3aed] transition"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-[#1e293b] flex items-center gap-2 text-[#e2e8f0] hover:bg-[#1e1f2a] transition"
              >
                <Github className="h-4 w-4" /> View Code
              </a>
            )}
            {project.links?.caseStudy && (
              <a
                href={project.links.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-[#1e293b] flex items-center gap-2 text-[#e2e8f0] hover:bg-[#1e1f2a] transition"
              >
                <FileText className="h-4 w-4" /> Case Study
              </a>
            )}
          </div>
        </div>

        {/* Main Content + Sidebar */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-12">
            {project.problemMd && (
              <div className="p-8 rounded-xl bg-[#141620] border border-[#1e293b]">
                <h3 className="text-2xl font-semibold mb-3">🎯 Problem</h3>
                <p className="text-[#cbd5e1] whitespace-pre-line text-lg">
                  {project.problemMd}
                </p>
              </div>
            )}
            {project.approachMd && (
              <div className="p-8 rounded-xl bg-[#141620] border border-[#1e293b]">
                <h3 className="text-2xl font-semibold mb-3">🧠 Approach</h3>
                <p className="text-[#cbd5e1] whitespace-pre-line text-lg">
                  {project.approachMd}
                </p>
              </div>
            )}
            {project.outcomeMd && (
              <div className="p-8 rounded-xl bg-[#141620] border border-[#1e293b]">
                <h3 className="text-2xl font-semibold mb-3">🏆 Outcome</h3>
                <p className="text-[#cbd5e1] whitespace-pre-line text-lg">
                  {project.outcomeMd}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[#141620] border border-[#1e293b]">
              <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-full bg-[#1e1f2a] text-[#8b5cf6]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#141620] border border-[#1e293b]">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-full bg-[#1e1f2a] text-[#8b5cf6]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-[#1e293b] flex justify-between items-center">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="px-4 py-2 rounded-lg border border-[#1e293b] flex items-center gap-2 hover:bg-[#1e1f2a] transition"
            >
              <ChevronLeft className="h-4 w-4" />
              {prevProject.title}
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/projects"
            className="text-[#94a3b8] hover:text-[#8b5cf6] transition"
          >
            All Projects
          </Link>

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="px-4 py-2 rounded-lg border border-[#1e293b] flex items-center gap-2 hover:bg-[#1e1f2a] transition"
            >
              {nextProject.title}
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
