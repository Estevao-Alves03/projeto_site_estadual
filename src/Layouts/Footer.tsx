function Footer() {
    return (
        <div className="bg-gray-100 border border-gray-300 flex flex-col mt-14">
            {/* Conteúdo principal em grid */}
            <div className="grid grid-cols-3 gap-4 py-8 px-7">
                <div>
                    <h1 className="text-slate-950 font-bold text-lg mb-2">A voz do Estado</h1>
                    <p className="text-zinc-500">Mantendo você informado sobre tudo que acontece no nosso estado.</p>
                </div>
                <div>
                    <h1 className="text-slate-950 font-bold text-lg mb-2">Contato</h1>
                    <p className="text-zinc-500">Email: avozdoestado@hotmail.com</p>
                    <p className="text-zinc-500">Telefone: (11) 1234-4321</p>
                </div>
                <div>
                    <h1 className="text-slate-950 font-bold text-lg mb-2">Links Úteis</h1>
                    <div className="flex flex-col">
                        <a href="#" className="text-zinc-500 hover:text-gray-900">Prefeitura</a>
                        <a href="#" className="text-zinc-500 hover:text-gray-900">Câmara Municipal</a>
                        <a href="#" className="text-zinc-500 hover:text-gray-900">Transparência</a>
                        <a href="#" className="text-zinc-500 hover:text-gray-900">Ouvidoria</a>
                    </div>
                </div>
            </div>

            {/* Texto de direitos autorais */}
            <div className="w-full py-4 text-center text-zinc-500 border-t border-gray-200">
                © 2024 A Voz do Estado. Todos os direitos reservados.
            </div>
        </div>
    )
}

export default Footer;