import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1e293b] bg-[#0f172a]/60 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-[#8b5cf6] hover:text-[#14b8a6] transition-colors">
            CTRL AKE
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#e2e8f0]'
                    : 'text-[#94a3b8] hover:text-[#8b5cf6]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile nav */}
        <nav className="md:hidden pb-4 flex justify-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-[#e2e8f0]'
                  : 'text-[#94a3b8] hover:text-[#8b5cf6]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
