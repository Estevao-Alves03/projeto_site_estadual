import { FaArrowLeft } from "react-icons/fa6";
import { LuSun } from "react-icons/lu";
import { PiShareNetworkDuotone } from "react-icons/pi";

function SimpleNavbar() {
  return (
    <div className="px-4 py-4 border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Grupo à esquerda - Botão Voltar + Logo + Nome */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
            <FaArrowLeft className="w-4 h-4 text-black" />
            <span className="text-black text-base font-medium">Voltar</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
              <img
                src="../../public/logo.jpeg"
                alt="Logo do site"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              A Voz do Estado
            </h1>
          </div>
        </div>

        {/* Lado direito - Botão Tema */}
        <div className="flex items-center gap-5">
          <div>
            <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
              <PiShareNetworkDuotone className="w-5 h-5 text-black" />
              <p className="text-black text-base font-medium">
                Compartilhar
              </p>
            </button>
          </div>
          <div>
            <button className="p-2 rounded-md hover:bg-gray-100 transition-colors border border-gray-200">
              <LuSun className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleNavbar;
