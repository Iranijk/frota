import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  MessageCircle,
  Shield,
  Clock,
  Gift,
  HelpCircle
} from 'lucide-react';

const Associacao = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    cep: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    numeroImovel: '',
    estado: '',
  });

  const steps = [
    {
      number: 1,
      title: 'Preencha o Formulário',
      description: 'Informe seus dados pessoais e profissionais',
      icon: FileText
    },
    {
      number: 2,
      title: 'Acesso aos Benefícios',
      description: 'Comece a usar todos os serviços imediatamente',
      icon: CheckCircle
    }
  ];

  const faqs = [
    {
      question: 'A associação é realmente gratuita para sempre?',
      answer: 'Sim! A associação é 100% gratuita para sempre. Não há taxas, mensalidades ou custos ocultos. Nosso objetivo é apoiar os profissionais do transporte sem barreiras financeiras.'
    },
    {
      question: 'Quais documentos preciso para me associar?',
      answer: 'Você precisa apenas do CPF e CNH válidos. Para alguns benefícios específicos, como cursos EAD, podem ser solicitados documentos adicionais.'
    },
    {
      question: 'Os benefícios estão disponíveis em todo o Brasil?',
      answer: 'Sim! Todos os nossos benefícios têm cobertura nacional. A telemedicina, conta bancária e cursos EAD funcionam em qualquer lugar do país.'
    },
    {
      question: 'Como funciona a telemedicina 24h?',
      answer: 'Após a associação, você recebe acesso ao app de telemedicina. As consultas podem ser feitas por vídeo ou telefone, com médicos especializados em medicina do trabalho.'
    },
    {
      question: 'Os cursos EAD são reconhecidos pelo Detran?',
      answer: 'Todos os nossos cursos são certificados pelo Detran/Senatran e têm validade nacional. Os certificados são aceitos em todo território brasileiro.'
    },
    {
      question: 'Posso cancelar minha associação a qualquer momento?',
      answer: 'Sim, não há fidelidade. Você pode cancelar sua associação a qualquer momento através do nosso WhatsApp ou email de suporte.'
    }
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await supabase.from('associados').insert({
      nome: formData.nome,
      cpf: formData.cpf.replace(/\D/g, ''),
      email: formData.email,
      telefone: formData.telefone.replace(/\D/g, ''),
      cep: formData.cep.replace(/\D/g, ''),
      logradouro: formData.logradouro,
      bairro: formData.bairro,
      cidade: formData.cidade,
      estado: formData.estado,
      numero_imovel: formData.numeroImovel,
    });

    setIsLoading(false);

    if (error) {
      console.error('Erro ao inserir associado:', error);
      toast({
        title: "Erro ao associar-se",
        description: "Não foi possível concluir sua associação. Verifique se seu CPF ou e-mail já estão cadastrados e tente novamente.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Cadastro OK!",
        description: "Associação realizada com sucesso. Você será redirecionado para a página inicial em 3 segundos.",
      });
      setFormData({
        nome: '', cpf: '', email: '', telefone: '', cep: '',
        logradouro: '', bairro: '', cidade: '', numeroImovel: '', estado: '',
      });
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    let maskedValue = value;

    if (field === 'cpf') {
      maskedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else if (field === 'telefone') {
      maskedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
    } else if (field === 'cep') {
      maskedValue = value.replace(/\D/g, '');
    }

    setFormData(prev => ({
      ...prev,
      [field]: maskedValue
    }));
  };

  const handleCepBlur = async (cep: string) => {
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setFormData(prev => ({
            ...prev,
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          }));
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6 text-shadow">
            Associe-se Gratuitamente
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Faça parte da maior família de transportadores do Brasil
          </p>
          <div className="mt-8 bg-white/15 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
            <Gift className="h-12 w-12 text-accent mx-auto mb-4" />
            <p className="text-2xl font-bold mb-2">Associação Gratuita</p>
            <p className="text-lg">
              <span className="text-accent font-bold text-2xl">SEMPRE GRATUITO!</span>
            </p>
          </div>
        </div>
      </section>

      {/* Processo de Associação */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground">
              Associar-se é simples e rápido
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {step.number}
                  </div>
                  <step.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Associação */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Formulário de Associação
              </h2>
              <p className="text-xl text-muted-foreground">
                Preencha seus dados para começar a aproveitar os benefícios
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
                      <Label htmlFor="cpf" className="text-primary font-semibold">
                        CPF *
                      </Label>
                      <Input
                        id="cpf"
                        type="text"
                        placeholder="000.000.000-00"
                        value={formData.cpf}
                        onChange={(e) => handleInputChange('cpf', e.target.value)}
                        required
                        className="mt-2"
                        maxLength={14}
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
                        Telefone/WhatsApp *
                      </Label>
                      <Input
                        id="telefone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        required
                        className="mt-2"
                        maxLength={15}
                      />
                    </div>

                    <div>
                      <Label htmlFor="cep" className="text-primary font-semibold">
                        CEP *
                      </Label>
                      <Input
                        id="cep"
                        type="text"
                        placeholder="00000000"
                        value={formData.cep}
                        onChange={(e) => handleInputChange('cep', e.target.value)}
                        onBlur={(e) => handleCepBlur(e.target.value)}
                        required
                        className="mt-2"
                        maxLength={8}
                      />
                    </div>

                    <div>
                      <Label htmlFor="logradouro" className="text-primary font-semibold">
                        Endereço
                      </Label>
                      <Input
                        id="logradouro"
                        type="text"
                        placeholder="Endereço"
                        value={formData.logradouro}
                        disabled
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="bairro" className="text-primary font-semibold">
                        Bairro
                      </Label>
                      <Input
                        id="bairro"
                        type="text"
                        placeholder="Bairro"
                        value={formData.bairro}
                        disabled
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="cidade" className="text-primary font-semibold">
                        Cidade
                      </Label>
                      <Input
                        id="cidade"
                        type="text"
                        placeholder="Cidade"
                        value={formData.cidade}
                        disabled
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="numeroImovel" className="text-primary font-semibold">
                        Número do Imóvel *
                      </Label>
                      <Input
                        id="numeroImovel"
                        type="text"
                        placeholder="123"
                        value={formData.numeroImovel}
                        onChange={(e) => handleInputChange('numeroImovel', e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="estado" className="text-primary font-semibold">
                        Estado *
                      </Label>
                      <Select value={formData.estado} onValueChange={(value) => handleInputChange('estado', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecione seu estado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="AC">Acre</SelectItem>
                          <SelectItem value="AL">Alagoas</SelectItem>
                          <SelectItem value="AP">Amapá</SelectItem>
                          <SelectItem value="AM">Amazonas</SelectItem>
                          <SelectItem value="BA">Bahia</SelectItem>
                          <SelectItem value="CE">Ceará</SelectItem>
                          <SelectItem value="DF">Distrito Federal</SelectItem>
                          <SelectItem value="ES">Espírito Santo</SelectItem>
                          <SelectItem value="GO">Goiás</SelectItem>
                          <SelectItem value="MA">Maranhão</SelectItem>
                          <SelectItem value="MT">Mato Grosso</SelectItem>
                          <SelectItem value="MS">Mato Grosso do Sul</SelectItem>
                          <SelectItem value="MG">Minas Gerais</SelectItem>
                          <SelectItem value="PA">Pará</SelectItem>
                          <SelectItem value="PB">Paraíba</SelectItem>
                          <SelectItem value="PR">Paraná</SelectItem>
                          <SelectItem value="PE">Pernambuco</SelectItem>
                          <SelectItem value="PI">Piauí</SelectItem>
                          <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                          <SelectItem value="RN">Rio Grande do Norte</SelectItem>
                          <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                          <SelectItem value="RO">Rondônia</SelectItem>
                          <SelectItem value="RR">Roraima</SelectItem>
                          <SelectItem value="SC">Santa Catarina</SelectItem>
                          <SelectItem value="SP">São Paulo</SelectItem>
                          <SelectItem value="SE">Sergipe</SelectItem>
                          <SelectItem value="TO">Tocantins</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Shield className="h-8 w-8 text-secondary" />
                        <div>
                          <p className="font-semibold text-primary">Seus dados estão seguros</p>
                          <p className="text-sm text-muted-foreground">Política LGPD compliant</p>
                        </div>
                      </div>
                      <Button type="submit" className="btn-accent px-8 py-3 font-bold" disabled={isLoading}>
                        {isLoading ? 'Enviando...' : 'Associar-se Agora'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" id="faq">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre a associação
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                    <div className="flex items-center space-x-4">
                      <HelpCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="font-semibold text-primary">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed ml-9">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Suporte WhatsApp */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <Card className="max-w-4xl mx-auto bg-secondary text-secondary-foreground">
            <CardContent className="p-8 text-center">
              <MessageCircle className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Precisa de Ajuda?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Nossa equipe está disponível no WhatsApp para tirar suas dúvidas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-secondary hover:bg-white/90 px-6 py-3">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chamar no WhatsApp
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-3">
                  <Clock className="mr-2 h-4 w-4" />
                  Horário: 8h às 18h
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Associacao;
