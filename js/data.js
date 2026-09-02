// Base de dados aprimorada com estrutura idêntica ao portal Globo.com

const PORTAL_DATA = {
  ticker: [
    "ÚLTIMA HORA: Mercado financeiro opera em alta com avanço de novas tecnologias",
    "FUTEBOL: Seleção Brasileira faz convocação para amistosos internacionais",
    "ENTRETENIMENTO: Grande final do reality abre votação recorde no gshow",
    "TECNOLOGIA: Nova atualização traz recursos revolucionários para smartphones",
    "CLIMA: Frente fria avança pelo Sul e Sudeste neste fim de semana"
  ],
  weather: {
    city: "São Paulo",
    temp: "24°C",
    condition: "Ensolarado",
    icon: "☀️"
  },
  finance: [
    { symbol: "IBOV", value: "128.450 pts", change: "+1.15%", positive: true },
    { symbol: "DÓLAR", value: "R$ 5,42", change: "-0.45%", positive: false },
    { symbol: "EURO", value: "R$ 5,88", change: "-0.20%", positive: false }
  ],
  heroGrid: {
    g1Main: {
      id: "hero-g1",
      brand: "g1",
      kicker: "ECONOMIA & TECNOLOGIA",
      title: "Reforma Histórica: Congresso aprova nova medida de incentivo à tecnologia e inovação",
      summary: "Texto segue para sanção presidencial e prevê investimentos bilionários em infraestrutura digital nos próximos 5 anos.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Entenda ponto a ponto o que muda para impostos de empresas de TI",
        "Ministério projeta criação de 200 mil novos postos de trabalho",
        "Confira a lista de startups beneficiadas pelo novo programa"
      ],
      time: "Há 12 minutos",
      comments: 342
    },
    geMain: {
      id: "hero-ge",
      brand: "ge",
      kicker: "LIBERTADORES",
      title: "Decisão Continental: Análise tática revela os segredos dos duelos das quartas de final",
      summary: "Equipes brasileiras chegam fortes como favoritas ao título após maratona de treinos intensos.",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "Escalação provável: Tite esboça time com novidade no meio-campo",
        "Maracanã terá esquema especial de trânsito e segurança para o jogo"
      ],
      time: "Há 25 minutos"
    },
    gshowMain: {
      id: "hero-gshow",
      brand: "gshow",
      kicker: "BASTIDORES DA TV",
      title: "Revelados os figurinos e surpresas da nova superprodução do horário nobre",
      summary: "Elenco consagrado se reúne nos estúdios para primeiras leituras de texto.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "Veja fotos exclusivas do cenário da nova novela",
        "Protagonista comenta sobre mudança radical de visual para o papel"
      ],
      time: "Há 40 minutos"
    },
    globoplayMain: {
      id: "hero-globoplay",
      brand: "globoplay",
      kicker: "STREAMING EXCLUSIVO",
      title: "Documentário Inédito: Bastidores e depoimentos históricos da música nacional",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      duration: "1h 45min",
      rating: "12 anos",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
  },
  g1News: [
    {
      id: "g1-1",
      kicker: "POLÍTICA MONETÁRIA",
      title: "Banco Central sinaliza novos cortes na taxa básica de juros para o próximo trimestre",
      summary: "Relatório de inflação aponta trajetória favorável da economia e otimismo entre analistas.",
      time: "Há 30 min",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500&q=80",
      bullets: [
        "Analistas revisam projeção do PIB para cima",
        "Mercado financeiro reage com alta nos índices"
      ]
    },
    {
      id: "g1-2",
      kicker: "MERCADO DE TRABALHO",
      title: "Avanço da Inteligência Artificial impulsiona contratações em TI no Brasil",
      summary: "Empresas aceleram busca por profissionais especializados em análise de dados e automação.",
      time: "Há 1 hora",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
      bullets: [
        "Salários de entrada no setor sobem até 35%",
        "Veja cursos gratuitos com inscrições abertas"
      ]
    },
    {
      id: "g1-3",
      kicker: "CIÊNCIA & NATUREZA",
      title: "Expedição no Atlântico Sul descobre novas espécies marinhas em águas profundas",
      summary: "Mapeamento submarino com robôs de alta tecnologia revela ecossistema inédito.",
      time: "Há 2 horas",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
      bullets: [
        "Biólogos destacam importância de preservação da área"
      ]
    },
    {
      id: "g1-4",
      kicker: "EDUCAÇÃO SUPERIOR",
      title: "MEC anuncia investimento para modernização de laboratórios em universidades públicas",
      summary: "Programa nacional destina recursos para compra de equipamentos científcos avançados.",
      time: "Há 3 horas",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80",
      bullets: [
        "Mais de 50 instituições federais serão atendidas"
      ]
    }
  ],
  geSports: {
    matches: [
      { home: "Flamengo", homeScore: 2, away: "Palmeiras", awayScore: 1, status: "78' 2ºT", venue: "Maracanã" },
      { home: "São Paulo", homeScore: 0, away: "Corinthians", awayScore: 0, status: "INTERVALO", venue: "Morumbis" },
      { home: "Grêmio", homeScore: 3, away: "Internacional", awayScore: 2, status: "FIM DE JOGO", venue: "Arena do Grêmio" },
      { home: "Botafogo", homeScore: 1, away: "Fluminense", awayScore: 1, status: "22' 1ºT", venue: "Nilton Santos" }
    ],
    news: [
      {
        id: "ge-1",
        kicker: "INGRESSOS ESGOTADOS",
        title: "Venda para o grande clássico decisivo bate recorde histórico de público no Maracanã",
        summary: "Mais de 65 mil torcedores garantiram presença nas primeiras 3 horas de vendas online.",
        time: "Há 15 min",
        image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=500&q=80",
        bullets: [
          "PM divulga mapa de acessos e interdições ao redor do estádio"
        ]
      },
      {
        id: "ge-2",
        kicker: "FÓRMULA 1",
        title: "GP de São Paulo confirma atrações na fan zone e reformulação do paddock de Interlagos",
        summary: "Expectativa de público supera edições anteriores com ingressos praticamente esgotados.",
        time: "Há 45 min",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=500&q=80",
        bullets: [
          "Pilotos brasileiros participam de evento com fãs na quinta-feira"
        ]
      },
      {
        id: "ge-3",
        kicker: "VÔLEI FEMININO",
        title: "Brasil domina a China no bloqueio e garante vaga nas semifinais do Campeonato Mundial",
        summary: "Com grande atuação coletiva, equipe brasileira venceu por 3 sets a 1.",
        time: "Há 2 horas",
        image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=500&q=80",
        bullets: [
          "Próximo confronto será contra a Seleção Italiana na sexta-feira"
        ]
      }
    ]
  },
  gshowEntertainment: [
    {
      id: "gshow-1",
      kicker: "FESTIVAL AO VIVO",
      title: "Lineup completo: Confira a ordem dos shows e horários dos palcos neste fim de semana",
      summary: "Grandes nomes da música nacional e atrações internacionais animam o evento.",
      time: "Há 20 min",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=500&q=80",
      bullets: [
        "Guia completo de transporte e o que pode levar no festival"
      ]
    },
    {
      id: "gshow-2",
      kicker: "ENTREVISTA",
      title: "Estrela da novela das nove conta detalhes sobre preparação para personagem marcante",
      summary: "Atriz abriu o jogo sobre a repercussão com o público e bastidores das gravações.",
      time: "Há 1 hora",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
      bullets: [
        "Assista ao trecho exclusivo da próxima cena da personagem"
      ]
    },
    {
      id: "gshow-3",
      kicker: "CULINÁRIA & RECEITAS",
      title: "Aprenda a fazer 5 sobremesas fáceis e cremosas para impressionar no almoço de domingo",
      summary: "Chefs renomados compartilham receitas práticas passo a passo com ingredientes simples.",
      time: "Há 3 horas",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80",
      bullets: [
        "Dica do chef: O segredo para a calda perfeita de chocolate"
      ]
    }
  ],
  globoplayMedia: [
    {
      id: "video-1",
      title: "Justiça e Verdade - Nova Temporada",
      type: "Série Dramática",
      duration: "45 min",
      rating: "16",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      id: "video-2",
      title: "O Esporte dos Nossos Sonhos",
      type: "Documentário Esportivo",
      duration: "1h 20min",
      rating: "Livre",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      id: "video-3",
      title: "Humor na TV: Especial Ao Vivo",
      type: "Comédia & Variedades",
      duration: "50 min",
      rating: "12",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
  ],
  presetThemes: [
    {
      name: "Globo Original",
      siteName: "globo.com",
      subBrands: { g1: "g1", ge: "ge", gshow: "gshow", globoplay: "globoplay" },
      colors: {
        primary: "#c4170c",
        g1: "#c4170c",
        ge: "#06aa48",
        gshow: "#ff6b00",
        globoplay: "#00b2ff",
        headerBg: "#ffffff",
        topBarBg: "#c4170c"
      }
    },
    {
      name: "Portal Cyber Tech",
      siteName: "NEXUS NEWS",
      subBrands: { g1: "TechNews", ge: "EsporteX", gshow: "PopZone", globoplay: "StreamX" },
      colors: {
        primary: "#6366f1",
        g1: "#8b5cf6",
        ge: "#10b981",
        gshow: "#ec4899",
        globoplay: "#3b82f6",
        headerBg: "#0f172a",
        topBarBg: "#1e1b4b"
      }
    },
    {
      name: "Portal Elegante Dark",
      siteName: "VERSO PORTAL",
      subBrands: { g1: "Notícias", ge: "Esportes", gshow: "Cultura", globoplay: "Play" },
      colors: {
        primary: "#d97706",
        g1: "#dc2626",
        ge: "#059669",
        gshow: "#ea580c",
        globoplay: "#0284c7",
        headerBg: "#18181b",
        topBarBg: "#09090b"
      }
    },
    {
      name: "Portal Tropical Vivid",
      siteName: "PORTAL BRASIL",
      subBrands: { g1: "Fatos", ge: "Arena", gshow: "Vibe", globoplay: "Cine" },
      colors: {
        primary: "#00875a",
        g1: "#e11d48",
        ge: "#00875a",
        gshow: "#f59e0b",
        globoplay: "#6366f1",
        headerBg: "#f8fafc",
        topBarBg: "#00875a"
      }
    }
  ]
};
