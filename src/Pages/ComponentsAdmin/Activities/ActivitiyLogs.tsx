import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { format, parse } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ActivityItem {
  id: string;
  user: {
    name: string;
    role: string;
    avatar?: string;
  };
  action: string;
  target?: string;
  date: string; // Formato: "DD/MM/YYYY"
  time: string;
  day: string;
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function ActivityLog() {
  const actionEmojis: Record<string, string> = {
    Editou: "✏️",
    Criou: "📝",
    Excluiu: "🗑️",
    Ativou: "✅",
    Desativou: "❌"
  };

  const [allActivities, setAllActivities] = useState<ActivityItem[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<ActivityItem[]>([]);
  const [currentDate, setCurrentDate] = useState<string>(() => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  });
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [isToday, setIsToday] = useState<boolean>(true);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const getFormattedDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const parseDateFromString = (dateString: string): Date => {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day);
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    
    const formattedDate = getFormattedDate(date);
    if (availableDates.includes(formattedDate)) {
      setCurrentDate(formattedDate);
      setIsToday(formattedDate === getFormattedDate(new Date()));
    }
    setCalendarOpen(false);
  };

  const getActionEmoji = (action: string): string => {
    const actionKeyword = action.split(" ")[0];
    return actionEmojis[actionKeyword] || "🔹";
  };

 useEffect(() => {
  const mockActivities: ActivityItem[] = [
    // Atividades de hoje
    {
      id: "1",
      user: { name: "Maria Santos", role: "Editor" },
      action: "Criou notícia",
      target: "Nova ponte será inaugurada",
      date: getFormattedDate(new Date()), // Hoje
      time: "07:30",
      day: "seg.",
    },
    {
      id: "2",
      user: { name: "João Silva", role: "Editor" },
      action: "Editou notícia",
      target: "Campanha de vacinação",
      date: getFormattedDate(new Date()), // Hoje
      time: "09:45",
      day: "seg.",
    },
    // Atividades de ontem
    {
      id: "3",
      user: { name: "Ana Costa", role: "Admin" },
      action: "Ativou editor",
      target: "Carlos Oliveira",
      date: getFormattedDate(new Date(Date.now() - 86400000)), // Ontem
      time: "14:20",
      day: "dom.",
    },
    {
      id: "4",
      user: { name: "Pedro Rocha", role: "Editor" },
      action: "Excluiu notícia",
      target: "Evento cancelado",
      date: getFormattedDate(new Date(Date.now() - 86400000)), // Ontem
      time: "16:15",
      day: "dom.",
    },
    // Atividades de anteontem
    {
      id: "5",
      user: { name: "Luísa Mendes", role: "Editor" },
      action: "Criou notícia",
      target: "Festival de Inverno",
      date: getFormattedDate(new Date(Date.now() - 2 * 86400000)), // Anteontem
      time: "10:00",
      day: "sáb.",
    },
    {
      id: "6",
      user: { name: "Owner", role: "Admin" },
      action: "Desativou editor",
      target: "Fernanda Lima",
      date: getFormattedDate(new Date(Date.now() - 2 * 86400000)), // Anteontem
      time: "18:30",
      day: "sáb.",
    },
    // Atividades de 3 dias atrás
    {
      id: "7",
      user: { name: "Carlos Andrade", role: "Editor" },
      action: "Editou notícia",
      target: "Novo parque municipal",
      date: getFormattedDate(new Date(Date.now() - 3 * 86400000)),
      time: "11:20",
      day: "sex.",
    },
    // Atividades de 1 semana atrás
    {
      id: "8",
      user: { name: "Owner", role: "Admin" },
      action: "Ativou editor",
      target: "Mariana Souza",
      date: getFormattedDate(new Date(Date.now() - 7 * 86400000)),
      time: "08:15",
      day: "seg.",
    },
    {
      id: "9",
      user: { name: "Mariana Souza", role: "Editor" },
      action: "Criou notícia",
      target: "Reforma da biblioteca",
      date: getFormattedDate(new Date(Date.now() - 7 * 86400000)),
      time: "13:45",
      day: "seg.",
    },
    // Atividade de 2 semanas atrás
    {
      id: "10",
      user: { name: "Ricardo Alves", role: "Editor" },
      action: "Excluiu notícia",
      target: "Projeto arquivado",
      date: getFormattedDate(new Date(Date.now() - 14 * 86400000)),
      time: "15:10",
      day: "seg.",
    }
  ];

  setAllActivities(mockActivities);
}, []);

  useEffect(() => {
    if (allActivities.length > 0) {
      const uniqueDates = Array.from(
        new Set(allActivities.map((activity) => activity.date))
      ).sort((a: string, b: string) => {
        return parseDateFromString(b).getTime() - parseDateFromString(a).getTime();
      });

      setAvailableDates(uniqueDates);

      const today = getFormattedDate(new Date());
      if (uniqueDates.includes(today)) {
        setCurrentDate(today);
        setIsToday(true);
      } else {
        setCurrentDate(today);
        setFilteredActivities([]);
        setIsToday(true);
      }
    }
  }, [allActivities]);

  useEffect(() => {
    if (currentDate) {
      const filtered = allActivities.filter(
        (activity) => activity.date === currentDate
      );
      setFilteredActivities(filtered);
      setIsToday(currentDate === getFormattedDate(new Date()));
    }
  }, [currentDate, allActivities]);

  return (
    <Card className="w-full mt-7">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">
            📒 Registro de Atividades
          </CardTitle>
          <div className="flex items-center gap-2">
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="justify-start text-left font-normal"
                >
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  {currentDate === getFormattedDate(new Date())
                    ? "Hoje"
                    : format(parseDateFromString(currentDate), "PPP", { locale: ptBR })}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={parseDateFromString(currentDate)}
                  onSelect={handleDateSelect}
                  disabled={(date: Date) => !availableDates.includes(getFormattedDate(date))}
                  initialFocus
                  locale={ptBR}
                />
              </PopoverContent>
            </Popover>
            <CardDescription className="text-xs font-semibold text-black border rounded-full px-2 py-0.5">
              {filteredActivities.length} registros
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="overflow-y-auto max-h-[300px]">
        {isToday && filteredActivities.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-4 text-center">
            <p className="font-semibold text-base">
              Nenhuma atividade registrada hoje
            </p>
            <p className="text-sm text-zinc-500 mt-1">
              As atividades aparecerão aqui quando houver movimentação
            </p>
            {availableDates.length > 0 && (
              <Button
                variant="link"
                size="sm"
                className="mt-2 text-blue-500"
                onClick={() => {
                  setCurrentDate(availableDates[0]);
                  setIsToday(false);
                }}
              >
                Ver atividades anteriores
              </Button>
            )}
          </div>
        ) : filteredActivities.length > 0 ? (
          <div>
            {!isToday && (
              <div className="flex justify-end mb-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-500 hover:text-blue-600"
                  onClick={() => {
                    setCurrentDate(getFormattedDate(new Date()));
                    setIsToday(true);
                  }}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Voltar para hoje
                </Button>
              </div>
            )}
            <div className="space-y-2">
              {filteredActivities.map((activity, index) => (
                <div key={`${activity.id}-${index}`}>
                  <div className="flex justify-between items-start py-2">
                    <div className="flex gap-2 flex-1">
                      <Avatar className="h-7 w-7">
                        <AvatarImage src={activity.user.avatar} />
                        <AvatarFallback className="text-sm">
                          {getActionEmoji(activity.action)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <p className="font-bold text-sm truncate">
                            {activity.user.name}
                          </p>
                          <span className="text-[10px] bg-white border px-2 py-0.5 rounded-full text-black font-semibold">
                            {activity.user.role}
                          </span>
                        </div>
                        <p className="text-sm font-normal text-muted-foreground truncate">
                          {activity.action}:{" "}
                          <span className="italic">{activity.target}</span>
                        </p>
                      </div>
                    </div>
                    <div className="text-[10px] font-bold text-right shrink-0 ml-2">
                      <p>{activity.time}</p>
                      <p className="text-zinc-500">{activity.day}</p>
                    </div>
                  </div>
                  {index < filteredActivities.length - 1 && (
                    <Separator className="my-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-4 text-center">
            <p className="font-semibold text-base">
              Nenhuma atividade registrada para esta data
            </p>
            <Button
              variant="link"
              size="sm"
              className="mt-2 text-blue-500"
              onClick={() => {
                setCurrentDate(getFormattedDate(new Date()));
                setIsToday(true);
              }}
            >
              Voltar para hoje
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ActivityLog;