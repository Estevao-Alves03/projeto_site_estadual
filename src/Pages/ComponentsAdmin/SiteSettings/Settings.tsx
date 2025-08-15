import * as Tabs from "@radix-ui/react-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IoSaveOutline } from "react-icons/io5";

function Settings() {
  return (
    <div className="mt-14">
      <Tabs.Content value="Configurações Do Site">
        {/* titulo da pagina */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Configurações do Sistema</h1>
            <p className="text-lg text-zinc-600 font-serif">
              Gerencie as configurações gerais do portal
            </p>
          </div>
        </div>
        {/* configuraçoes gerais do site */}
        <Card className="mt-7">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              🌐 Configurações Gerais
            </CardTitle>
            <CardDescription className="text-base font-serif text-zinc-500">
              Configurações básicas do portal de notícias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Nome do portal</Label>
                  <Input
                    placeholder="Digite qual será o nome do site"
                    className="px-2 py-1 placeholder:text-zinc-400 mt-1 border-2"
                  />
                </div>
                <div>
                  <Label>Slogan</Label>
                  <Input
                    placeholder="Crie um slogan"
                    className="px-2 py-1 placeholder:text-zinc-400 mt-1 border-2"
                  />
                </div>
              </div>
              <div className="mt-5">
                <Label>Descrição</Label>
                <Textarea
                  placeholder="Crie uma descriçao para o site"
                  className="px-2 py-1 placeholder:text-zinc-400 mt-1 border-2"
                ></Textarea>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* configuraçoes de contato do site */}
        <Card className="mt-7">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              📧 Configurações de Contato
            </CardTitle>
            <CardDescription className="text-base font-serif text-zinc-500">
              Configure as informaçoes que ficaram visiveis para o seu público
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Email de contato</Label>
                  <Input
                    placeholder="Digite o email de contato para clientes"
                    className="px-2 py-1 placeholder:text-zinc-400 mt-1 border-2"
                  />
                </div>
                <div>
                  <Label>Telefone de contato</Label>
                  <Input
                    placeholder="(99) 99999-9999"
                    className="px-2 py-1 placeholder:text-zinc-400 mt-1 border-2"
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="flex items-center justify-end mt-7">
          <button className="flex px-4 py-3 mt-0.5 font-bold text-base rounded-lg bg-green-700 text-white border hover:bg-green-800">
            <IoSaveOutline className="mr-2 mt-0.5 text-xl" />
            Salvar alterações
          </button>
        </div>
      </Tabs.Content>
    </div>
  );
}

export default Settings;
