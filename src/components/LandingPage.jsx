
import React from "react";
import { FaWhatsapp, FaChartLine, FaLock, FaUsers, FaRegSmile, FaFileCsv } from "react-icons/fa";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800">
      <header className="flex justify-between items-center px-8 py-4 shadow-md fixed top-0 left-0 w-full bg-white z-50">
        <div className="text-2xl font-bold text-blue-700">LeadTrack</div>
        <nav className="space-x-6">
          <a href="#funcionalidades" className="hover:text-blue-700">Funcionalidades</a>
          <a href="#planos" className="hover:text-blue-700">Planos</a>
          <a href="#contato" className="hover:text-blue-700">Contato</a>
          <a href="#login" className="hover:text-blue-700 font-semibold">Login</a>
        </nav>
      </header>

      <main className="pt-24">
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-20 px-4">
          <h1 className="text-4xl font-bold mb-4">Transforme Seus Leads em Vendas. Pare de Perder Dinheiro.</h1>
          <p className="max-w-2xl mx-auto text-lg mb-8">Sua Equipe de Vendas, Mais Produtiva do que Nunca!</p>
          <motion.button whileHover={{ scale: 1.1 }} className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full shadow-lg mb-4">
            QUERO TESTAR GRÁTIS POR 14 DIAS
          </motion.button>
          <p><a href="#demo" className="underline">Agendar uma demonstração</a></p>
        </section>

        <section className="py-16 px-8 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Chega de Planilhas e Oportunidades Perdidas.</h2>
          <p className="mb-4">Sua operação de vendas se parece com isso?</p>
          <ul className="space-y-2 text-left max-w-2xl mx-auto">
            <li>✅ Leads esquecidos em planilhas que ninguém atualiza?</li>
            <li>✅ Falta de visão clara sobre o desempenho individual e da equipe?</li>
            <li>✅ Comunicação despadronizada que prejudica a imagem da sua marca?</li>
            <li>✅ Vendedores desmotivados sem um senso claro de progresso?</li>
          </ul>
          <p className="mt-6 font-semibold">O LeadTrack organiza o caos para que você possa focar no que importa: Vender.</p>
        </section>

        <section id="funcionalidades" className="bg-gray-50 py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Ferramentas Poderosas para Todos os Níveis da sua Equipe</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center"><FaUsers className="mr-2"/> Para Vendedores</h3>
                <ul className="space-y-4">
                  <li>👥 <b>Gestão de Clientes:</b> visão 360° de cada lead.</li>
                  <li>📊 <b>Painel Pessoal:</b> metas, receita e comparativos.</li>
                  <li>🔔 <b>Alertas Inteligentes:</b> leads sem atualização há +15 dias.</li>
                  <li>🏆 <b>Rankings Motivacionais:</b> veja quem está no topo.</li>
                  <li>💬 <b>WhatsApp Integrado:</b> envie com um clique.</li>
                  <li><FaFileCsv className="inline mr-1"/> <b>Exportar Planilhas:</b> dados em CSV.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center"><FaChartLine className="mr-2"/> Para Administradores</h3>
                <ul className="space-y-4">
                  <li>🌐 <b>Dashboard Completo:</b> visão total do negócio.</li>
                  <li>🔍 <b>Análise Individual:</b> gráficos e lista de leads.</li>
                  <li>⚙️ <b>Gestão de Equipes:</b> grupos, permissões e competições.</li>
                  <li>📋 <b>Templates WhatsApp:</b> padronize comunicações.</li>
                  <li>💡 <b>Leads Abandonados:</b> encontre parados há +30 dias.</li>
                  <li><FaFileCsv className="inline mr-1"/> <b>Exportar Planilhas:</b> relatórios CSV.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-8 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Segurança e Praticidade para Toda a Empresa</h2>
          <ul className="space-y-4">
            <li>🚀 <b>Comece em Minutos:</b> importe leads via CSV e comece já.</li>
            <li>📂 <b>Exporte Facilmente:</b> qualquer lista em CSV.</li>
            <li>🔒 <b>Segurança:</b> acessos separados para vendedores e admins.</li>
          </ul>
        </section>

        <section className="bg-blue-600 text-white text-center py-16 px-4">
          <h2 className="text-3xl font-bold mb-6">Está pronto para dar ao seu time de vendas a ferramenta que eles merecem?</h2>
          <p className="mb-8">Pare de gerenciar, comece a vender. Dê adeus às planilhas e olá para a produtividade e o controle.</p>
          <motion.button whileHover={{ scale: 1.1 }} className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full shadow-lg">
            COMECE A USAR O LEADTRACK HOJE!
          </motion.button>
          <p className="mt-4">Teste grátis por 14 dias. Não é necessário cartão de crédito.</p>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div><div className="text-2xl font-bold text-white mb-4">LeadTrack</div><p>© 2025 LeadTrack. Todos os direitos reservados.</p></div>
          <div><h4 className="font-bold text-white mb-2">Sobre</h4><ul><li>Quem Somos</li><li>Contato</li><li>Agendar Demo</li></ul></div>
          <div><h4 className="font-bold text-white mb-2">Produto</h4><ul><li>Funcionalidades</li><li>Planos</li></ul></div>
          <div><h4 className="font-bold text-white mb-2">Legal</h4><ul><li>Política de Privacidade</li><li>Termos de Serviço</li></ul></div>
        </div>
        <div className="text-center mt-8"><a href="#" className="mx-2">LinkedIn</a><a href="#" className="mx-2">Instagram</a></div>
      </footer>
    </div>
  );
}
