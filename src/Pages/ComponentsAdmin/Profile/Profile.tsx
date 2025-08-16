import * as Tabs from "@radix-ui/react-tabs";
import { MdPerson } from "react-icons/md";
import { MdOutlineOutput } from "react-icons/md";
import { GiDialPadlock } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoSaveOutline } from "react-icons/io5";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function Profile() {
  const stats = [
    {
      value: 12,
      label: "Artigos publicados",
      color: "bg-cyan-100",
      textColor: "text-cyan-800",
      borderColor: "border-cyan-300",
    },
    {
      value: "1.3k",
      label: "Total de views",
      color: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-300",
    },
    {
      value: 6,
      label: "Média por artigo",
      color: "bg-purple-100",
      textColor: "text-purple-800",
      borderColor: "border-purple-300",
    },
    {
      value: "Ago. de 2025",
      label: "Membro desde",
      color: "bg-orange-100",
      textColor: "text-orange-400",
      borderColor: "border-orange-300",
    },
  ];

  return (
    <div className="mt-14">
      <Tabs.Content value="Perfil">
        {/* topo da aba - parte do titulo */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Configurações do Perfil</h1>
            <p className="text-lg text-zinc-600 font-serif">
              Gerencie suas informações pessoais e credenciais
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Primeiro card informaçoes do perfil */}
          <Card className="mt-7">
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <MdPerson className="h-8 w-8 text-blue-800" />
                  <CardTitle className="text-xl font-semibold">
                    Informações Pessoais
                  </CardTitle>
                </div>
                <span className="border bg-white font-semibold py-1 px-2 rounded-full">
                  Editor
                </span>
              </div>
              <CardDescription className="text-base font-serif text-zinc-500">
                Atualize seus dados pessoais
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src="" alt="" />
                  <AvatarFallback className="text-2xl font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600">
                    MA
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline" className="w-fit">
                  Alterar Foto
                </Button>
              </div>

              <form className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label>Nome completo</Label>
                  <Input
                    placeholder="Seu nome completo"
                    className="px-3 py-2 placeholder:text-zinc-400 border-2"
                  />
                </div>

                <div className="space-y-1">
                  <Label>Email</Label>
                  <Input
                    placeholder="seu.email@exemplo.com"
                    className="px-3 py-2 placeholder:text-zinc-400 border-2"
                  />
                </div>

                <div className="space-y-1">
                  <Label>Telefone</Label>
                  <Input
                    placeholder="(00) 00000-0000"
                    className="px-3 py-2 placeholder:text-zinc-400 border-2"
                  />
                </div>

                <div className="space-y-1">
                  <Label>Data de Nascimento</Label>
                  <Input
                    type="date"
                    className="px-3 py-2 placeholder:text-zinc-400 border-2"
                  />
                </div>
              </form>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline">Cancelar</Button>
                <Button className="bg-green-700 hover:bg-green-800">
                  <IoSaveOutline className="mr-2 text-lg" />
                   Salvar Alterações 
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-7">
            <CardHeader>
              <div className="flex items-center gap-2">
                <GiDialPadlock className="h-8 w-8 text-yellow-500" />
                <CardTitle className="text-xl font-semibold">
                  Alterar Senha
                </CardTitle>
              </div>
              <CardDescription className="text-base font-serif text-zinc-500">
                Mantenha sua conta segura com uma senha forte
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form>
                <div className="space-y-1">
                  <Label>Senha Atual</Label>
                  <Input
                    type="password"
                    placeholder="Digite sua senha atual"
                    className="px-3 py-2 placeholder:text-zinc-400 border-2"
                  />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label>Nova Senha</Label>
                    <Input
                      type="password"
                      placeholder="Digite a nova senha"
                      className="px-3 py-2 placeholder:text-zinc-400 border-2"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label>Confirmar Nova Senha</Label>
                    <Input
                      type="password"
                      placeholder="Confirme a nova senha"
                      className="px-3 py-2 placeholder:text-zinc-400 border-2"
                    />
                  </div>
                </div>

                <div className="bg-yellow-200 border border-yellow-400 p-4 mt-6 rounded-md">
                  <h1 className="text-yellow-800 font-bold text-base mb-3">
                    Dicas para uma senha segura
                  </h1>
                  <div className="text-yellow-800 italic font-semibold text-sm space-y-1">
                    <p>• Use pelo menos 8 caracteres</p>
                    <p>• Inclua letras maiúsculas e minúsculas</p>
                    <p>• Adicione números e símbolos</p>
                    <p>• Evite informações pessoais óbvias</p>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline">Cancelar</Button>
                  <Button className="bg-green-700 hover:bg-green-800">
                    <IoSaveOutline className="mr-2 text-lg" />
                     Salvar Alterações 
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-7">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              📊 Suas Estatísticas
            </CardTitle>
            <CardDescription className="text-base font-serif text-zinc-500">
              Resumo da sua atividade no sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className={`text-center p-4 ${stat.color} ${stat.textColor} border ${stat.borderColor}`}
                >
                  <h2 className="text-3xl font-bold mb-2">{stat.value}</h2>
                  <p>{stat.label}</p>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* <div className="flex items-center justify-between mt-6">
          <button className="flex px-4 py-3 mt-0.5 font-bold text-base rounded-lg bg-green-700 text-white border hover:bg-green-800">
            <IoSaveOutline className="mr-2 mt-0.5 text-xl" />
            Salvar alterações
          </button>
        </div> */}
      </Tabs.Content>
    </div>
  );
}

export default Profile;
