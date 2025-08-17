import { MdOutlinePersonOutline } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

function NewsCard() {
  return (
    <div className="w-96 mt-12 group">
      <div className="border-2 rounded-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
        {/* Container da imagem com efeito de zoom */}
        <div className="h-44 bg-blue-200 overflow-hidden relative">
          {/* Tag de categoria - agora com transform-none para não ser afetada pelo zoom */}
          <div className="absolute top-3 left-3 bg-blue-500 px-3  rounded-full z-10 transform-none">
            <span className="text-xs font-bold text-white">SAÚDE</span>
          </div>
          
          {/* Container da imagem com zoom */}
          <div className="h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-110 bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')] bg-cover bg-center">
          </div>
        </div>
        
        <div className="flex items-center justify-center px-6 py-3">
          <div>
            <h1 className="text-lg font-bold hover:text-blue-800">
              Campanha de vacinação contra gripe começa segunda-feira
            </h1>
            <p className="text-base font-serif text-gray-500 mt-1">
              Postos de saúde estarão abertos das 8h às 17h para atender a população
            </p>
            <div className="flex items-center mt-1 space-x-4">
              <div className="flex items-center">
                <MdOutlinePersonOutline className="mr-1 w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-500 font-serif">
                  Maria Santos
                </p>
              </div>
              <div className="flex items-center">
                <GoClock className="mr-1 w-3.5 h-3.5 text-gray-500" />
                <p className="text-sm text-gray-500 font-serif">
                  14/01/2024, 11:20
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 space-x-4">
              <div className="flex items-center">
                <LuMapPin className="mr-1 w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-500 font-serif">
                  Toda cidade
                </p>
              </div>
              <div>
                <FaRegHeart className="w-4 h-4 text-gray-500 hover:text-red-600 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;