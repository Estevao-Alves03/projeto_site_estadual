import * as Tabs from "@radix-ui/react-tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function KeyStatisticsActivities() {
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
      </Tabs.Content>
    </div>
  );
}

export default KeyStatisticsActivities;
