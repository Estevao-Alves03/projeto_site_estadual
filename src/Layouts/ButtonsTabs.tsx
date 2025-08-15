import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

function ButtonsTabs({
  counts = {
    ultimas: 4,
    politica: 2,
    esportes: 3,
    Infraestrutura: 5,
    Saúde: 6,
    Cultura: 4,
    Educação: 7,
  },
}) {
  const [activeTab, setActiveTab] = useState("Ultimas Notícias");

  return (
    <div className="p-3 px-8 flex items-center justify-between border-b relative">
      <div className="flex text-zinc-500 text-lg font-serif gap-7">
        {[
          { label: "Ultimas Notícias", count: counts.ultimas, key: "ultimas" },
          { label: "Política", count: counts.politica, key: "politica" },
          { label: "Esportes", count: counts.esportes, key: "esportes" },
          {
            label: "Infraestrutura",
            count: counts.Infraestrutura,
            key: "Infraestrutura",
          },
          { label: "Saúde", count: counts.Saúde, key: "Saúde" },
          { label: "Cultura", count: counts.Cultura, key: "Cultura" },
          { label: "Educação", count: counts.Educação, key: "Educação" },
        ].map(({ label, count, key }) => (
          <Link
            to={label}
            key={key}
            className={`relative group flex items-center gap-2 h-full ${
              activeTab === label
                ? "text-blue-900"
                : "group-hover:text-zinc-500"
            }`}
            onClick={() => setActiveTab(label)}
          >
            {label}
            <span
              className={`${
                activeTab === label
                  ? "bg-blue-100 text-blue-900"
                  : "bg-zinc-200 text-black"
              } text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ml-1`}
            >
              {count}
            </span>
            <span
              className={`absolute bottom-[-13px] left-0 w-${
                activeTab === label ? "full" : "0"
              } h-0.5 ${
                activeTab === label ? "bg-blue-900" : "bg-zinc-500"
              } group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}
      </div>

      <div className="text-zinc-500">
        <Link
          to="/admin"
          className={`relative group flex items-center gap-2 h-full ${
            activeTab === "Admin" ? "text-red-900" : "group-hover:text-zinc-500"
          }`}
          onClick={() => setActiveTab("Admin")}
        >
          <IoSettingsOutline className="text-xl" />
          <span>Admin</span>
          <span
            className={`absolute bottom-[-14px] left-0 h-0.5 ${
              activeTab === "Admin" ? "bg-red-900 w-full" : "bg-zinc-500 w-0"
            } group-hover:w-full transition-all duration-300`}
          />
        </Link>
      </div>
    </div>
  );
}

export default ButtonsTabs;
