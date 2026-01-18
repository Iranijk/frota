import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  CreditCard, 
  Scale, 
  GraduationCap, 
  Shield, 
  Truck,
  Star,
  Quote,
  Calendar,
  TrendingUp
} from 'lucide-react';

const Index = () => {
  const benefits = [
    {
      icon: Stethoscope,
      title: 'Telemedicina 24h',
      description: 'Atendimento médico online 24 horas por dia, 7 dias da semana. Consultas, receitas e orientações médicas.',
      color: 'text-accent'
    },
    {
      icon: CreditCard,
      title: 'BDM Bank',
      description: 'Conta bancária sem custos mensais com cartão personalizado Frota Brasil. Sem tarifas abusivas.',
      color: 'text-secondary'
    },
    {
      icon: Scale,
      title: 'Orientação Jurídica',
      description: 'Suporte jurídico especializado em direito do transportador. Tire suas dúvidas com advogados.',
      color: 'text-primary'
    },
    {
      icon: GraduationCap,
      title: 'Cursos EAD Certificados',
      description: 'MOPP, emergência, cargas indivisíveis, transporte escolar. Certificados válidos nacionalmente.',
      color: 'text-accent'
    },
    {
      icon: Shield,
      title: 'Seguros Especiais',
      description: 'Seguros para cargas e veículos com condições exclusivas para associados da Frota Brasil.',
      color: 'text-secondary'
    },
    {
      icon: Truck,
      title: 'Suporte ao Transportador',
      description: 'Assessoria completa para motoristas profissionais, MEIs e transportadoras autônomas.',
      color: 'text-primary'
    }
  ];

  const testimonials = [
    {
      name: 'João Silva',
      role: 'Caminhoneiro há 15 anos',
      content: 'A Frota Brasil mudou minha vida! Consegui fazer o curso de MOPP e agora tenho mais oportunidades de trabalho.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      role: 'Motorista de Van Escolar',
      content: 'O suporte jurídico me ajudou muito quando tive problemas com documentação. Recomendo para todos!',
      rating: 5
    },
    {
      name: 'Carlos Oliveira',
      role: 'Empresário do Transporte',
      content: 'Os cursos EAD são excelentes e a telemedicina 24h é um diferencial incrível para minha equipe.',
      rating: 5
    }
  ];

  const recentNews = [
    {
      title: 'Nova parceria com BDM Bank oferece conta gratuita',
      date: '15 Dez 2024',
      summary: 'Associados agora têm acesso a conta bancária sem tarifas mensais...'
    },
    {
      title: 'Curso de MOPP com 90% de aprovação',
      date: '10 Dez 2024',
      summary: 'Nosso programa de capacitação continua formando profissionais...'
    },
    {
      title: 'Telemedicina atende mais de 1.000 consultas por mês',
      date: '05 Dez 2024',
      summary: 'Serviço médico online supera expectativas e ganha reconhecimento...'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Benefícios Principais */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Conquistas dos Últimos 3 Anos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trabalhamos incansavelmente para oferecer os melhores benefícios 
              aos motoristas profissionais do Brasil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-gradient hover:scale-105 transition-all duration-300 fade-in border-0">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <benefit.icon className={`h-16 w-16 ${benefit.color} mx-auto`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/beneficios">
              <Button className="btn-primary px-8 py-3 text-lg rounded-xl">
                Ver Todos os Benefícios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              O Que Nossos Associados Dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais de quem já faz parte da nossa família
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 fade-in">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notícias Recentes */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Últimas Notícias
              </h2>
              <p className="text-xl text-muted-foreground">
                Fique por dentro das novidades da Frota Brasil
              </p>
            </div>
            <Link to="/blog">
              <Button variant="outline" className="mt-4 md:mt-0">
                Ver Todas as Notícias
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="font-bold text-primary mb-3 leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {news.summary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 hero-gradient">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto text-white">
            <TrendingUp className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6 text-shadow">
              Junte-se aos Milhares de Motoristas
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Que já conquistaram benefícios reais com a Associação Frota Brasil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/associacao">
                <Button className="btn-accent px-8 py-4 text-lg font-bold rounded-xl hover:scale-105 transition-transform">
                  Associe-se Gratuitamente
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;