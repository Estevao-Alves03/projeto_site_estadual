import * as Tabs from "@radix-ui/react-tabs";
import {Card,} from "../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function KeyStatisticsActivities() {
  const stats = [
    {
      value: 24,
      label: "Açoes hoje",
      color: "bg-white",
      textColor: "text-green-800",
      borderColor: "border-green-300",
    },
    {
      value: 156,
      label: "Esta semanda",
      color: "bg-white",
      textColor: "text-red-800",
      borderColor: "border-red-300",
    },
    {
      value: 3,
      label: "Usuarios ativos",
      color: "bg-white",
      textColor: "text-blue-800",
      borderColor: "border-blue-300",
    },
    {
      value: 12,
      label: "Ultimas 24hrs",
      color: "bg-white",
      textColor: "text-purple-800",
      borderColor: "border-purple-300",
    },
  ];
  return (
    <div className="mt-14">
      <Tabs.Content value="Atividades">
        {/* titulo da pagina */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Log de atividades</h1>
            <p className="text-lg text-zinc-600 font-serif">
              Histórico completo de ações realizadas no sistema
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Select defaultValue="all-actions">
              <SelectTrigger className="w-[180px] py-5 border border-zinc-300 ">
                <SelectValue placeholder="Todas as ações" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all-actions">Todas as ações</SelectItem>
                  <SelectItem value="creations">Criações</SelectItem>
                  <SelectItem value="edits">Edites</SelectItem>
                  <SelectItem value="exclusions">Exclusões</SelectItem>
                  <SelectItem value="logins">Logins</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select defaultValue="today">
              <SelectTrigger className="w-[180px] py-5 border border-zinc-300 ">
                <SelectValue placeholder="Hoje" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="today">Hoje</SelectItem>
                  <SelectItem value="this-week">Essa semana</SelectItem>
                  <SelectItem value="this-mounth">Esse mês</SelectItem>
                  <SelectItem value="all">Todos</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`text-center p-4 ${stat.color} ${stat.textColor}`}
            >
              <h2 className="text-3xl font-bold mb-2">{stat.value}</h2>
              <p>{stat.label}</p>
            </Card>
          ))}
        </div>
      </Tabs.Content>
    </div>
  );
}

export default KeyStatisticsActivities;
