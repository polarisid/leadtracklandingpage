import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Gauge,
  Bell,
  Trophy,
  MessageCircle,
  FileDown,
  LayoutDashboard,
  BarChart,
  Briefcase,
  ClipboardList,
  Lightbulb,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  FileUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LandingHeader } from "@/components/landing-header";
import { LandingFooter } from "@/components/landing-footer";
import { FeatureCard } from "@/components/feature-card";

const sellerFeatures = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Gestão de Clientes Simplificada",
    description: "Adicione e gerencie todos os seus leads em um só lugar. Com campos para nome, cidade, produto de interesse e status, você tem uma visão 360° de cada oportunidade.",
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Painel de Desempenho Pessoal",
    description: "Acompanhe suas metas na aba 'Resultados'. Veja sua receita, vendas e taxa de conversão com filtros e comparativos para saber exatamente onde está melhorando.",
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Nunca Mais Perca um Lead",
    description: "Nosso sistema inteligente destaca visualmente os leads que não são atualizados há mais de 15 dias, garantindo que você nunca deixe uma oportunidade esfriar.",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Rankings Motivacionais",
    description: "Veja sua posição no ranking de vendas geral e do seu grupo. Uma dose saudável de competição para inspirar você a alcançar o topo!",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Comunicação Ágil com WhatsApp",
    description: "Envie mensagens para seus clientes com um clique. Use templates pré-aprovados ou escreva na hora, tudo integrado ao WhatsApp.",
  },
];

const adminFeatures = [
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "Dashboard de Admin Completo",
    description: "Tenha uma visão panorâmica do negócio. Acompanhe a performance total da sua equipe com filtros por período e por grupos de vendedores.",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Análise Individual Detalhada",
    description: "Mergulhe no desempenho de cada vendedor. Visualize gráficos, veja a lista completa de leads de cada um e exporte os dados em CSV para análises profundas.",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Gerenciamento de Equipes e Grupos",
    description: "Organize seus vendedores em grupos, segmente a análise de resultados e promova competições internas. Gerencie o acesso dos usuários com total segurança.",
  },
  {
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Central de Templates de Mensagem",
    description: "Crie e gerencie os templates de WhatsApp. Padronize a comunicação e garanta a qualidade do atendimento com mensagens personalizáveis.",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Inteligência de Vendas",
    description: "Identifique rapidamente os 'Leads Abandonados' (parados há mais de 30 dias) em toda a sua operação e tome ações para reengajá-los.",
  },
];

