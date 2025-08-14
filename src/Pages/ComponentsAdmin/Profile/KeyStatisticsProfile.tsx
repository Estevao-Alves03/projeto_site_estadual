import InfoCard from "../../../Layouts/InfoCard";
import * as Tabs from "@radix-ui/react-tabs";
import {
  MdArticle,
  MdCheckCircle,
  MdVisibility,
  MdPerson,
  MdGroups,
  MdFlashOn,
} from "react-icons/md";

function KeyStatisticsProfile() {
  return (
    <div>
      <Tabs.Content value="Dashboard" className="pt-16">
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
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
        </Tabs.Content>
    </div>
  )
}

export default KeyStatisticsProfile
