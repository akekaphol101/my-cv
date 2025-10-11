import { Link, useLocation } from 'react-router-dom';
export function Header() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            CTRL AKE
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === item.path ? 'text-foreground' : 'text-muted-foreground'}`
                  }
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
              className={
                `text-sm font-medium transition-colors hover:text-accent
                ${location.pathname === item.path
                  ? 'text-foreground'
                  : 'text-muted-foreground'}`
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
