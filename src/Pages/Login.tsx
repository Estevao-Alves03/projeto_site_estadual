import { useState } from "react";
import { LuShield, LuLogIn, LuEye, LuEyeOff } from "react-icons/lu";
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
import { Separator } from "../components/ui/separator";
import { FaUserShield } from "react-icons/fa";

function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-slate-200 min-h-screen flex items-center justify-center p-2">
      <div className="w-full max-w-md space-y-2">
        {/* Header com logo centralizada */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center">
            <img
              src="../../public/logo.jpeg"
              alt="Logo do site"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-blue-950">A VOZ DO ESTADO</h1>
          <h2 className="text-sm font-serif font-semibold text-gray-500">
            Painel Administrativo
          </h2>
        </div>

        <Separator className="my-2" />

        {/* Card de Login */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="text-center flex flex-col items-center space-y-1 pb-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
              <LuShield className="w-4 h-4 text-blue-600" />
            </div>
            <CardTitle className="text-xl font-bold text-blue-950">
              Entrar no Sistema
            </CardTitle>
            <CardDescription className="text-xs font-serif text-zinc-500">
              Área restrita a administradores e editores
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3 px-4 py-2">
            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="email" className="text-sm font-semibold">
                Email:
              </Label>
              <div className="relative">
                <FaUserShield className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 text-sm" />
                <Input
                  id="email"
                  placeholder="seu@gmail.com"
                  type="email"
                  className="pl-8 h-9 text-sm"
                />
              </div>
            </div>

            {/* Senha COM ícone de olho */}
            <div className="space-y-1">
              <Label className="font-semibold text-sm">Senha:</Label>
              <div className="relative">
                <Input
                  placeholder="Sua senha de acesso"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-8 h-9 text-sm" // Adicionado padding à direita para o ícone
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <LuEyeOff className="w-4 h-4" />
                  ) : (
                    <LuEye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Botões */}
            <div className="grid gap-2 mt-2">
              {/* Entrar */}
              <Button className="mt-4 w-full h-9 text-sm bg-blue-500 hover:bg-blue-600">
                <LuLogIn className="mr-1 h-4 w-4" />
                Entrar no sistema
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Informações de segurança */}
        <div className="text-center text-xs text-gray-600 space-y-1">
          <div className="flex items-center justify-center">
            <p className="mr-1">🔒</p>
            <span className="text-sm font-serif text-gray-500">Conexão segura e criptografada</span>
          </div>
          <div className="flex items-center justify-center">
            <p className="mr-1">⚠️</p>
            <span className="text-sm font-serif text-gray-500">Não compartilhe suas credenciais de acesso</span>
          </div>
          <div className="flex items-center justify-center">
            <p className="mr-1">📞</p>
            <span className="text-sm font-serif text-gray-500">Suporte técnico: (11) 3333-4444</span>
          </div>
          <div className="flex items-center justify-center">
            <p className="mr-1">📩</p>
            <span className="text-sm font-serif text-gray-500">Problemas de acesso: suporte@avozdoestado.gov.br</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;