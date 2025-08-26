import { GoClock } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";

// Interface para tipar os dados
interface News {
  id: number;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

// Dados de exemplo
const newsData: News[] = [
  {
    id: 1,
    category: "SAÚDE",
    title: "Campanha de vacinação contra gripe começa segunda-feira",
    description:
      "Postos de saúde estarão abertos das 8h às 17h para atender a população",
    author: "Maria Santos",
    date: "14/01/2024",
    time: "11:20",
    location: "Toda cidade",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1471&q=80",
  },
  {
    id: 2,
    category: "CULTURA",
    title: "Festival de Inverno movimenta economia local",
    description:
      "Evento reúne artistas regionais e atrai turistas de várias cidades",
    author: "Carlos Oliveira",
    date: "13/01/2024",
    time: "13:45",
    location: "Centro Cultural",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    category: "INFRAESTRUTURA",
    title: "Nova ponte será inaugurada no centro da cidade",
    description:
      "Obra que custou R$ 2,5 milhões promete melhorar o trânsito na região central",
    author: "João Silva",
    date: "15/01/2024",
    time: "07:30",
    location: "Centro",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    category: "EDUCAÇÃO",
    title: "Escolas municipais recebem novos computadores",
    description:
      "Investimento de R$ 1,2 milhão beneficia 30 unidades de ensino",
    author: "Ana Costa",
    date: "16/01/2024",
    time: "09:15",
    location: "Escolas Municipais",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    category: "ESPORTES",
    title: "Time local conquista campeonato estadual",
    description: "Equipe vence por 3 a 1 e garante vaga na competição nacional",
    author: "Pedro Almeida",
    date: "17/01/2024",
    time: "14:30",
    location: "Estádio Municipal",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    category: "MEIO AMBIENTE",
    title: "Parque natural ganha nova área de preservação",
    description:
      "Expansão de 50 hectares protege espécies ameaçadas de extinção",
    author: "Juliana Martins",
    date: "18/01/2024",
    time: "10:45",
    location: "Parque Natural",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1471&q=80",
  },
];

function LatestNews() {
  const [mainNews, ...otherNews] = newsData;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-56">
        {/* Título e subtítulo */}
        <div className="flex items-center justify-center mb-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Notícia em Destaque</h1>
            <p className="text-lg text-zinc-600">
              A notícia mais importante do momento
            </p>
          </div>
        </div>

        {/* Layout de grid com 2 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coluna esquerda - Notícia em destaque */}
          <div className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
              <div className="h-64 md:h-80 overflow-hidden relative">
                <div className="absolute top-3 left-3 bg-red-500 px-3 py-1 rounded-full z-10">
                  <span className="text-sm font-bold text-white">
                    {mainNews.category}
                  </span>
                </div>
                <div
                  className="h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-110 bg-cover bg-center"
                  style={{ backgroundImage: `url(${mainNews.image})` }}
                ></div>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-800 cursor-pointer">
                  {mainNews.title}
                </h2>
                <p className="mt-2 text-gray-500 mb-6">
                  {mainNews.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <MdOutlinePersonOutline className="mr-1 w-4 h-4" />
                      <span>{mainNews.author}</span>
                    </div>
                    <div className="flex items-center">
                      <GoClock className="mr-1 w-4 h-4" />
                      <span>
                        {mainNews.date}, {mainNews.time}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <LuMapPin className="mr-1 w-4 h-4" />
                      <span>{mainNews.location}</span>
                    </div>
                  </div>
                </div>
                <button className="px-6 py-2 w-full bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                  Ler notícia completa
                </button>
              </div>
            </div>
          </div>

          {/* Coluna direita - Outras notícias importantes */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-4">
              Outras notícias importantes
            </h1>

            {/* Container rolável com no máximo 3 notícias */}
            {/* Container rolável com todas as notícias */}
            <div className="max-h-96 overflow-y-auto pr-2">
              {otherNews.map((news) => (
                <div
                  key={news.id}
                  className="group/news-item border rounded-lg px-4 py-3 mb-4 relative hover:bg-gray-50 transition-colors"
                >
                  <div className="pr-24">
                    <h3 className="font-bold text-lg mb-1 hover:text-blue-800 cursor-pointer">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center">
                      <MdOutlinePersonOutline className="mr-1" />
                      {news.author} • {news.date}, {news.time}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <LuMapPin className="mr-1" />
                      {news.location}
                    </p>
                  </div>
                  <div className="absolute right-3 top-3 w-20 h-20 overflow-hidden rounded-md">
                    <div
                      className="w-full h-full transition-transform duration-500 ease-in-out group-hover/news-item:scale-110 bg-cover bg-center"
                      style={{ backgroundImage: `url(${news.image})` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