const benefits = [
    {
        icon: <Rocket className="h-8 w-8 text-primary" />,
        title: "Comece em Minutos",
        description: "Importe toda a sua lista de clientes de uma vez via arquivo CSV e comece a usar a plataforma imediatamente.",
    },
    {
        icon: <FileDown className="h-8 w-8 text-primary" />,
        title: "Exporte com Facilidade",
        description: "Precisa de relatórios personalizados? Exporte qualquer lista de dados em formato CSV a qualquer momento.",
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Segurança em Primeiro Lugar",
        description: "Com um sistema de login para vendedores e administradores, cada um tem acesso apenas ao que precisa, garantindo a segurança dos dados.",
    },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
            <div className="absolute inset-0">
                <Image
                    src="https://placehold.co/1200x800.png"
                    alt="Aperto de mãos em reunião de negócios com tablet exibindo o dashboard LeadTrack"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint="business handshake"
                />
                 <div className="absolute inset-0 bg-background/60"></div>
            </div>
            <div className="container relative mx-auto px-4 md:px-6 text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                    Transforme Seus Leads em Vendas. <br className="hidden md:block" /> Pare de Perder Dinheiro.
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl font-headline">
                    Sua Equipe de Vendas, Mais Produtiva do que Nunca!
                </p>
                <p className="mt-4 max-w-2xl mx-auto text-base text-foreground/70 font-body">
                    Cansado de planilhas confusas e de perder o timing certo com seus clientes? O LeadTrack é a plataforma definitiva para organizar, gerenciar e impulsionar suas vendas, dando a você e sua equipe o controle total do funil de vendas.
                </p>
                <div className="mt-10 flex items-center justify-center">
                    <Button size="lg" asChild>
                        <a href="https://wa.me/5598987132829" target="_blank" rel="noopener noreferrer">Agendar uma demonstração</a>
                    </Button>
                </div>
            </div>
        </section>

        {/* Problem / Solution Section */}
        <section id="problem" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                    Chega de Planilhas e Oportunidades Perdidas.
                </h2>
                <p className="mt-4 text-lg text-foreground/80 font-body">
                    Sua operação de vendas se parece com isso?
                </p>
                <div className="mt-12 grid max-w-4xl mx-auto gap-8 md:grid-cols-2">
                    <Card className="text-left">
                        <CardContent className="p-6">
                            <ul className="space-y-4">
                                {["Leads esquecidos em planilhas que ninguém atualiza?", "Falta de visão clara sobre o desempenho individual e da equipe?", "Comunicação despadronizada que prejudica a imagem da sua marca?", "Vendedores desmotivados sem um senso claro de progresso e competição?"].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-destructive/20 text-destructive flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="font-bold text-sm">!</span>
                                        </div>
                                        <span className="font-body text-foreground/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <div className="flex flex-col items-center justify-center text-left bg-primary/5 rounded-lg p-8">
                         <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                         <h3 className="font-headline text-2xl font-bold text-primary text-center">
                            O LeadTrack organiza o caos para que você possa focar no que realmente importa: Vender.
                         </h3>
                    </div>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Ferramentas Poderosas para Todos os Níveis da sua Equipe
              </h2>
            </div>
            <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-12">
              <div>
                <h3 className="font-headline text-2xl font-semibold text-primary">🎯 Para Vendedores Focados em Resultados:</h3>
                <div className="mt-8 space-y-8">
                  {sellerFeatures.map((feature) => (
                    <FeatureCard key={feature.title} {...feature} />
                  ))}
                </div>
                 <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary/80">
                    <FileDown className="h-4 w-4" />
                    <span>Exportar para as Planilhas</span>
                </div>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-semibold text-primary">📈 Para Administradores que Precisam de Controle e Visão:</h3>
                <div className="mt-8 space-y-8">
                  {adminFeatures.map((feature) => (
                    <FeatureCard key={feature.title} {...feature} />
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary/80">
                    <FileDown className="h-4 w-4" />
                    <span>Exportar para as Planilhas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & Trust Section */}
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center">
                     <p className="font-headline text-sm font-semibold uppercase tracking-wider text-primary">Clientes que confiam no LeadTrack</p>
                    <div className="mt-8 flex justify-center items-center gap-8 flex-wrap">
                        {[...Array(4)].map((_, i) => (
                            <Image key={i} src={`https://placehold.co/150x60.png`} width={150} height={60} alt={`Logo Cliente ${i + 1}`} className="opacity-50 hover:opacity-100 transition-opacity" data-ai-hint="company logo"/>
                        ))}
                    </div>
                </div>

                <div className="mt-20 max-w-5xl mx-auto">
                     <h2 className="font-headline text-center text-3xl font-bold tracking-tight sm:text-4xl">
                        Segurança e Praticidade para Toda a Empresa
                    </h2>
                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {benefits.map((benefit) => (
                             <div key={benefit.title} className="flex flex-col items-center text-center">
                                {benefit.icon}
                                <h3 className="mt-4 font-headline text-xl font-semibold">{benefit.title}</h3>
                                <p className="mt-2 text-muted-foreground font-body">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Está pronto para dar ao seu time de vendas a ferramenta que eles merecem?
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80 font-body">
              Pare de gerenciar, comece a vender. Dê adeus às planilhas e olá para a produtividade e o controle.
            </p>
            <div className="mt-10">
              <Button size="lg" className="h-14 px-10 text-lg font-headline" asChild>
                <a href="https://wa.me/5598987132829" target="_blank" rel="noopener noreferrer">Fale com um consultor</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
