export const site = {
  name: "RF Coworking",
  shortName: "RF",
  tagline: "Coworking executivo no coração de Belém",
  description:
    "Espaços corporativos premium em Belém. Salas privativas, endereço fiscal, open office e salas de reunião executivas para empresas e profissionais exigentes.",
  url: "https://jhcmcoworking.com.br",
  address: {
    street: "Travessa Quintino Bocaiuva, 2301",
    complement: "Ed. Rogelio Fernandez Business Center, Andar 01, Sala 107",
    district: "Cremação",
    city: "Belém",
    state: "PA",
    zip: "66045-315",
    full:
      "Travessa Quintino Bocaiuva, 2301 — Ed. Rogelio Fernandez Business Center, Andar 01, Sala 107, Cremação, Belém/PA, 66045-315",
  },
  whatsapp: {
    raw: "5531985614005",
    display: "(31) 9 8561-4005",
    link: "https://wa.me/5531985614005?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20a%20RF%20Coworking.",
  },
  phone: {
    display: "(31) 3295-0497",
    link: "tel:+553132950497",
  },
  email: "contato@rfcoworking.com.br",
  hours: {
    week: "Segunda a sexta · 08h às 19h",
    weekend: "Acesso 24h para clientes contratados",
  },
  socials: {
    instagram: "https://instagram.com/jhcmcoworking",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=Travessa%20Quintino%20Bocaiuva%2C%202301%20-%20Crema%C3%A7%C3%A3o%2C%20Bel%C3%A9m%20-%20PA%2C%2066045-315&output=embed",
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Sala Privativa", href: "/servicos/sala-privativa" },
  { label: "Endereço Fiscal", href: "/servicos/endereco-fiscal" },
  { label: "Open Office", href: "/servicos/open-office" },
  { label: "Salas de Reunião", href: "/servicos/salas-de-reuniao" },
  { label: "Contato", href: "/#contato" },
];
