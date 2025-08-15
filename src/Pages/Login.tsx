import { useState } from "react";
import { LuShield, LuLogIn, LuArrowLeft } from "react-icons/lu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "../Components/ui/separator";
import { FaUserShield } from "react-icons/fa";

function Login() {
  const [password, setPassword] = useState("");
  return (
    <div className="bg-slate-200 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header com logo centralizada */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center">
            <img
              src="../../public/logo.jpeg"
              alt="Logo do site"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-blue-950">A VOZ DO ESTADO</h1>
          <h2 className="text-lg font-serif font-semibold text-gray-500">
            Painel Administrativo
          </h2>
        </div>

        <Separator />

        {/* Card de Login */}
        <Card>
          <CardHeader className="text-center flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
              <LuShield className="w-5 h-5 text-blue-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-blue-950">
              Entrar no Sistema
            </CardTitle>
            <CardDescription className="text-sm font-serif text-zinc-500">
              Área restrita a administradores e editores
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-semibold">
                Email:
              </Label>
              <div className="relative">
                <FaUserShield className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" />
                <Input
                  id="email"
                  placeholder="seu@gmail.com"
                  type="email"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Senha SEM ícone de olho */}
            <div className="space-y-2">
              <Label className="font-semibold text-base">Senha:</Label>
              <Input
                placeholder="Sua senha de acesso"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="hide-password-toggle" // Classe para remover ícones padrão
              />
            </div>

            {/* Botões */}
            <div className="grid gap-4">
              {/* Entrar */}
              <Button className="w-full h-11 text-base mt-4 bg-blue-500 hover:bg-blue-600">
                <LuLogIn className="mr-2 h-5 w-5" />
                Entrar no sistema
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Informações de segurança */}
        <div className="text-center text-sm text-gray-600 space-y-2">
          <div className="flex items-center justify-center">
            <p className="mr-2">🔒</p>
            <span>Conexão segura e criptografada</span>
          </div>
          <div className="flex items-center justify-center">
            <p className="mr-2">⚠️</p>
            <span>Não compartilhe suas credenciais de acesso</span>
          </div>
          <div className="flex items-center justify-center">
            <p className="mr-2">📞</p>
            <span>Suporte técnico: (11) 3333-4444</span>
          </div>
          <div className="flex items-center justify-center">
            <p className="mr-2">📩</p>
            <span>Problemas de acesso: suporte@avozdoestado.gov.br</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
