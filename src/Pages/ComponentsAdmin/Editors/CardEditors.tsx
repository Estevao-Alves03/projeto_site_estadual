import { MdEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Separator } from "@/components/ui/separator";
import { FaRegCheckCircle, FaTimes } from "react-icons/fa";

interface EditorProps {
  id: string;
  nome: string;
  email: string;
  dataCriacao: string;
  status: 'Ativo' | 'Inativo';
  cargo: string;
  acesso: string;
  metricas: {
    artigos: number;
    views: string;
    desde: string;
  };
  inicialAvatar: string;
}

interface CardEditorsProps {
  editores: EditorProps[];
}

function CardEditors({ editores }: CardEditorsProps) {
  return (
    <div className="mt-7 space-y-6">
      {editores.map((editor) => (
        <div 
          key={editor.id}
          className="flex flex-col border-2 border-gray-200 border-l-blue-600 border-l-4 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-gray-300"
        >
          {/* Conteúdo superior */}
          <div className="flex p-6 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {editor.inicialAvatar}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                    editor.status === 'Ativo' ? 'bg-green-500' : 'bg-red-500'
                  }`}/>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-xl font-bold">{editor.nome}</h1>
                    <div className={`inline-flex items-center rounded-lg px-3 py-1 ${
                      editor.status === 'Ativo' 
                        ? 'bg-blue-800' 
                        : 'bg-gray-500'
                    }`}>
                      <span className="font-bold text-xs text-white mr-1">
                        {editor.status}
                      </span>
                      {editor.status === 'Ativo' ? (
                        <FaRegCheckCircle
                          className="text-white"
                          size={12}
                        />
                      ) : (
                        <FaTimes 
                          className="text-red-400" 
                          size={12}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <MdEmail className="text-blue-500" />
                    <p className="text-base text-zinc-500">
                      {editor.email}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <SlCalender className="text-blue-500 text-xs" />
                    <p className="text-sm text-zinc-500">
                      Criado em: {editor.dataCriacao}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="border px-3 py-1 rounded-xl text-sm font-bold">
                  {editor.cargo}
                </span>
                <p className="text-sm text-zinc-500">{editor.acesso}</p>
              </div>
            </div>
          </div>
          
          {/* Separador */}
          <Separator className="my-2" />
          
          {/* Conteúdo inferior */}
          <div className="flex justify-center py-4 mx-2">
            <div className="grid grid-cols-3 gap-96 place-items-center">
              <div className="items-center flex flex-col">
                <span className="font-bold text-blue-600 text-xl">
                  {editor.metricas.artigos}
                </span>
                <p className="text-sm text-zinc-500">Artigos</p>
              </div>
              <div className="items-center flex flex-col">
                <span className="font-bold text-green-600 text-xl">
                  {editor.metricas.views}
                </span>
                <p className="text-sm text-zinc-500">Views</p>
              </div>
              <div className="items-center flex flex-col">
                <span className="font-bold text-purple-600 text-xl">
                  {editor.metricas.desde}
                </span>
                <p className="text-sm text-zinc-500">Desde</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardEditors;