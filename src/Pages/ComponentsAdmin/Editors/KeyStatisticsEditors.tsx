import * as Tabs from "@radix-ui/react-tabs";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function KeyStatisticsEditors() {
  const stats = [
    {
      value: 2,
      label: "Editores Ativos",
      color: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-300",
    },
    {
      value: 1,
      label: "Editores Inativos",
      color: "bg-red-100",
      textColor: "text-red-800",
      borderColor: "border-red-300",
    },
    {
      value: 3,
      label: "Total de Editores",
      color: "bg-blue-100",
      textColor: "text-blue-800",
      borderColor: "border-blue-300",
    },
    {
      value: "67%",
      label: "Taxa de Atividade",
      color: "bg-purple-100",
      textColor: "text-purple-800",
      borderColor: "border-purple-300",
    },
  ];

    const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  
  // Exemplo de dados - substitua pelos seus editores reais
  const allEditors = [
    { id: 1, name: "Maria Santos", status: "active" },
    { id: 2, name: "João Silva", status: "active" },
    { id: 3, name: "Ana Costa", status: "inactive" }
  ];

  // Filtra os editores
  const filteredEditors = allEditors.filter(editor => {
    const matchesSearch = editor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = 
      filter === "all" || 
      (filter === "active" && editor.status === "active") || 
      (filter === "inactive" && editor.status === "inactive");
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="mt-14">
      <Tabs.Content value="Editores">
        {/* titulo da pagina */}
        <div className="">
          <h1 className="text-2xl font-bold">Gerenciar Editores</h1>
          <p className="text-lg text-zinc-600 font-serif">
            Adicione, edite ou remova editores do sistema
          </p>
        </div>

        {/* Estatisticas de Editores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`text-center p-6 ${stat.color} ${stat.textColor} border ${stat.borderColor}`}
            >
              <h2 className="text-3xl font-bold mb-2">{stat.value}</h2>
              <p>{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* barra de pesquisa com filtro */}
        <div className="flex items-center justify-between gap-4 mt-5">
          {/* Lado esquerdo - Barra de pesquisa e filtro */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar Editores..."
                className="pl-9 p-2 border border-zinc-300 rounded-md placeholder:text-zinc-500 w-full min-w-[200px]"
              />
            </div>

            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] py-5 border border-zinc-300 ">
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="assets">Ativos</SelectItem>
                  <SelectItem value="inactive">Inativos</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Lado direito - Contagem de editores */}
          <div className="text-sm text-gray-500">
            {filteredEditors.length} editores encontrados
          </div>
        </div>
      </Tabs.Content>
    </div>
  );
}

export default KeyStatisticsEditors;
