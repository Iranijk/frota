import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Calendar,
  MapPin,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const Sobre = () => {
  const timeline = [
    {
      year: '2022',
      title: 'Fundação da Associação',
      description: 'Donner de Souza funda a Associação Frota Brasil com o sonho de apoiar caminhoneiros brasileiros.',
      icon: Users
    },
    {
      year: '2023',
      title: 'Primeiros Benefícios',
      description: 'Conquista da parceria para orientação jurídica especializada e primeiros cursos EAD.',
      icon: Award
    },
    {
      year: '2024',
      title: 'Telemedicina 24h',
      description: 'Lançamento do serviço de telemedicina 24 horas, revolucionando o atendimento médico.',
      icon: CheckCircle
    },
    {
      year: '2024',
      title: 'Parceria BDM Bank',
      description: 'Conta bancária gratuita para todos os associados, eliminando tarifas abusivas.',
      icon: TrendingUp
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Trabalhando por Pessoas',
      description: 'Nossa essência é cuidar de pessoas. Cada caminhoneiro é parte da nossa família e merece dignidade, respeito e oportunidades.'
    },
    {
      icon: Users,
      title: 'União e Solidariedade',
      description: 'Acreditamos na força da união. Juntos, os transportadores brasileiros podem conquistar muito mais do que sozinhos.'
    },
    {
      icon: Target,
      title: 'Resultados Concretos',
      description: 'Não prometemos, entregamos. Cada benefício conquistado é uma vitória real na vida dos nossos associados.'
    },
    {
      icon: Eye,
      title: 'Transparência Total',
      description: 'Prestamos contas de cada ação, cada conquista e cada investimento feito em prol dos transportadores.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6 text-shadow">
            Nossa História
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Conheça a trajetória de dedicação, luta e conquistas da Associação Frota Brasil
          </p>
        </div>
      </section>

      {/* Bio do Presidente */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Donner de Souza
              </h2>
              <p className="text-lg text-accent font-semibold mb-4">
                Presidente e Fundador
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Caminhoneiro há mais de 20 anos, Donner de Souza conhece de perto os desafios 
                  enfrentados pelos transportadores brasileiros. Nascido em uma família humilde, 
                  começou como ajudante de caminhão aos 16 anos e hoje é empresário do setor.
                </p>
                <p>
                  Em 2022, movido pela paixão de ajudar outros profissionais da estrada, 
                  fundou a Associação Frota Brasil com uma missão clara: 
                  <strong className="text-primary"> trabalhar por pessoas</strong>.
                </p>
                <p>
                  "Cada conquista nossa é uma vitória de todos os caminhoneiros do Brasil. 
                  Não medimos esforços para oferecer dignidade, respeito e oportunidades 
                  para quem move o nosso país", diz Donner.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contato">
                  <Button className="btn-primary px-6 py-3">
                    Fale com o Presidente
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square">
                    <img 
                      src="/lovable-uploads/170f9037-d12f-4487-aa2b-1ae5f2b2fd2a.png" 
                      alt="Donner de Souza, Presidente da Frota Brasil, ao lado de caminhões Scania" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Nossos Princípios
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Apoiar caminhoneiros e motoristas profissionais com serviços essenciais, 
                  capacitação e benefícios que transformem suas vidas e fortaleçam o setor 
                  de transporte brasileiro.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Eye className="h-16 w-16 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser a principal associação de transportadores do Brasil, reconhecida pela 
                  excelência dos serviços e pelo impacto positivo na vida dos profissionais 
                  da estrada.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Heart className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Valores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transparência, solidariedade, excelência, inovação e, acima de tudo, 
                  o compromisso inabalável de trabalhar por pessoas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline de Conquistas */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Timeline de Conquistas
            </h2>
            <p className="text-xl text-muted-foreground">
              Cada ano, novos benefícios e vitórias para nossos associados
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 mr-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl font-bold text-accent mr-4">{item.year}</span>
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 hero-gradient text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-shadow">
              Impacto em Números
            </h2>
            <p className="text-xl opacity-90">
              Os resultados do nosso trabalho em prol dos transportadores
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">10.000+</div>
              <div className="text-lg">Associados Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">5.000+</div>
              <div className="text-lg">Cursos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-lg">Telemedicina</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-lg">Sempre Gratuito</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Junte-se a milhares de profissionais que já descobriram como a união faz a força
          </p>
          <Link to="/associacao">
            <Button className="btn-accent px-8 py-4 text-lg font-bold rounded-xl hover:scale-105 transition-transform">
              Associe-se Agora
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;