import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

interface TabCounts {
  ultimas: number;
  politica: number;
  esportes: number;
  infraestrutura: number;
  saude: number;
  cultura: number;
  educacao: number;
}

interface TabItem {
  path: string;
  display: string;
  key: keyof TabCounts;
}

function ButtonsTabs({
  counts = {
    ultimas: 4,
    politica: 2,
    esportes: 3,
    infraestrutura: 5,
    saude: 6,
    cultura: 4,
    educacao: 7,
  } as TabCounts
}) {
  const [activeTab, setActiveTab] = useState<keyof TabCounts>("ultimas");

  const tabs: TabItem[] = [
    { 
      path: "/UltimasNoticias",
      display: "Últimas Notícias",
      key: "ultimas" 
    },
    { 
      path: "/Politica", 
      display: "Política", 
      key: "politica" 
    },
    { 
      path: "/Esportes", 
      display: "Esportes", 
      key: "esportes" 
    },
    { 
      path: "/Infraestrutura", 
      display: "Infraestrutura", 
      key: "infraestrutura" 
    },
    { 
      path: "/Saude", 
      display: "Saúde", 
      key: "saude" 
    },
    { 
      path: "/Cultura", 
      display: "Cultura", 
      key: "cultura" 
    },
    { 
      path: "/Educacao", 
      display: "Educação", 
      key: "educacao" 
    },
  ];

  return (
    <div className="p-3 px-8 flex items-center justify-center border-b relative">
      <div className="flex text-zinc-500 text-lg font-serif gap-20">
        {tabs.map(({ path, display, key }) => (
          <Link
            to={path}
            key={key}
            className={`relative group flex items-center gap-2 h-full ${
              activeTab === key ? "text-blue-900" : "group-hover:text-zinc-500"
            }`}
            onClick={() => setActiveTab(key)}
          >
            {display}
            <span
              className={`${
                activeTab === key
                  ? "bg-blue-100 text-blue-900"
                  : "bg-zinc-200 text-black"
              } text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ml-1`}
            >
              {counts[key]}
            </span>
            <span
              className={`absolute bottom-[-13px] left-0 w-${
                activeTab === key ? "full" : "0"
              } h-0.5 ${
                activeTab === key ? "bg-blue-900" : "bg-zinc-500"
              } group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ButtonsTabs;