import * as Tabs from "@radix-ui/react-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

function DashboardContent() {
  const menuItems = [
    { name: "Politica", color: "bg-red-600", posts: 19 },
    { name: "Esportes", color: "bg-blue-600", posts: 10 },
    { name: "Infraestrutura", color: "bg-yellow-600", posts: 12 },
    { name: "Saúde", color: "bg-green-600", posts: 9 },
    { name: "Cultura", color: "bg-purple-600", posts: 5 },
    { name: "Educação", color: "bg-pink-600", posts: 15 },
  ];

  const newsItems = [
    {
      id: 1,
      title: "Nova ponte será inaugurada no centro",
      author: "João Silva",
      views: "2.340",
      rank: 1,
    },
    {
      id: 2,
      title: "Time municipal conquista campeonato",
      author: "Roberto Ferreira",
      views: "1.890",
      rank: 2,
    },
    {
      id: 3,
      title: "Campanha de vacinação contra gripe",
      author: "Maria Santos",
      views: "1.650",
      rank: 3,
    },
    {
      id: 4,
      title: "Festival de Inverno movimenta economia",
      author: "Carlos Oliveira",
      views: "1.420",
      rank: 4,
    },
    {
      id: 5,
      title: "Câmara aprova orçamento de R$ 50 milhões",
      author: "Ana Costa",
      views: "1.180",
      rank: 5,
    },
  ];

  return (
    <div>
      <Tabs.Content value="Dashboard">
        {/* Card de Noticias */}
        <div className="grid grid-cols-2 gap-4 p-3 mt-5">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                📊 Notícias por Categoria
              </CardTitle>
              <CardDescription className="text-base font-serif text-zinc-500">
                Quantidade de notícias publicadas por categoria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    {/* Lado esquerdo - Cor e nome da categoria */}
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-sm ${item.color}`} />
                      <span className="text-gray-800 font-medium">
                        {item.name}
                      </span>
                    </div>

                    {/* Lado direito - Barra de progresso + Número */}
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color}`}
                          style={{ width: `${(item.posts / 20) * 100}%` }}
                        />
                      </div>
                      <span className="text-gray-600 font-semibold w-8 text-right">
                        {item.posts}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Card de noticias mais vizualizadas - VERSÃO CORRIGIDA */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                🔥 Notícias Mais Visualizadas
              </CardTitle>
              <CardDescription className="text-base font-serif text-zinc-500">
                Top 5 notícias com mais visualizações esta semana
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {newsItems.map((item) => (
                  <div key={item.id} className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 font-medium w-6 text-right">
                        {item.rank}.
                      </span>
                      <h3 className="font-semibold text-gray-800 flex-1">
                        {item.title}
                      </h3>
                      <span className="text-gray-500 font-medium">
                        {item.views}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm pl-9">
                      por {item.author}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Tabs.Content>
    </div>
  );
}

export default DashboardContent;
