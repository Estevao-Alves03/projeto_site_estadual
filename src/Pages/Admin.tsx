import { RxDashboard, RxPencil2, RxActivityLog, RxGear } from "react-icons/rx";
import * as Tabs from "@radix-ui/react-tabs";
import DashboardContent from "./ComponentsAdmin/Dashboard/DashboardContent";
import { useState } from "react";
import KeyStatisticsDashboard from "./ComponentsAdmin/Dashboard/KeyStatisticsDashboard";
import PerformanceEditors from "./ComponentsAdmin/Dashboard/PerformanceEditors";
import KeyStatisticsEditors from "./ComponentsAdmin/Editors/KeyStatisticsEditors";
import CardEditors from "./ComponentsAdmin/Editors/CardEditors";
import KeyStatisticsActivities from "./ComponentsAdmin/Activities/KeyStatisticsActivities";

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
        desde: "Jan. 2024"
      },
      inicialAvatar: "M"
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
        desde: "Mar. 2023"
      },
      inicialAvatar: "J"
    }
  ];

  return (
    <div className="p-6 py-7">
      {/* título */}
      <div>
        <h1 className="text-3xl font-bold pb-1">Painel De Administração</h1>
        <span className="text-zinc-500 font-bold">
          Vizualize informações do sistema
        </span>
      </div>

      {/* abas de menus */}
      <div className="pt-10">
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <Tabs.List
            className="relative flex items-center text-zinc-500 text-lg font-serif gap-10
             after:content-[''] after:absolute after:bottom-[-27px] after:left-0
             after:w-full after:border-b after:border-zinc-300"
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
                label: "Configurações Do Perfil",
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
                <span>{label}</span>

                <span
                  className={`absolute bottom-[-29px] left-0 h-0.5 ${
                    activeTab === label
                      ? "bg-blue-900 w-full"
                      : "bg-zinc-500 w-0"
                  } group-hover:w-full transition-all duration-300`}
                />
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          
          {/* Conteúdo das abas */}
          <Tabs.Content value="Dashboard">
            <KeyStatisticsDashboard/>
            <DashboardContent/> 
            <PerformanceEditors/>
          </Tabs.Content>
          
          <Tabs.Content value="Editores">
            <KeyStatisticsEditors/>
            <CardEditors editores={editores}/>
          </Tabs.Content>
          
          <Tabs.Content value="Atividades">
            <KeyStatisticsActivities/>
          </Tabs.Content>
          
          <Tabs.Content value="Configurações Do Perfil">
            {/* Adicione o conteúdo das configurações aqui */}
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}

export default Admin;