import { MdOutlinePersonOutline } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const newsData = [
  {
    id: 1,
    category: "SAÚDE",
    title: "Campanha de vacinação contra gripe começa segunda-feira",
    description:
      "Postos de saúde estarão abertos das 8h às 17h para atender a população",
    author: "Maria Santos",
    date: "14/01/2024, 11:20",
    location: "Toda cidade",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1471&q=80",
  },
  {
    id: 2,
    category: "TECNOLOGIA",
    title: "Nova inteligência artificial promete revolucionar empresas",
    description:
      "Ferramenta será lançada ainda este ano com foco em automação de processos",
    author: "João Almeida",
    date: "18/01/2024, 15:40",
    location: "São Paulo",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1471&q=80",
  },
  {
    id: 3,
    category: "EDUCAÇÃO",
    title:
      "Universidades públicas abrem inscrições para cursos online gratuitos",
    description:
      "Cursos abrangem diversas áreas como programação, idiomas e gestão",
    author: "Ana Oliveira",
    date: "20/01/2024, 09:30",
    location: "Online",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1471&q=80",
  },
  {
    id: 4,
    category: "ESPORTE",
    title: "Corrida de rua reúne milhares de participantes neste domingo",
    description:
      "Evento contou com percursos de 5km, 10km e 21km pelas principais avenidas",
    author: "Carlos Pereira",
    date: "21/01/2024, 07:00",
    location: "Rio de Janeiro",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    category: "CULTURA",
    title: "Festival de música atrai público recorde na capital",
    description: "Mais de 50 bandas se apresentaram em três dias de evento",
    author: "Fernanda Lima",
    date: "22/01/2024, 20:00",
    location: "Belo Horizonte",
    image:
      "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    category: "ECONOMIA",
    title: "Inflação registra queda e anima o mercado financeiro",
    description:
      "Especialistas acreditam em melhora no consumo para os próximos meses",
    author: "Ricardo Souza",
    date: "25/01/2024, 12:15",
    location: "Brasília",
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1470&q=80",
  },
];

// interface para tipar os dados
interface News {
  id: number;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  location: string;
  image: string;
}

// props tipadas do card
type NewsCardProps = {
  news: News;
};

function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="w-96 mt-12 group">
      <div className="border-2 rounded-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
        <div className="h-44 overflow-hidden relative">
          <div className="absolute top-3 left-3 bg-blue-500 px-3 rounded-full z-10 transform-none">
            <span className="text-xs font-bold text-white">
              {news.category}
            </span>
          </div>
          <div
            className="h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-110 bg-cover bg-center"
            style={{ backgroundImage: `url(${news.image})` }}
          ></div>
        </div>

        <div className="flex items-center justify-center px-6 py-3">
          <div>
            <h1 className="text-lg font-bold hover:text-blue-800">
              {news.title}
            </h1>
            <p className="text-base font-serif text-gray-500 mt-1">
              {news.description}
            </p>

            <div className="flex items-center mt-1 space-x-4">
              <div className="flex items-center">
                <MdOutlinePersonOutline className="mr-1 w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-500 font-serif">
                  {news.author}
                </p>
              </div>
              <div className="flex items-center">
                <GoClock className="mr-1 w-3.5 h-3.5 text-gray-500" />
                <p className="text-sm text-gray-500 font-serif">{news.date}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 space-x-4">
              <div className="flex items-center">
                <LuMapPin className="mr-1 w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-500 font-serif">
                  {news.location}
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

function NewsList() {
  return (
    <div>
      {/* Título centralizado */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Todas as Notícias</h1>
        <p className="text-lg text-zinc-600">
          {newsData.length} {newsData.length === 1 ? "notícia encontrada" : "notícias encontradas"}
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}


export default NewsList;
