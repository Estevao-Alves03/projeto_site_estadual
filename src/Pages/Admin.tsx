// arquivos
import KeyStatisticsDashboard from "./ComponentsAdmin/Dashboard/KeyStatisticsDashboard";
import KeyStatisticsActivities from "./ComponentsAdmin/Activities/KeyStatisticsActivities";
import KeyStatisticsEditors from "./ComponentsAdmin/Editors/KeyStatisticsEditors";
import DashboardContent from "./ComponentsAdmin/Dashboard/DashboardContent";
import ActivityLog from "./ComponentsAdmin/Activities/ActivitiyLogs";
import PerformanceEditors from "./ComponentsAdmin/Dashboard/PerformanceEditors";
import CardEditors from "./ComponentsAdmin/Editors/CardEditors";
import Settings from "./ComponentsAdmin/SiteSettings/Settings";
import Profile from "./ComponentsAdmin/Profile/Profile";
// icones
import { RxDashboard, RxPencil2, RxActivityLog, RxGear } from "react-icons/rx";
import { useState } from "react";
import { MdPerson } from "react-icons/md";
import * as Tabs from "@radix-ui/react-tabs";

function Admin() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Dados mockados para os editores
  const editores = [
    {
      id: "1",
      nome: "Maria Santos",
      email: "maria.santos@portalmunicipal.gov.br",
      dataCriacao: "01/01/2024, 07:00",
      status: "Ativo" as const,
      cargo: "Editor Ativo",
      acesso: "Apenas visualização",
      metricas: {
        artigos: 12,
        views: "2.4k",
        desde: "Jan. 2024",
      },
      inicialAvatar: "M",
    },
    {
      id: "2",
      nome: "João Silva",
      email: "joao.silva@portal.com",
      dataCriacao: "15/03/2023, 14:30",
      status: "Inativo" as const,
      cargo: "Editor Chefe",
      acesso: "Acesso total",
      metricas: {
        artigos: 24,
        views: "5.7k",
        desde: "Mar. 2023",
      },
      inicialAvatar: "J",
    },
  ];

  return (
    <div className="py-3">
      {/* abas de menus */}
      <div className="px-4 sm:px-6 lg:px-8 relative"> 
        {/* Linha divisória completa */}
        <div className="absolute left-0 right-0 bottom-[calc(100%-45px)] border-b border-zinc-300" />
        
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center relative">
            <Tabs.List
              className="relative flex items-center text-zinc-500 text-lg font-serif gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20"
            >
              {[
                {
                  label: "Dashboard",
                  icon: <RxDashboard />,
                },
                {
                  label: "Editores",
                  icon: <RxPencil2 />,
                },
                {
                  label: "Atividades",
                  icon: <RxActivityLog />,
                },
                {
                  label: "Perfil",
                  icon: <MdPerson />,
                },
                {
                  label: "Configurações Do Site",
                  icon: <RxGear />,
                },
              ].map(({ label, icon }) => (
                <Tabs.Trigger
                  key={label}
                  value={label}
                  className={`relative group flex items-center gap-2 h-full transition-colors duration-200 ${
                    activeTab === label
                      ? "text-blue-900"
                      : "group-hover:text-zinc-500"
                  }`}
                >
                  {icon}
                  <span className="whitespace-nowrap">{label}</span>

                  <span
                    className={`absolute bottom-[-19px] left-0 h-0.5 ${
                      activeTab === label
                        ? "bg-blue-900 w-full"
                        : "bg-zinc-500 w-0"
                    } group-hover:w-full transition-all duration-300`}
                  />
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </div>

          {/* Conteúdo das abas */}
          <Tabs.Content value="Dashboard">
            <KeyStatisticsDashboard />
            <DashboardContent />
            <PerformanceEditors />
          </Tabs.Content>

          <Tabs.Content value="Editores">
            <KeyStatisticsEditors />
            <CardEditors editores={editores} />
          </Tabs.Content>

          <Tabs.Content value="Atividades">
            <KeyStatisticsActivities />
            <ActivityLog />
          </Tabs.Content>

          <Tabs.Content value="Perfil">
            <Profile />
          </Tabs.Content>

          <Tabs.Content value="Configurações Do Site">
            <Settings />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}

export default Admin;