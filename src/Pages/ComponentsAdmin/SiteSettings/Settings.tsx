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
import { Button } from "@/components/ui/button";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
          {/* Card de Configurações Gerais */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                🌐 Configurações Gerais
              </CardTitle>
              <CardDescription className="text-base font-serif text-zinc-500">
                Configurações básicas do portal de notícias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label>Nome do portal</Label>
                    <Input
                      placeholder="Digite qual será o nome do site"
                      className="px-3 py-2 placeholder:text-zinc-400 border-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Slogan</Label>
                    <Input
                      placeholder="Crie um slogan"
                      className="px-3 py-2 placeholder:text-zinc-400 border-2"
                    />
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <Label>Descrição</Label>
                  <Textarea
                    placeholder="Crie uma descrição para o site"
                    className="px-3 py-2 placeholder:text-zinc-400 border-2 min-h-[100px]"
                  />
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <Button variant="outline">Cancelar</Button>
                  <Button className="bg-green-700 hover:bg-green-800">
                    <IoSaveOutline className="mr-2 text-lg" />
                    Salvar Alterações
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Card de Configurações de Contato */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                📧 Configurações de Contato
              </CardTitle>
              <CardDescription className="text-base font-serif text-zinc-500">
                Configure as informações que ficarão visíveis para o seu público
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label>Email de contato</Label>
                    <Input
                      placeholder="Digite o email de contato para clientes"
                      className="px-3 py-2 placeholder:text-zinc-400 border-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Telefone de contato</Label>
                    <Input
                      placeholder="(99) 99999-9999"
                      className="px-3 py-2 placeholder:text-zinc-400 border-2"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
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
      </Tabs.Content>
    </div>
  );
}

export default Settings;
