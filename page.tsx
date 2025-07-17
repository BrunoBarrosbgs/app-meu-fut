import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Gamepad2, Landmark, Swords, Ticket, Users, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Users,
    title: "Gestão de Elenco",
    description: "Cadastre jogadores, defina posições, números de camisa e acompanhe estatísticas de forma centralizada.",
  },
  {
    icon: BrainCircuit,
    title: "Análise Tática com IA",
    description: "Receba insights táticos gerados por IA para preparar seu time e surpreender os adversários na prancheta.",
  },
  {
    icon: Swords,
    title: "Criação de Eventos",
    description: "Agende partidas e treinos com facilidade, notifique os jogadores e controle as confirmações de presença.",
  },
  {
    icon: BarChart3,
    title: "Estatísticas Detalhadas",
    description: "Acompanhe o desempenho do time e individual com gráficos de vitórias, derrotas e rankings de artilharia.",
  },
  {
    icon: Gamepad2,
    title: "Minigame de Pênaltis",
    description: "Desafie a si mesmo em um divertido minigame de cobrança de pênaltis e compita pelo topo do ranking.",
  },
  {
    icon: Ticket,
    title: "Apostas e Competição",
    description: "Aumente a emoção dos jogos com um sistema de apostas interno, onde os jogadores podem usar créditos virtuais.",
  },
  {
    icon: Landmark,
    title: "Caixa do Clube",
    description: "Controle as finanças do time, registre depósitos, retiradas e acompanhe o saldo de forma transparente.",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-transparent">
      
      {/* Hero Section */}
      <section className="relative flex w-full flex-col items-center justify-center text-center py-24 md:py-32 px-4 overflow-hidden">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-glow">
          Meu Fut
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
          A plataforma completa para gestão do seu time. Da escalação à análise tática, das finanças à resenha. Eleve o nível do seu futebol.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-bold tracking-wider text-lg">
              <Link href="/login">Acessar o Painel</Link>
            </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
            <h2 className="text-center font-headline text-4xl text-glow">Tudo que seu time precisa</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Ferramentas poderosas e fáceis de usar para organizar, analisar e competir.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-card to-secondary opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 self-start">
                        <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                </CardHeader>
                <CardContent className="relative z-10">
                    <h3 className="font-headline text-xl mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </section>

       {/* Final CTA Section */}
      <section className="w-full text-center py-20 md:py-32 px-4">
        <h2 className="font-headline text-4xl text-glow">Pronto para começar?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Acesse o painel e descubra uma nova forma de jogar e gerenciar.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button asChild size="lg" className="font-bold tracking-wider text-lg">
            <Link href="/login">
              Leve seu time ao próximo nível <ArrowRight className="ml-2"/>
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
       <footer className="w-full text-center p-6 mt-16 text-xs text-muted-foreground border-t border-primary/10">
        <p>&copy; {new Date().getFullYear()} Meu Fut - Produto Bruck Apps. Todos os direitos reservados.</p>
      </footer>
