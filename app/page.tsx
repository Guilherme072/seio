"use client";

import { useState, useEffect } from "react";
import {
  Plus,
  Search,
  Building2,
  HelpCircle,
  Target,
  Briefcase,
  TrendingUp,
  Star,
  UserCheck,
  Palette,
  ChevronRight,
  Sparkles,
  Zap,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { BrandCard } from "@/components/brand-card";
import { AddBrandDialog } from "@/components/add-brand-dialog";
import { BrandDetailsModal } from "@/components/brand-details-modal";
import { Brand } from "@/types";

const mockBrands: Brand[] = [
  {
    id: 1,
    name: "Casas Bahia / Ponto Frio",
    category: "Marca",
    website: "https://casasbahia.com.br",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 1,
        name: "Itana Oliveira",
        role: "Gerente de Marketing",
        email: "itana.oliveira@grupocasasbahia.com.br",
        phone: "+55 11 99999-0001",
        department: "Marketing",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
      {
        id: 2,
        name: "Luiz Moura",
        role: "Coordenador Digital",
        email: "luiz.moura@grupocasasbahia.com.br",
        phone: "+55 11 99999-0002",
        department: "Marketing Digital",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Grupo varejista líder no Brasil. Foco em eletrodomésticos e móveis. Campanhas sazonais importantes.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Itana Oliveira",
    contactMethod: "Email",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 2,
    name: "Opera GX",
    category: "Marca",
    website: "https://operagx.gg",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 3,
        name: "Juliana A.",
        role: "Partnership Manager",
        email: "juliana.a@chocoagency.com",
        phone: "+55 11 99999-0003",
        department: "Partnerships",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Navegador focado em gamers. Público jovem e engajado. Parcerias via Choco Agency.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Juliana A.",
    contactMethod: "Email",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 3,
    name: "Nord VPN",
    category: "Marca",
    website: "https://nordvpn.com",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 4,
        name: "Affiliate Team",
        role: "Affiliate Manager",
        email: "affiliate@nordvpnmedia.com",
        phone: "+1 800 000-0000",
        department: "Affiliates",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "VPN líder mundial. Programa de afiliados ativo. Contato via formulário: https://support.nordvpn.com/Contact-us/",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 4,
    name: "Spotify",
    category: "Marca",
    website: "https://spotify.com",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 5,
        name: "Office Team",
        role: "Partnership Manager",
        email: "office@spotify.com",
        phone: "+1 800 000-0001",
        department: "Partnerships",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Plataforma de streaming musical. Contato em inglês. Foco em criadores de conteúdo musical.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 5,
    name: "KaBum",
    category: "Marca",
    website: "https://kabum.com.br",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 6,
        name: "Influencers Team",
        role: "Influencer Manager",
        email: "influencers@kabum.com.br",
        phone: "+55 11 99999-0006",
        department: "Marketing",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "E-commerce de tecnologia líder no Brasil. Foco em gamers e tech enthusiasts. Programa de influenciadores ativo.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Influencers Team",
    contactMethod: "Email",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 6,
    name: "Ambev",
    category: "Marca",
    website: "https://ambev.com.br",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 7,
        name: "Atendimento",
        role: "Customer Service",
        email: "faleonosco@ambev.com.br",
        phone: "+55 11 99999-0007",
        department: "Atendimento",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Maior cervejaria da América Latina. Marcas: Skol, Brahma, Antarctica, Stella Artois. Campanhas de grande impacto.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 7,
    name: "Burger King",
    category: "Marca",
    website: "https://burgerking.com.br",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 8,
        name: "Atendimento BK",
        role: "Customer Service",
        email: "atendimento@burgerking.com.br",
        phone: "+55 11 3003-5464",
        department: "Atendimento",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Rede de fast food. Campanhas criativas e irreverentes. WhatsApp: (11) 3003-5464",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 8,
    name: "Danone",
    category: "Marca",
    website: "https://danone.com.br",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 9,
        name: "Jessica Batista",
        role: "Marketing Manager",
        email: "jessica.batista@external.danone.com",
        phone: "+55 11 3095-8482",
        department: "Marketing",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
      {
        id: 10,
        name: "Stephanie Pereira",
        role: "Brand Manager",
        email: "stephanie.pereira@external.danone.com",
        phone: "+55 11 99999-0010",
        department: "Marketing",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Multinacional de alimentos. Foco em saúde e nutrição. WhatsApp: (11) 3095-8482",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Jessica Batista",
    contactMethod: "WhatsApp",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 9,
    name: "iFood",
    category: "Marca",
    website: "https://ifood.com.br",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 11,
        name: "Priscilla Bastos",
        role: "Partnership Manager",
        email: "priscilla.bastos@ifood.com.br",
        phone: "+55 11 99999-0011",
        department: "Partnerships",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Líder em delivery no Brasil. Campanhas focadas em food influencers e lifestyle.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Priscilla Bastos",
    contactMethod: "Email",
    relationshipLevel: "Excelente",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 10,
    name: "KTO",
    category: "Bet",
    website: "https://kto.com",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 12,
        name: "João Izzo",
        role: "Partnership Manager",
        email: "joao.izzo@kto.com",
        phone: "+55 11 96693-5252",
        department: "Partnerships",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Casa de apostas esportivas. IMPORTANTE: Sempre promover jogo responsável. Público 18+.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "João Izzo",
    contactMethod: "WhatsApp",
    relationshipLevel: "Excelente",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 11,
    name: "Sportsbet.io",
    category: "Bet",
    website: "https://sportsbet.io",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 13,
        name: "Iza",
        role: "Influencer Manager",
        email: "influencers@sportsbet.io",
        phone: "+55 11 94692-2410",
        department: "Marketing",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Casa de apostas com foco em cripto. Programa de influenciadores ativo. ATENÇÃO: Jogo responsável obrigatório.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Iza",
    contactMethod: "WhatsApp",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 12,
    name: "Stake",
    category: "Bet",
    website: "https://stake.com",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 14,
        name: "Guilherme",
        role: "Partnership Manager",
        email: "guilherme@stake.com",
        phone: "+61 479 086 217",
        department: "Partnerships",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Casa de apostas internacional. Contato também via partners@stake.com. Compliance rigoroso necessário.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Guilherme",
    contactMethod: "WhatsApp",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 13,
    name: "Esportes da Sorte",
    category: "Bet",
    website: "https://esportesdasorte.com",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 15,
        name: "Diego Borges",
        role: "Project Manager",
        email: "projetos@esportesdasorte.com",
        phone: "+55 81 7341-7773",
        department: "Projetos",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Casa de apostas brasileira em crescimento. Foco em esportes nacionais. Campanhas com influenciadores esportivos.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Diego Borges",
    contactMethod: "WhatsApp",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 14,
    name: "Publination",
    category: "Agência",
    website: "https://publination.com.br",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 16,
        name: "Simone Blaz",
        role: "Gerente de Marketing",
        email: "simone@publination.com.br",
        phone: "+55 17 99231-0751",
        department: "Marketing",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
      {
        id: 17,
        name: "Victoria",
        role: "Comercial",
        email: "victoria@publination.com.br",
        phone: "+55 13 99690-1201",
        department: "Comercial",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
      {
        id: 18,
        name: "Giulia Rangel",
        role: "Account Manager",
        email: "giulia.rangel@publination.com.br",
        phone: "+55 11 97376-1590",
        department: "Atendimento",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Agência especializada em influencer marketing. Múltiplos contatos ativos. Atende marcas como Manual e Nestlé.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Simone Blaz",
    contactMethod: "WhatsApp",
    relationshipLevel: "Excelente",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 15,
    name: "Choco Agency",
    category: "Agência",
    website: "https://chocoagency.com",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 19,
        name: "Juliana A.",
        role: "Account Manager",
        email: "juliana.a@chocoagency.com",
        phone: "+55 11 99999-0019",
        department: "Atendimento",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Agência que atende Opera GX. Foco em gaming e tecnologia. Boa para benchmarking no setor tech.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Juliana A.",
    contactMethod: "Email",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 16,
    name: "Jones.ag",
    category: "Agência",
    website: "https://jones.ag",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 20,
        name: "Marina Silva",
        role: "Partnership Manager",
        email: "marina.silva@jones.ag",
        phone: "+55 11 99999-0020",
        department: "Partnerships",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Agência que atende Tinder. Especializada em apps e tecnologia. Instagram: @jonesagencia",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Marina Silva",
    contactMethod: "Email",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 17,
    name: "Allan Jesus",
    category: "Pessoa Influente",
    website: "https://instagram.com/allanjesus",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 21,
        name: "Allan Jesus",
        role: "Consultor",
        email: "contato@allanjesus.com",
        phone: "+55 21 99743-3686",
        department: "Consultoria",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Consultor e pessoa influente no mercado digital. ASJ Consultoria. Networking valioso no setor.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Allan Jesus",
    contactMethod: "WhatsApp",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 18,
    name: "Guilherme Raya",
    category: "Pessoa Influente",
    website: "https://x.com/guilhermeraya",
    logo: "/logo-Netflix.png",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "O Milionário. Influenciador financeiro. DM aberta no X (Twitter). Foco em investimentos e empreendedorismo.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 19,
    name: "Yago - Relam⚡",
    category: "Freelancer",
    website: "https://behance.net/RelampEditor",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 22,
        name: "Yago",
        role: "Editor de Vídeo",
        email: "contato@relampeditor.com",
        phone: "+55 19 98957-3979",
        department: "Edição",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Editor de vídeo especializado. Portfólio no Behance. Valores competitivos e qualidade comprovada.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Yago",
    contactMethod: "WhatsApp",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 20,
    name: "Kaio Caldera",
    category: "Freelancer",
    website: "https://behance.net/bykaiox",
    logo: "/logo-Netflix.png",
    contacts: [
      {
        id: 23,
        name: "Kaio Caldera",
        role: "Designer Gráfico",
        email: "contato@kaiocaldera.com",
        phone: "+55 64 9294-6612",
        department: "Design",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Designer gráfico especializado em redes sociais. Portfólio no Behance: @bykaiox. Estilo moderno e criativo.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Kaio Caldera",
    contactMethod: "WhatsApp",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 21,
    name: "Nike",
    category: "Marca",
    website: "https://nike.com.br",
    logo: "/logo-Netflix.png",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Marca esportiva global. Foco em atletas e lifestyle. Campanhas de alto impacto. Parceria estratégica importante.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 22,
    name: "Netflix",
    category: "Marca",
    website: "https://netflix.com",
    logo: "/logo-Netflix.png",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Plataforma de streaming líder mundial. Campanhas de lançamento de séries e filmes. Alto potencial de parceria.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 23,
    name: "Coca-Cola",
    category: "Marca",
    website: "https://cocacola.com.br",
    logo: "/logo-Netflix.png",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Marca icônica mundial. Campanhas sempre envolvem grandes nomes e eventos. Orçamento alto para ativações.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 24,
    name: "McDonald's",
    category: "Marca",
    website: "https://mcdonalds.com.br",
    logo: "/logo-Netflix.png",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Rede de fast food global. Campanhas criativas e sazonais. Foco em família e jovens. Parceria de alto valor.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 25,
    name: "Samsung",
    category: "Marca",
    website: "https://samsung.com.br",
    logo: "/logo-Netflix.png",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Gigante da tecnologia. Smartphones, TVs, eletrodomésticos. Campanhas de lançamento de produtos. Tech influencers.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 26,
    name: "Blaze",
    category: "Bet",
    website: "https://blaze.com",
    logo: "/logo-Netflix.png",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Casa de apostas com foco em jogos online. ATENÇÃO: Verificar compliance rigoroso. Jogo responsável obrigatório.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
];

const getFaqByCategory = (category: string) => {
  /* ... sua função ... */ return [];
};
const LoadingSkeleton = () => (
  <div className="flex-1 flex items-center justify-center">
    <div className="relative">
      <div className="w-12 h-12 rounded-full border-2 border-transparent border-t-[#8A4BFF] animate-spin"></div>
      <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-transparent border-r-[#DB9EFF] animate-spin animation-delay-150"></div>
    </div>
  </div>
);

export default function MailingControl() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const [brands, setBrands] = useState<Brand[]>(mockBrands);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("todos");

  const handleTabChange = (value: string) => {
    setIsLoading(true);
    setActiveTab(value);
    setTimeout(() => setIsLoading(false), 300);
  };
  const getFilteredBrands = (category = "all") => {
    return brands.filter((b) =>
      b.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  const categories = Array.from(new Set(brands.map((b) => b.category)));
  const statuses = Array.from(new Set(brands.map((b) => b.status)));
  const getBrandsWithoutContacts = (category = "all") =>
    brands.filter(
      (b) =>
        b.contacts.length === 0 &&
        (category === "all" || b.category === category)
    );
  const stats = {
    totalBrands: brands.length,
    byCategory: {
      Marca: brands.filter((b) => b.category === "Marca").length,
      Bet: brands.filter((b) => b.category === "Bet").length,
      Agência: brands.filter((b) => b.category === "Agência").length,
      Influenciador: brands.filter((b) => b.category === "Influenciador")
        .length,
      "Pessoa Influente": brands.filter(
        (b) => b.category === "Pessoa Influente"
      ).length,
      Freelancer: brands.filter((b) => b.category === "Freelancer").length,
    },
  };
  const getCategoryMessage = (category: string) => {
    /* ... sua função ... */ return null;
  };

  const renderTabContent = (category = "all") => {
    const filteredBrands = getFilteredBrands(category);
    return (
      <div className="space-y-16">
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand) => (
              <div key={brand.id}>
                <BrandCard
                  brand={brand}
                  onClick={() => setSelectedBrand(brand)}
                  onUpdate={(updatedBrand) => {
                    setBrands(
                      brands.map((b) =>
                        b.id === updatedBrand.id ? updatedBrand : b
                      )
                    );
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (!hasMounted) {
    return (
      <div className="min-h-screen flex flex-col eclipse-bg eclipse-scroll">
        <div className="max-w-7xl w-full mx-auto p-10 space-y-12 flex flex-col flex-1">
          <div className="flex items-center justify-between">
            <div className="space-y-3">
              <h1 className="text-5xl font-bold">Controle de Mailing</h1>
              <p className="text-xl">Gerencie contatos</p>
            </div>
            <Button className="h-14 px-8" disabled>
              <Plus className="h-6 w-6" /> Novo Contato
            </Button>
          </div>
          <LoadingSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col eclipse-bg eclipse-scroll">
      <div className="max-w-7xl w-full mx-auto p-10 flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <h1 className="text-5xl font-bold">Controle de Mailing</h1>
            <p className="text-xl">
              Gerencie contatos de marcas, agências, influenciadores e
              freelancers
            </p>
          </div>
          <Button
            onClick={() => setShowAddDialog(true)}
            className="eclipse-button-primary h-14 px-8 rounded-xl font-semibold"
          >
            <Plus className="h-6 w-6" /> Novo Contato
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-12">
          {[
            {
              title: "Total",
              value: stats.totalBrands,
              icon: Building2,
              color: "eclipse-text-primary",
            },
            {
              title: "Marcas",
              value: stats.byCategory.Marca,
              icon: Briefcase,
              color: "text-blue-400",
            },
            {
              title: "Bets",
              value: stats.byCategory.Bet,
              icon: TrendingUp,
              color: "text-red-400",
            },
            {
              title: "Agências",
              value: stats.byCategory.Agência,
              icon: Building2,
              color: "text-purple-400",
            },
            {
              title: "Influencers",
              value: stats.byCategory.Influenciador,
              icon: Star,
              color: "text-yellow-400",
            },
            {
              title: "Influentes",
              value: stats.byCategory["Pessoa Influente"],
              icon: UserCheck,
              color: "text-green-400",
            },
            {
              title: "Freelancers",
              value: stats.byCategory.Freelancer,
              icon: Palette,
              color: "text-orange-400",
            },
          ].map((stat, index) => (
            <Card
              key={stat.title}
              className="eclipse-stats-card eclipse-card-hover rounded-xl animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="eclipse-text-secondary text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="mt-12 flex flex-col flex-1"
        >
          <TabsList className="grid w-full grid-cols-7 p-2 eclipse-card rounded-2xl h-16">
            {[
              "Todos",
              "Marcas",
              "Bets",
              "Agências",
              "Influenciadores",
              "Pessoas Influentes",
              "Freelancers",
            ].map((label) => (
              <TabsTrigger
                key={label}
                value={label.toLowerCase().replace(" ", "-")}
                className="eclipse-tab rounded-xl h-12 font-medium"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="todos" className="mt-6 flex-1">
            {renderTabContent("all")}
          </TabsContent>
          <TabsContent value="marcas" className="mt-6 flex-1">
            {renderTabContent("Marca")}
          </TabsContent>
          <TabsContent value="bets" className="mt-6 flex-1">
            {renderTabContent("Bet")}
          </TabsContent>
          <TabsContent value="agencias" className="mt-6 flex-1">
            {renderTabContent("Agência")}
          </TabsContent>
          <TabsContent value="influenciadores" className="mt-6 flex-1">
            {renderTabContent("Influenciador")}
          </TabsContent>
          <TabsContent value="pessoas-influentes" className="mt-6 flex-1">
            {renderTabContent("Pessoa Influente")}
          </TabsContent>
          <TabsContent value="freelancers" className="mt-6 flex-1">
            {renderTabContent("Freelancer")}
          </TabsContent>
        </Tabs>

        <AddBrandDialog
          open={showAddDialog}
          onOpenChange={setShowAddDialog}
          onAdd={(newBrand) => {
            const newId =
              brands.length > 0 ? Math.max(...brands.map((b) => b.id)) + 1 : 1;
            const brandToAdd: Brand = { ...newBrand, id: newId };
            setBrands([...brands, brandToAdd]);
            setShowAddDialog(false);
          }}
        />
        <BrandDetailsModal
          brand={selectedBrand}
          open={!!selectedBrand}
          onClose={() => setSelectedBrand(null)}
          onUpdate={(updatedBrand) => {
            setBrands(
              brands.map((b) => (b.id === updatedBrand.id ? updatedBrand : b))
            );
            setSelectedBrand(updatedBrand);
          }}
        />
      </div>
    </div>
  );
}
