import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Send,
  Headphones,
  Users,
  Globe,
  Shield
} from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 9999-9999',
      description: 'Seg à Sex: 8h às 18h',
      action: 'Ligar Agora',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '(11) 9999-9999',
      description: 'Resposta em até 5 minutos',
      action: 'Chamar no WhatsApp',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@frotabrasil.org.br',
      description: 'Resposta em até 24h',
      action: 'Enviar Email',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  const offices = [
    {
      region: 'Região Sudeste',
      address: 'São Paulo - SP',
      phone: '(11) 9999-9999',
      email: 'sudeste@frotabrasil.org.br',
      coverage: ['SP', 'RJ', 'MG', 'ES']
    },
    {
      region: 'Região Sul',
      address: 'Curitiba - PR',
      phone: '(41) 9999-9999',
      email: 'sul@frotabrasil.org.br',
      coverage: ['PR', 'SC', 'RS']
    },
    {
      region: 'Região Nordeste',
      address: 'Salvador - BA',
      phone: '(71) 9999-9999',
      email: 'nordeste@frotabrasil.org.br',
      coverage: ['BA', 'PE', 'CE', 'AL', 'SE', 'PB', 'RN', 'PI', 'MA']
    },
    {
      region: 'Região Norte',
      address: 'Manaus - AM',
      phone: '(92) 9999-9999',
      email: 'norte@frotabrasil.org.br',
      coverage: ['AM', 'PA', 'AC', 'RO', 'RR', 'AP', 'TO']
    },
    {
      region: 'Região Centro-Oeste',
      address: 'Brasília - DF',
      phone: '(61) 9999-9999',
      email: 'centrooeste@frotabrasil.org.br',
      coverage: ['DF', 'GO', 'MT', 'MS']
    }
  ];

  const socialMedia = [
    {
      name: 'Facebook',
      icon: Facebook,
      handle: '@FrotaBrasilOficial',
      followers: '50K',
      color: 'text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      handle: '@frotabrasil',
      followers: '35K',
      color: 'text-pink-600'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      handle: 'Frota Brasil',
      followers: '25K',
      color: 'text-red-600'
    }
  ];

  const supportTopics = [
    'Dúvidas sobre associação',
    'Problemas com telemedicina',
    'Questões bancárias (BDM Bank)',
    'Suporte para cursos EAD',
    'Orientação jurídica',
    'Seguros e benefícios',
    'Reclamações e sugestões',
    'Parcerias comerciais',
    'Imprensa e mídia',
    'Outro assunto'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6 text-shadow">
            Fale Conosco
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Estamos aqui para ajudar você. Entre em contato por qualquer canal de sua preferência.
          </p>
        </div>
      </section>

      {/* Métodos de Contato */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Como Podemos Ajudar?
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha o canal que preferir para entrar em contato
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{method.title}</h3>
                  <p className="text-lg font-semibold mb-2">{method.info}</p>
                  <p className="text-muted-foreground mb-6">{method.description}</p>
                  <Button className="btn-primary">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Envie sua Mensagem
              </h2>
              <p className="text-xl text-muted-foreground">
                Preencha o formulário abaixo e responderemos rapidamente
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nome" className="text-primary font-semibold">
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-primary font-semibold">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="telefone" className="text-primary font-semibold">
                        Telefone
                      </Label>
                      <Input
                        id="telefone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="assunto" className="text-primary font-semibold">
                        Assunto *
                      </Label>
                      <Select value={formData.assunto} onValueChange={(value) => handleInputChange('assunto', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecione o assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          {supportTopics.map((topic, index) => (
                            <SelectItem key={index} value={topic}>
                              {topic}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mensagem" className="text-primary font-semibold">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Digite sua mensagem aqui..."
                      value={formData.mensagem}
                      onChange={(e) => handleInputChange('mensagem', e.target.value)}
                      required
                      className="mt-2"
                      rows={6}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm">Seus dados estão protegidos</span>
                    </div>
                    <Button type="submit" className="btn-accent px-8 py-3 font-bold">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mapa de Cobertura */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Atendimento Nacional
            </h2>
            <p className="text-xl text-muted-foreground">
              Escritórios regionais para melhor atendê-lo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="h-6 w-6 text-accent" />
                    <h3 className="text-lg font-bold text-primary">{office.region}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{office.email}</span>
                    </div>
                    
                    <div className="pt-3 border-t">
                      <p className="text-xs text-muted-foreground mb-2">Estados atendidos:</p>
                      <div className="flex flex-wrap gap-1">
                        {office.coverage.map((state, idx) => (
                          <span key={idx} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                            {state}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Siga-nos nas Redes Sociais
            </h2>
            <p className="text-xl text-muted-foreground">
              Fique por dentro das novidades e interaja conosco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialMedia.map((social, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <social.icon className={`h-16 w-16 ${social.color} mx-auto mb-6`} />
                  <h3 className="text-xl font-bold text-primary mb-2">{social.name}</h3>
                  <p className="text-lg font-semibold mb-2">{social.handle}</p>
                  <p className="text-muted-foreground mb-6">{social.followers} seguidores</p>
                  <Button variant="outline" className="w-full">
                    Seguir
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Ao Vivo */}
      <section className="py-20" id="suporte">
        <div className="container-custom">
          <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <Headphones className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Suporte ao Vivo
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Nossa equipe de suporte está online agora para ajudar você
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-white/90 px-6 py-3">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Iniciar Chat
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-3">
                  <Clock className="mr-2 h-4 w-4" />
                  Online: 8h às 22h
                </Button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{'<'}5min</div>
                    <div className="text-sm opacity-80">Tempo de Resposta</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-80">WhatsApp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm opacity-80">Satisfação</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;