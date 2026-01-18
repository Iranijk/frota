import { useState, useEffect, FormEvent } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Plus, Users, Settings, Upload, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { adicionarParceiro, getParceiros } from '@/data/parceiros';
import { Parceiro } from '@/types/parceiro';

const Admin = () => {
  const { toast } = useToast();
  const [parceirosList, setParceirosList] = useState<Parceiro[]>([]);
  const [isLoadingList, setIsLoadingList] = useState(true);
  const [formData, setFormData] = useState({
    nome: '',
    imagem: '',
    endereco: '',
    site: ''
  });
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const fetchParceiros = async () => {
    setIsLoadingList(true);
    const data = await getParceiros();
    setParceirosList(data);
    setIsLoadingList(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchParceiros();
    }
  }, [isAuthenticated]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFormData(prev => ({ ...prev, imagem: '' })); // Limpa a URL se um arquivo for selecionado
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `parceiros/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Erro no upload:', uploadError);
      throw uploadError;
    }

    const { data: { publicUrl } } = await supabase.storage // Added await here
      .from('images')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formData.nome) {
      toast({
        title: "Erro",
        description: "O campo 'Nome do Parceiro' é obrigatório.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (!selectedFile && !formData.imagem.trim()) { // Use .trim() to check for empty string
      toast({
        title: "Erro",
        description: "Por favor, selecione uma imagem ou forneça uma URL.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      let imageUrl = formData.imagem;
      if (selectedFile) {
        imageUrl = await uploadImage(selectedFile); // This is already awaited
      }

      await adicionarParceiro({
        nome: formData.nome,
        imagem: imageUrl,
        endereco: formData.endereco || null,
        site: formData.site || null
      });

      toast({
        title: "Sucesso!",
        description: "Parceiro adicionado com sucesso."
      });

      // Limpar formulário
      setFormData({ nome: '', imagem: '', endereco: '', site: '' });
      setSelectedFile(null);
      setImagePreview(null);
      await fetchParceiros();
    } catch (error) {
      console.error("Erro ao adicionar parceiro:", error);
      toast({
        title: "Erro",
        description: "Erro ao adicionar parceiro. Verifique o console para mais detalhes.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === '7513') {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      toast({
        title: "Senha Incorreta",
        description: "A senha fornecida está incorreta. Tente novamente.",
        variant: "destructive",
      });
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    toast({ title: "Você foi desconectado." });
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen bg-muted/20">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold text-primary">Área Administrativa</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="password">Senha de Acesso</Label>
                  <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Digite a senha" />
                </div>
                <Button type="submit" className="w-full">Entrar</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <section className="pt-32 pb-20">
          <div className="container-custom">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-3 mb-6">
                <Settings className="h-12 w-12 text-primary" />
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Área <span className="text-primary">Administrativa</span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Gerencie os parceiros da Frota Brasil
              </p>
              <div className="mt-6 flex justify-center items-center space-x-4">
                <Button variant="outline" size="sm" onClick={handleLogout} className="btn-primary">
                  Sair
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Formulário para adicionar parceiro */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Plus className="h-5 w-5" />
                    <span>Adicionar Novo Parceiro</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="nome">Nome do Parceiro *</Label>
                      <Input
                        id="nome"
                        type="text"
                        value={formData.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        placeholder="Digite o nome do parceiro"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="imagem">Imagem do Parceiro (opcional)</Label>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="file-upload" className="cursor-pointer">
                            <div className="flex items-center space-x-2 p-4 border-2 border-dashed border-muted-foreground/25 rounded-lg hover:border-primary/50 transition-colors">
                              <Upload className="h-5 w-5 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {selectedFile ? selectedFile.name : 'Clique para selecionar uma imagem'}
                              </span>
                            </div>
                          </Label>
                          <Input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </div>

                        {imagePreview && (
                          <div className="flex justify-center">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="w-32 h-32 object-cover rounded-lg border"
                            />
                          </div>
                        )}

                        <div className="text-sm text-muted-foreground">
                          Ou forneça uma URL diretamente:
                        </div>
                        <Input
                          id="imagem"
                          type="url"
                          value={formData.imagem || ''} // Ensure value is not null for input
                          onChange={(e) => handleInputChange('imagem', e.target.value)}
                          placeholder="https://exemplo.com/imagem.jpg"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="endereco">Endereço</Label>
                      <Textarea
                        id="endereco"
                        value={formData.endereco}
                        onChange={(e) => handleInputChange('endereco', e.target.value)}
                        placeholder="Rua, número, bairro, cidade - UF"
                      />
                    </div>

                    <div>
                      <Label htmlFor="site">Site (opcional)</Label>
                      <Input
                        id="site"
                        type="url"
                        value={formData.site}
                        onChange={(e) => handleInputChange('site', e.target.value)}
                        placeholder="https://exemplo.com.br"
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                      {!isSubmitting && <Plus className="h-4 w-4 mr-2" />}
                      Adicionar Parceiro
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Lista de parceiros existentes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Parceiros Cadastrados ({parceirosList.length})</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-[30rem] overflow-y-auto">
                    {isLoadingList ? (
                      <div className="flex justify-center items-center h-32">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      </div>
                    ) : parceirosList.length > 0 ? (
                      parceirosList.map((parceiro) => (
                        <div key={parceiro.id} className="p-4 bg-muted/20 rounded-lg">
                          <div className="flex items-start space-x-3">
                            <img 
                              src={parceiro.imagem} 
                              alt={parceiro.nome}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground">{parceiro.nome}</h4>
                              <p className="text-sm text-muted-foreground">{parceiro.endereco}</p>
                              {parceiro.site && (
                                <a 
                                  href={parceiro.site} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-sm text-primary hover:underline"
                                >
                                  {parceiro.site}
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-muted-foreground py-8">
                        Nenhum parceiro cadastrado ainda
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Admin;