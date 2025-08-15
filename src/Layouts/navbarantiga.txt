import { IoIosSearch } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { LuSun } from "react-icons/lu";

function Navbar() {
  return (
    <div className="border p-3 px-7 flex justify-between items-center">
      {/* Lado esquerdo: logo + título */}
      <div className="flex items-center gap-3">
        <img className="w-12 h-12 rounded-full" src="/logo.jpeg" alt="logo" />
        <div>
          <h1 className="text-3xl font-bold text-blue-900">A voz do Estado</h1>
          <p className="text-base font-serif text-zinc-500">
            Notícias do nosso estado
          </p>
        </div>
      </div>

      {/* Lado direito: busca, data e botão */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar Noticias..."
            className="pl-9 p-2 border border-zinc-300 rounded-md placeholder:text-zinc-500"
          />
        </div>
        <div className="flex items-center text-zinc-500">
          <SlCalender />
          <span className="pl-2">06/08/2025</span>
        </div>
        <div>
          <button className="border-2 p-2 rounded-md">
            <LuSun className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;