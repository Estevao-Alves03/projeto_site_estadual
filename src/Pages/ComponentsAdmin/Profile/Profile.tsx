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
        {/* Primeiro card informaçoes do perfil */}
        <Card className="mt-7">
          <CardHeader>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center">
                <MdPerson className="h-9 w-9 text-blue-800" />
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
          <CardContent>
            <Avatar className="w-24 h-24">
              <AvatarImage src="" alt="" />
              <AvatarFallback className="text-2xl font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600">
                MA
              </AvatarFallback>
            </Avatar>

            <form action="" className="mt-7 grid grid-cols-2 gap-4">
              <div>
                <Label>Nome completo</Label>
                <Input
                  placeholder="Seu nome completo"
                  className="px-2 py-1 placeholder:text-zinc-400 mt-1 border-2"
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  placeholder="seu.email@exemplo.com"
                  className="px-2 py-1 placeholder:text-zinc-400 mt-1 border-2"
                />
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="mt-7">
          <CardHeader>
            <div className="flex items-center gap-2">
              <GiDialPadlock className="h-8 w-8 text-yellow-500 border-black" />
              <CardTitle className="text-xl font-semibold">
                Alterar Senha
              </CardTitle>
            </div>
            <CardDescription className="text-base font-serif text-zinc-500">
              Mantenha sua conta segura com uma senha forte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="">
              <Label>Senha Atual</Label>
              <Input
                placeholder="Digite sua senha atual"
                className="px-2 py-1 placeholder:text-zinc-400 mt-1 border-2"
              />
              <div className="mt-7 grid grid-cols-2 gap-4">
                <div>
                  <Label>Nova Senha</Label>
                  <Input
                    placeholder="Digite sua senha atual"
                    className="px-2 py-1 placeholder:text-zinc-400 mt-1 border-2"
                  />
                </div>
                <div>
                  <Label>Confirmar Nova Senha</Label>
                  <Input
                    placeholder="Digite sua senha atual"
                    className="px-2 py-1 placeholder:text-zinc-400 mt-1 border-2"
                  />
                </div>
              </div>
            </form>
            <div className="bg-yellow-200 border border-yellow-400 p-4 mt-7 rounded-md ">
              <h1 className="text-yellow-800 font-bold text-base mb-4">
                Dicas para uma senha segura
              </h1>
              <div className="text-yellow-800 italic font-semibold text-sm">
                <p>• Use pelo menos 8 caracteres</p>
                <p>• Inclua letras maiúsculas e minúsculas</p>
                <p>• Adicione números e símbolos</p>
                <p>• Evite informações pessoais óbvias</p>
              </div>
            </div>
          </CardContent>
        </Card>

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
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
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <Button className="bg-white text-red-600 font-semibold text-sm border hover:text-gray-900 hover:bg-red-100">
              <MdOutlineOutput className="mr-1" />
              Sair da Conta
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-white text-black border hover:bg-gray-100">
              <IoClose className="mr-1" />
              Cancelar
            </Button>

            <Button className="bg-green-700 text-white border hover:bg-green-800">
              <IoSaveOutline className="mr-1" />
              Salvar alterações
            </Button>
          </div>
        </div>
      </Tabs.Content>
    </div>
  );
}

export default Profile;
