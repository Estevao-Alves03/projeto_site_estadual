import * as Tabs from "@radix-ui/react-tabs";
import { RxDashboard, RxPencil2, RxActivityLog, RxGear } from "react-icons/rx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import InfoCard from "../Layouts/InfoCard";
import { useState } from "react";
import {
  MdArticle,
  MdCheckCircle,
  MdVisibility,
  MdPerson,
  MdGroups,
  MdFlashOn,
} from "react-icons/md";

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
                label: "Configurações",
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
          <Tabs.Content value="Dashboard" className="pt-16">
            <div className="grid grid-cols-3 grid-rows-3 gap-4">
              <InfoCard
                title="Total de Notícias"
                value={25}
                icon={<MdArticle className="text-white" />}
                bgColor="bg-blue-100"
                borderColor="border-blue-300"
                iconBg="bg-blue-600"
                textColor="text-blue-900"
              />
              <InfoCard
                title="Publicadas Hoje"
                value={3}
                icon={<MdCheckCircle className="text-white" />}
                bgColor="bg-green-100"
                borderColor="border-green-300"
                iconBg="bg-green-600"
                textColor="text-green-900"
              />
              <InfoCard
                title="Visualizações"
                value="15.420"
                icon={<MdVisibility className="text-white" />}
                bgColor="bg-purple-100"
                borderColor="border-purple-300"
                iconBg="bg-purple-600"
                textColor="text-purple-800"
              />
              <InfoCard
                title="Editores Ativos"
                value={2}
                icon={<MdPerson className="text-white" />}
                bgColor="bg-orange-100"
                borderColor="border-orange-300"
                iconBg="bg-orange-500"
                textColor="text-orange-800"
              />
              <InfoCard
                title="Total de Editores"
                value={3}
                icon={<MdGroups className="text-white" />}
                bgColor="bg-red-100"
                borderColor="border-red-300"
                iconBg="bg-red-500"
                textColor="text-red-800"
              />
              <InfoCard
                title="Uptime"
                value="99.9%"
                icon={<MdFlashOn className="text-white" />}
                bgColor="bg-cyan-100"
                borderColor="border-cyan-300"
                iconBg="bg-teal-600"
                textColor="text-teal-900"
              />
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Atividade Recente
                </CardTitle>
                <CardDescription className="text-base font-serif text-zinc-500">
                  Últimas ações realizadas no sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 flex items-center justify-between p-3 rounded-md">
                  <div>
                    <span className="w-8 h-8 rounded-full bg-blue-400" />
                    <h1>teste</h1>
                    <p>teste de texto grande</p>
                  </div>
                  <div>
                    <span>07/08/2025 - 14:29</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}

export default Admin;
