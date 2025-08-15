import { LuCalendar, LuClock, LuDot, LuSun } from "react-icons/lu";
import { Separator } from "../components/ui/separator";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("Ultimas Notícias");
  return (
    <div className="px-64">
      <div className="flex items-center justify-between pt-3 pb-1">
        {/* topo do site */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <LuCalendar className="w-4 h-4" />
            <p>quinta-feira, 14 de agosto de 2025</p>
          </div>
          <div className="flex items-center gap-2">
            <LuClock className="w-4 h-4" />
            <p>21:49</p>
          </div>
        </div>
        <div className="text-zinc-500 flex gap-3 items-center">
          <Link
            to="/admin"
            className={`relative group flex items-center gap-2 ${
              activeTab === "Admin"
                ? "text-red-900"
                : "group-hover:text-zinc-500"
            }`}
            onClick={() => setActiveTab("Admin")}
          >
            <IoSettingsOutline className="text-xl" />
            <span>Admin</span>
            <span
              className={`absolute bottom-[-20px] left-0 h-0.5 ${
                activeTab === "Admin" ? "bg-red-900 w-full" : "bg-zinc-500 w-0"
              } group-hover:w-full transition-all duration-300`}
            />
          </Link>
          <button className="border-2 p-2 rounded-md">
            <LuSun className="w-5 h-5" />
          </button>
        </div>
      </div>
      <Separator className="my-2" />

      {/* logo com barra de pesquisa */}
      <div className="bg-white">
        <div className="flex flex-col items-center justify-center pt-5">
          <div className="w-16 h-16 rounded-full mb-4 overflow-hidden">
            <img
              src="/logo.jpeg"
              alt="Logo A Voz do Estado"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-800">
              A VOZ DO ESTADO
            </h1>
            <p className="text-zinc-600 mt-2">
              Portal oficial de notícias • Informação confiável e atualizada
            </p>
          </div>

          <div className="mt-3 w-full max-w-md px-4">
            <div className="relative">
              <div className="absolute left-3 top-2.5">
                <IoIosSearch className="text-gray-400 text-base" />
              </div>
              <input
                type="text"
                placeholder="Pesquisar notícias..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none text-center placeholder:text-center"
              />
            </div>
          </div>
        </div>
        <Separator className="mt-8 mb-1" />

        {/* Nova seção adicionada */}
        <div className="flex justify-center mt-4 text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border px-2 rounded-full bg-blue-100">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-blue-500 px-2 py-1">
                notícias publicadas
              </span>
            </div>
            <div className="flex items-center gap-2 border px-2 rounded-full bg-green-100">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-green-500 px-2 py-1">
                Atualizado há 3 minutos
              </span>
            </div>
            <div className="flex items-center gap-2 border px-2 rounded-full bg-purple-100">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span className="text-purple-500 px-2 py-1">28k vistas hoje</span>
            </div>
          </div>
        </div>
        <Separator className="mt-4" />
      </div>
    </div>
  );
}

export default Navbar;
