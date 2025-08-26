import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "../../components/ui/switch";
import { IoIosAdd } from "react-icons/io";
import { IoSaveOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function NewsPublic() {
  const [showExtra, setShowExtra] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false); // <-- controle destaque

  const publicationInfo = {
    date: "Agora",
    status: "Será publicada",
  };

  const toggleExtraNews = () => {
    setShowExtra(!showExtra);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      // aqui você pode coletar os outros dados também
      destaque: isFeatured, // envia true/false
    };

    console.log("Dados enviados:", formData);
    // aqui você chama a API Laravel ou JSON Server
  };

  return (
    <div className="mx-64 py-10">
      <Card className="max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center gap-2">
            <IoIosAdd className="w-6 h-6 text-gray-900" />
            <CardTitle className="text-2xl font-extrabold text-gray-900">
              Criar Nova Notícia
            </CardTitle>
          </div>
          <CardDescription className="text-gray-600 font-serif text-base">
            Preencha todos os campos para criar uma nova notícia
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              {/* Coluna 1 - Campos principais */}
              <div className="space-y-4">
                <div>
                  <div className="flex-1 mb-4">
                    <Label>Título*</Label>
                    <Input placeholder="Digite o título da notícia" />
                  </div>
                  <div className="flex-1 mb-4">
                    <Label>Resumo*</Label>
                    <Textarea placeholder="Escreva um resumo da notícia" />
                  </div>
                  <div className="flex-1 mb-4">
                    <Label>Conteúdo Completo*</Label>
                    <Textarea
                      placeholder="Escreva o conteúdo completo da notícia"
                      className="h-28"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="mb-4">
                    <Label>Categoria*</Label>
                    <Select defaultValue="culture">
                      <SelectTrigger className="w-full py-2 border border-zinc-300">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="culture">Cultura</SelectItem>
                          <SelectItem value="education">Educação</SelectItem>
                          <SelectItem value="sports">Esportes</SelectItem>
                          <SelectItem value="infrastructure">
                            Infraestrutura
                          </SelectItem>
                          <SelectItem value="politics">Política</SelectItem>
                          <SelectItem value="health">Saúde</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Localização*</Label>
                    <Input placeholder="Ex: Centro, Bairro X" />
                  </div>
                  <div>
                    <Label>Nome do Autor</Label>
                    <Input placeholder="Ex: Joao Silva" />
                  </div>
                  <div>
                    <Label>Link Externo (opcional)</Label>
                    <Input placeholder="https://exemplo.com" />
                  </div>
                </div>

                {/* Campo Destaque */}
                <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50">
                  <div>
                    <Label className="text-gray-700 font-medium">
                      Colocar em Destaque?
                    </Label>
                    <p className="text-sm text-gray-500">
                      Se ativado, a notícia aparecerá na frente da página
                      principal.
                    </p>
                  </div>
                  <Switch checked={isFeatured} onCheckedChange={setIsFeatured} />
                </div>

                {/* Botão Notícia Extra */}
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 border-blue-200"
                  onClick={toggleExtraNews}
                >
                  {showExtra ? (
                    <>
                      <FiChevronUp className="h-4 w-4" />
                      <span>Ocultar Notícia Extra</span>
                    </>
                  ) : (
                    <>
                      <FiChevronDown className="h-4 w-4" />
                      <span>Adicionar Notícia Extra (opcional)</span>
                    </>
                  )}
                </Button>

                {/* Campos Extra (condicionais) */}
                {showExtra && (
                  <div className="space-y-4 p-4 border border-blue-100 rounded-lg bg-blue-50 transition-all duration-300">
                    <h3 className="text-blue-800 font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      Notícia Extra
                    </h3>

                    <div>
                      <Label>Título</Label>
                      <Input placeholder="Título da notícia extra" />
                    </div>

                    <div>
                      <Label>Resumo</Label>
                      <Textarea
                        placeholder="Resumo da notícia extra"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label>Conteúdo</Label>
                      <Textarea
                        placeholder="Conteúdo completo da notícia extra"
                        rows={5}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label>Categoria</Label>
                        <Select>
                          <SelectTrigger className="w-full py-2 border border-zinc-300">
                            <SelectValue placeholder="Selecione uma categoria" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="culture">Cultura</SelectItem>
                              <SelectItem value="education">
                                Educação
                              </SelectItem>
                              <SelectItem value="sports">Esportes</SelectItem>
                              <SelectItem value="infrastructure">
                                Infraestrutura
                              </SelectItem>
                              <SelectItem value="politics">Política</SelectItem>
                              <SelectItem value="health">Saúde</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Localização</Label>
                        <Input placeholder="Ex: Centro, Bairro X" />
                      </div>

                      <div>
                        <Label>Autor</Label>
                        <Input placeholder="Ex: Joao Silva" />
                      </div>

                      <div>
                        <Label>Link Externo (opcional)</Label>
                        <Input placeholder="https://exemplo.com" />
                      </div>
                    </div>

                    <div>
                      <Label>Imagem Extra (opcional)</Label>
                      <div className="relative w-full h-32 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center mt-2">
                        <p className="text-gray-500 text-sm">
                          Área para imagem extra
                        </p>
                        <div className="absolute bottom-2 right-2">
                          <button
                            type="button"
                            className="flex border px-2 py-1 rounded-lg bg-white bg-opacity-90 hover:bg-opacity-100 shadow-sm items-center text-xs"
                          >
                            <MdOutlineFileUpload className="w-4 h-4 mr-1" />
                            <span>Adicionar imagem</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Coluna 2 */}
              <div className="space-y-4">
                <div>
                  <Label>Imagem da Notícia*</Label>
                  <div className="relative w-full h-48 bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src="../../../public/imagem.png"
                      alt="imagem de fundo"
                      className="max-w-full max-h-full object-contain"
                    />
                    <div className="absolute bottom-3 right-3">
                      <button
                        type="button"
                        className="flex border px-3 py-1 rounded-lg bg-white bg-opacity-90 hover:bg-opacity-100 shadow-sm items-center"
                      >
                        <MdOutlineFileUpload className="w-5 h-5 mr-2" />
                        <span className="text-base font-serif">
                          Escolher imagem
                        </span>
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 font-serif mt-2">
                    Clique para escolher uma imagem aleatória ou arraste uma
                    imagem
                  </p>
                </div>

                {/* Informações da Publicação */}
                <div className="border p-4 rounded-lg bg-gray-50 border-gray-200">
                  <h1 className="font-semibold text-gray-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Informações da Publicação
                  </h1>
                  <div className="mt-3 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Autor:</span>
                      <span className="text-sm font-medium text-gray-800">
                        [Preencherá automaticamente]
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Data:</span>
                      <span className="text-sm font-medium text-gray-800">
                        {publicationInfo.date}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Status:</span>
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                        {publicationInfo.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dicas */}
                <div className="border p-4 rounded-lg bg-blue-50 border-blue-100">
                  <h1 className="font-medium text-blue-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Dicas para uma boa notícia
                  </h1>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Use um título claro e objetivo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>O resumo deve despertar interesse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Inclua informações completas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Escolha a categoria correta</span>
                    </li>
                  </ul>
                </div>

                {/* Botões de Ação */}
                <div className="flex items-center justify-end gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="text-gray-700 hover:bg-gray-100 border-gray-300"
                  >
                    <IoMdClose className="mr-2 h-4 w-4" />
                    Cancelar
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    <IoSaveOutline className="mr-2 h-4 w-4" />
                    Salvar Notícia
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default NewsPublic;
