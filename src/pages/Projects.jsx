import { useState, useMemo } from "react";
import { Grid, List, Search } from "lucide-react";
import { usePortfolioData } from "../utils/userPortFolioData";
import { getStorageItem, setStorageItem, STORAGE_KEYS } from "../utils/localStorage";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const { data } = usePortfolioData();
  const { projects, categories } = data;

  const [viewMode, setViewMode] = useState(() =>
    getStorageItem(STORAGE_KEYS.VIEW_MODE, "grid")
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    setStorageItem(STORAGE_KEYS.VIEW_MODE, mode);
  };

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.techStack.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.categories.includes(selectedCategory));
    }

    const sorted = [...filtered];
    switch (sortBy) {
      case "newest":
        sorted.sort((a, b) => b.year - a.year);
        break;
      case "oldest":
        sorted.sort((a, b) => a.year - b.year);
        break;
      case "a-z":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    return sorted;
  }, [projects, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0] pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="pt-10 pb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Search projects, tags, or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-[#141620] border border-[#1e293b] text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:border-[#8b5cf6]"
              />
            </div>

            {/* Category */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-56 bg-[#141620] border border-[#1e293b] rounded-2xl px-4 py-3 text-[#e2e8f0] focus:outline-none focus:border-[#14b8a6]"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-48 bg-[#141620] border border-[#1e293b] rounded-2xl px-4 py-3 text-[#e2e8f0] focus:outline-none focus:border-[#14b8a6]"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="a-z">A–Z</option>
              <option value="z-a">Z–A</option>
            </select>

            {/* View toggle */}
            <div className="flex items-center gap-2">
              <button
                aria-label="Grid view"
                onClick={() => handleViewModeChange("grid")}
                className={`h-11 w-11 rounded-xl border border-[#1e293b] flex items-center justify-center transition 
                  ${viewMode === "grid" ? "bg-[#8b5cf6] text-white" : "text-[#94a3b8] hover:text-[#8b5cf6]"}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                aria-label="List view"
                onClick={() => handleViewModeChange("list")}
                className={`h-11 w-11 rounded-xl border border-[#1e293b] flex items-center justify-center transition 
                  ${viewMode === "list" ? "bg-[#8b5cf6] text-white" : "text-[#94a3b8] hover:text-[#8b5cf6]"}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Count */}
        <div className="text-sm text-[#94a3b8] mb-6">
          Showing {filteredAndSortedProjects.length} of {projects.length} projects
        </div>

        {/* Results */}
        {filteredAndSortedProjects.length ? (
          <div
            className={
              viewMode === "grid"
                ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                : "flex flex-col gap-6"
            }
          >
            {filteredAndSortedProjects.map((p) => (
              <ProjectCard key={p.id} project={p} view={viewMode} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center text-[#94a3b8]">No projects found.</div>
        )}
      </div>
    </div>
  );
}
