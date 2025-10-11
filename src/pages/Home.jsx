import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Download, ArrowRight } from 'lucide-react';
import { usePortfolioData } from '../utils/userPortFolioData';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  x: Twitter,
  email: Mail,
};

export default function Home() {
  const { data } = usePortfolioData();
  const { profile, projects } = data;
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/40 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-32 h-32 rounded-full border-4 border-accent/20 shadow-lg object-cover"
              />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
              {profile.name}
            </h1>

            <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
              {profile.title}
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {profile.bio}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-accent text-white font-medium hover:opacity-90 transition"
              >
                View Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center px-6 py-3 rounded-xl border border-border text-foreground hover:bg-muted transition"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>

            <div className="flex justify-center space-x-3">
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.type] || Mail;
                return (
                  <a
                    key={social.type}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full hover:bg-muted transition"
                    aria-label={social.type}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">{projects.length}</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">{profile.skills.length}</div>
              <div className="text-sm text-muted-foreground">Core Skills</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block text-base py-2 px-4 rounded-full bg-muted text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <Link to="/projects" className="inline-flex items-center text-sm hover:underline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="group rounded-xl overflow-hidden border hover:shadow-lg transition bg-card"
                >
                  {project.cover ? (
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="w-full h-44 object-cover group-hover:scale-105 transition"
                      loading="lazy"
                    />
                  ) : null}
                  <div className="p-4">
                    <div className="text-xs text-muted-foreground mb-1">{project.year}</div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                      {project.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
