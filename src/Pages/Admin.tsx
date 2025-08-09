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
          <KeyStatisticsDashboard/>
          <DashboardContent/> 
          <PerformanceEditors/>  
          <KeyStatisticsEditors/>
          <CardEditors/>
          <KeyStatisticsActivities/>   
        </Tabs.Root>
      </div>
    </div>
  );
}

export default Admin;
