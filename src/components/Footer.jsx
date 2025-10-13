import { Github, Youtube ,Music2 , Mail, ArrowUp } from 'lucide-react';
import { Button } from '@mui/material';

const socialIcons = {
  github: Github,
  youtube: Youtube ,
  tiktok: Music2 ,
  email: Mail,
};

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="mt-20 border-t border-[#1e293b] bg-gradient-to-t from-[#0e0f14] to-[#141620] text-[#94a3b8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm">© {new Date().getFullYear()} Ctrl AKE. All rights reserved.</p>
          </div>

          <div className="flex space-x-4">
            {Object.entries(socialIcons).map(([key, Icon]) => (
              <a
                key={key}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-[#1e1f2a] text-[#e2e8f0] hover:text-[#8b5cf6] transition"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 border border-[#1e293b] rounded-lg text-[#e2e8f0] hover:text-[#14b8a6] transition"
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
