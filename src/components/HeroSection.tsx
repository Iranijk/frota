import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-trucker.jpg';

const HeroSection = () => {
  const achievements = [
    { icon: Shield, text: 'Telemedicina 24h', color: 'text-accent' },
    { icon: Award, text: 'BDM Bank sem custos', color: 'text-secondary' },
    { icon: CheckCircle, text: 'Cursos EAD certificados', color: 'text-primary' },
    { icon: Users, text: '+10.000 associados', color: 'text-accent' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Caminhoneiro profissional sorrindo na estrada brasileira" 
          className="w-full h-full object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow fade-in">
            Bem-vindo à<br />
            <span className="text-accent">Associação Frota Brasil</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-shadow slide-up">
            Trabalhando por Pessoas
          </p>
          
          <p className="text-lg md:text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed slide-up">
            Benefícios exclusivos para você, motorista do Brasil. 
            Conquistamos telemedicina 24h, conta bancária sem custos, 
            orientação jurídica e cursos certificados pelo Detran/Senatran.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 scale-in">
            <Link 
              to="/associacao" 
              className="btn-accent px-8 py-4 text-lg font-bold rounded-xl hover:scale-105 transition-all flex items-center justify-center group"
            >
              Associe-se Agora – Sempre Gratuito!
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/beneficios" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-white/30 transition-all border border-white/30"
            >
              Conheça os Benefícios
            </Link>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-all fade-in border border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <achievement.icon className={`h-8 w-8 ${achievement.color} mb-3 mx-auto`} />
                <p className="text-sm font-medium text-center">{achievement.text}</p>
              </div>
            ))}
          </div>

          {/* Pricing Info */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20 fade-in">
            <p className="text-lg font-semibold mb-2">🎉 Associação Gratuita</p>
            <p className="text-xl">
              <span className="text-accent font-bold text-2xl">SEMPRE GRATUITO!</span>
            </p>
            <p className="text-sm opacity-80 mt-2">
              Associação 100% gratuita para sempre
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;