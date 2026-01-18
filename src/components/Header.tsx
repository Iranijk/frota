import { useState } from 'react';
import { Menu, X, Truck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Benefícios', href: '/beneficios' },
    { name: 'Parceiros', href: '/parceiros' },
    { name: 'Cursos EAD', href: '/cursos' },
    { name: 'Contato', href: '/contato' },
    { name: 'Blog', href: '/blog' },
    { name: 'Admin', href: '/admin' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="relative">
              <img 
                src="/lovable-uploads/4a99fc5b-079b-4959-9043-f5f3c42c4848.png" 
                alt="Logo Frota Brasil Associação" 
                className="h-12 w-auto"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Frota Brasil</span>
              <span className="text-xs text-muted-foreground">Associação</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/associacao"
              className="btn-accent px-6 py-2 rounded-lg font-semibold text-sm hover:scale-105 transition-transform"
            >
              Associe-se Grátis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slideDown">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-md ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/associacao"
                className="btn-accent mx-4 mt-4 py-3 rounded-lg font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Associe-se Grátis
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;