import * as Tabs from "@radix-ui/react-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

function PerformanceEditors() {
  const users = [
    {
      id: 1,
      name: "Maria Santos",
      initial: "M",
      status: "Ativo",
      articles: 12,
      totalViews: 8420,
      averagePerArticle: 702,
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "João Silva",
      initial: "J",
      status: "Ativo",
      articles: 8,
      totalViews: 6180,
      averagePerArticle: 773,
      color: "bg-green-500"
    },
    {
      id: 3,
      name: "Ana Costa",
      initial: "A",
      status: "Inativo",
      articles: 5,
      totalViews: 3240,
      averagePerArticle: 648,
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="mt-5">
      <Tabs.Content value="Dashboard">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              🧑🏻‍💻 Performance dos Editores
            </CardTitle>
            <CardDescription className="text-base font-serif text-zinc-500">
              Estatísticas de produtividade dos editores este mês
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {users.map((user) => (
                <div key={user.id} className="border rounded-lg p-4">
                  {/* Cabeçalho com inicial e status */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${user.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                      {user.initial}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{user.name}</h3>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        user.status === "Ativo"
                          ? "bg-blue-600 text-white font-semibold"
                          : "bg-zinc-200 text-black font-semibold"
                      }`}>
                        {user.status}
                      </span>
                    </div>
                  </div>

                  {/* Divisor */}
                  <div className="border-t my-3"></div>

                  {/* Estatísticas */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Artigos:</span>
                      <span className="font-bold text-lg">{user.articles}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Views:</span>
                      <span className="font-bold text-lg">{user.totalViews.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Média/Artigo:</span>
                      <span className="font-bold text-lg">{user.averagePerArticle}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Tabs.Content>
    </div>
  );
}

export default PerformanceEditors;