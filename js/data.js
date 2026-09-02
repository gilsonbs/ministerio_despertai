/* ==========================================================================
   MINISTÉRIO DESPERTAR - DEFAULT CONFIGURATION & DATA MANAGEMENT
   ========================================================================== */

const DEFAULT_CONFIG = {
  branding: {
    logoSize: 56,
    navbarBg: '#FFFFFF',
    navLinkColor: '#1B2A41',
    navBtnBg: '#D9A32B',
    navBtnTextColor: '#0C1E3A',
    primaryColor: '#122A4E',
    primaryDarkColor: '#0C1E3A',
    accentColor: '#D9A32B'
  },
  hero: {
    backgroundImage: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1920&q=80',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0',
    eyebrow: 'BEM-VINDO À SUA CASA',
    h1Line1: 'AME A DEUS.',
    h1Line2: 'AME AS PESSOAS.',
    h1Line3: 'FAÇA A DIFERENÇA.',
    description: 'Somos uma igreja que acredita no poder transformador de Jesus Cristo e na diferença que podemos fazer juntos em nossa comunidade.',
    btn1Text: 'Planeje sua Visita',
    btn2Text: 'Assistir Vídeo de Boas-Vindas',
    highlight1Title: 'Adoração',
    highlight1Text: 'Exaltando a Deus juntos',
    highlight2Title: 'Crescimento',
    highlight2Text: 'Crescendo na Fé',
    highlight3Title: 'Serviço',
    highlight3Text: 'Servindo a nossa Comunidade'
  },
  about: {
    image: 'https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?auto=format&fit=crop&w=1000&q=80',
    eyebrow: 'SOBRE NÓS',
    heading: 'Um Lugar Para Pertencer',
    description: 'No Ministério Despertar, você encontrará uma família acolhedora, ensinamentos práticos para a vida e oportunidades reais para crescer em sua fé e fazer a diferença.',
    checklist: [
      'Ensino Bíblico Relevante',
      'Comunidade Acolhedora',
      'Ministérios para Adultos, Jovens e Crianças',
      'Oportunidades para Servir',
      'Adoração Viva e Inspiradora'
    ],
    btnText: 'Conheça Mais Sobre Nós'
  },
  ministries: {
    eyebrow: 'NOSSOS MINISTÉRIOS',
    heading: 'Ministérios para Todas as Fases da Vida',
    items: [
      { id: '1', title: 'Infantil (Kids)', icon: 'fa-child-reaching', text: 'Ambiente divertido, seguro e fundamentado na fé para as crianças.', linkLabel: 'Saiba Mais', linkUrl: '#' },
      { id: '2', title: 'Jovens (Youth)', icon: 'fa-cross', text: 'Ajudando estudantes a se conectarem, crescerem na fé e liderarem.', linkLabel: 'Saiba Mais', linkUrl: '#' },
      { id: '3', title: 'Jovens Adultos', icon: 'fa-users', text: 'Construindo comunidade e fortalecendo a fé juntos.', linkLabel: 'Saiba Mais', linkUrl: '#' },
      { id: '4', title: 'Homens de Valor', icon: 'fa-hand-holding-heart', text: 'Equipando homens para liderarem com fé, sabedoria e integridade.', linkLabel: 'Saiba Mais', linkUrl: '#' },
      { id: '5', title: 'Mulheres de Fé', icon: 'fa-spa', text: 'Incentivando mulheres a crescerem, conectarem-se e florescerem em Cristo.', linkLabel: 'Saiba Mais', linkUrl: '#' },
      { id: '6', title: 'Ação Social', icon: 'fa-globe', text: 'Amando nossos vizinhos e gerando impacto em nossa comunidade.', linkLabel: 'Saiba Mais', linkUrl: '#' }
    ]
  },
  events: {
    eyebrow: 'PRÓXIMOS EVENTOS',
    heading: 'Encontros e Cultos',
    items: [
      { id: '1', month: 'MAI', day: '19', title: 'Culto de Adoração e Celebração', datetime: '19 de Maio de 2024 - 09h00 & 11h00', text: 'Junte-se a nós para um tempo poderoso de adoração e Palavra.', url: '#' },
      { id: '2', month: 'MAI', day: '24', title: 'Noite de Louvor & Conexão Jovem', datetime: '24 de Maio de 2024 - 19h30', text: 'Uma noite de comunhão, louvor e alegria para todos os estudantes.', url: '#' },
      { id: '3', month: 'MAI', day: '30', title: 'Ação Social e Impacto Comunitário', datetime: '30 de Maio de 2024 - 09h00', text: 'Vamos servir nossa cidade juntos e fazer a diferença.', url: '#' }
    ]
  },
  give: {
    eyebrow: 'OFERTA & GENEROSIDADE',
    heading: 'Sua Generosidade Transforma Vidas',
    description: 'Sua contribuição voluntária nos ajuda a continuar nossa missão de alcançar pessoas, formar discípulos e servir nossa comunidade.',
    btnText: 'Contribuir Online (PIX / Cartão)',
    note: 'Muito obrigado por sua fidelidade e amor!'
  },
  stats: {
    items: [
      { icon: 'fa-users', target: 1200, label: 'Pessoas na Comunidade' },
      { icon: 'fa-church', target: 50, label: 'Líderes de Ministério' },
      { icon: 'fa-globe', target: 25, label: 'Parcerias Sociais' },
      { icon: 'fa-heart-pulse', target: 100, label: 'Vidas Impactadas Semanalmente' }
    ]
  },
  testimonials: {
    eyebrow: 'O QUE DIZEM NOSSOS MEMBROS',
    heading: 'Pessoas Reais. Histórias Reais.',
    items: [
      { id: '1', quote: 'O Ministério Despertar se tornou verdadeiramente minha segunda família. O ensino é prático, relevante e transformador.', author: 'Sara Medeiros', location: 'São Paulo, SP', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80' },
      { id: '2', quote: 'Um lugar incrível onde meus filhos amam ir e aprender sobre Jesus em um ambiente divertido e seguro.', author: 'Marcelo Torres', location: 'São Paulo, SP', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
      { id: '3', quote: 'Servir aqui me ajudou a crescer espiritualmente e levar minha fé para o próximo nível no meu dia a dia.', author: 'Emília Rocha', location: 'São Paulo, SP', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80' }
    ]
  },
  ctaBanner: {
    heading: 'Adoraríamos conhecer você!',
    text: 'Junte-se a nós neste domingo e viva essa experiência em um lugar onde você pertence.',
    btnText: 'Planeje sua Visita'
  },
  menu: [
    { label: 'Início', url: '#hero', active: true },
    { label: 'Sobre Nós', url: '#about' },
    { label: 'Ministérios', url: '#ministries' },
    { label: 'Pregações', url: '#sermons' },
    { label: 'Eventos', url: '#events' },
    { label: 'Contribuição', url: '#give' },
    { label: 'Contato', url: '#footer' }
  ]
};
