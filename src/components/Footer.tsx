import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacao: [
      { name: 'Início', href: '/' },
      { name: 'Sobre Nós', href: '/sobre' },
      { name: 'Benefícios', href: '/beneficios' },
      { name: 'Associação', href: '/associacao' },
    ],
    servicos: [
      { name: 'Cursos EAD', href: '/cursos' },
      { name: 'Telemedicina 24h', href: '/beneficios#telemedicina' },
      { name: 'BDM Bank', href: '/beneficios#banco' },
      { name: 'Orientação Jurídica', href: '/beneficios#juridico' },
    ],
    recursos: [
      { name: 'Blog', href: '/blog' },
      { name: 'Contato', href: '/contato' },
      { name: 'FAQ', href: '/associacao#faq' },
      { name: 'Suporte', href: '/contato#suporte' },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img
                  src="/lovable-uploads/4a99fc5b-079b-4959-9043-f5f3c42c4848.png"
                  alt="Logo Frota Brasil Associação"
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Frota Brasil</span>
                <span className="text-sm opacity-80">Associação</span>
              </div>
            </Link>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              Trabalhando por pessoas. Apoiando caminhoneiros e motoristas profissionais 
              com benefícios essenciais e capacitação em todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links de Navegação */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegação</h3>
            <ul className="space-y-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm opacity-90">(67) 99646-3487</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm opacity-90">contato@frotabrasil.org.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm opacity-90">
                  Atendimento em todo<br />território nacional
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © {currentYear} Associação Frota Brasil. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacidade" className="opacity-80 hover:opacity-100 transition-opacity">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="opacity-80 hover:opacity-100 transition-opacity">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;