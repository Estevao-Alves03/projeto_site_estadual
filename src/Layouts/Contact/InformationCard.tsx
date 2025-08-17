import { Input } from "@/components/ui/input";

function InformationCard() {
  return (
    <div className="px-8 py-6 mt-10">
      <div className="border-2 bg-gradient-to-r from-blue-500 to-purple-600 p-8 flex items-center justify-center min-h-[100px] rounded-xl">
        <div className="flex flex-col items-center justify-center text-center gap-1">
          <h1 className="text-2xl font-bold text-white">
            Fique sempre informado!
          </h1>
          <p className="text-sm font-semibold text-white">
            Receba as principais notícias diretamente no seu email
          </p>
          <div className="mt-6 flex gap-3">
            <form action="">
              <Input
                placeholder="Seu email aqui..."
                className="w-80 bg-white focus:border2 focus:border-black"
              />
            </form>
            <button className="bg-white text-blue-600 px-2 py-1 rounded-lg text-sm hover:text-blue-800">
              Inscreva-se
            </button>
          </div>
          <div className="mt-2">
            <p className="text-xs text-white">
              Enviamos apenas conteúdo relevante. Sem spam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationCard;
