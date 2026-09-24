export const site = {
  name: "RS Soluções Digitais",
  shortName: "RS Soluções",
  slogan: "Estruture sua operação de e-commerce na Shopee",
  url: "https://www.rssolucoesdigitais.com.br",
  phone: "+55 34 3333-2525",
  email: "contato@rssolucoesdigitais.com.br",
  whatsapp: "553433332525",
};

export const whatsappLink = (message = "Olá! Quero estruturar minha operação na Shopee com a RS Soluções Digitais.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const navItems = [
  { label: "Oportunidade", to: "#oportunidade" },
  { label: "O que estruturamos", to: "#estrutura" },
  { label: "Processo", to: "#processo" },
  { label: "Para quem é", to: "#para-quem" },
];

export interface StructureItem {
  title: string;
  description: string;
}

export const structureItems: StructureItem[] = [
  {
    title: "Implantação na Shopee",
    description: "Estruturação da presença da empresa no marketplace.",
  },
  {
    title: "Produtos",
    description: "Organização das informações necessárias para os anúncios.",
  },
  {
    title: "E-commerce",
    description: "Estruturação da operação digital.",
  },
  {
    title: "ERP e Gestão",
    description: "Organização dos processos e ferramentas de gestão.",
  },
  {
    title: "Treinamento e Mentoria",
    description: "Preparação da equipe para acompanhar a operação.",
  },
  {
    title: "Suporte",
    description: "Acompanhamento durante a evolução da operação.",
  },
];

export const processSteps = [
  {
    title: "Análise",
    description: "Entendemos o cenário atual da sua empresa.",
  },
  {
    title: "Planejamento",
    description: "Identificamos o que precisa ser estruturado.",
  },
  {
    title: "Implantação",
    description: "Organizamos os elementos necessários para sua operação.",
  },
  {
    title: "Orientação",
    description: "Preparamos sua equipe para acompanhar os processos.",
  },
  {
    title: "Suporte",
    description: "Auxiliamos sua empresa durante a evolução da operação.",
  },
];

export interface AudienceItem {
  title: string;
  description: string;
}

export const audienceItems: AudienceItem[] = [
  {
    title: "Querem começar na Shopee",
    description: "Mas não sabem por onde começar.",
  },
  {
    title: "Já vendem na Shopee",
    description: "Mas enfrentam dificuldades para organizar a operação.",
  },
  {
    title: "Querem profissionalizar o e-commerce",
    description: "E precisam conectar produtos, processos e gestão.",
  },
  {
    title: "Querem estruturar o crescimento",
    description: "Com uma operação mais organizada e preparada.",
  },
];
