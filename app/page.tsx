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

const mockBrands = [
<<<<<<< HEAD
  { id: 1, name: "Casas Bahia / Ponto Frio", category: "Marca", website: "https://casasbahia.com.br", logo: "/logo-Netflix.png", contacts: [ { id: 1, name: "Itana Oliveira", role: "Gerente de Marketing", email: "itana.oliveira@grupocasasbahia.com.br", phone: "+55 11 99999-0001", department: "Marketing", addedBy: "Sistema", addedDate: "2025-01-01" }, { id: 2, name: "Luiz Moura", role: "Coordenador Digital", email: "luiz.moura@grupocasasbahia.com.br", phone: "+55 11 99999-0002", department: "Marketing Digital", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Grupo varejista líder no Brasil. Foco em eletrodomésticos e móveis. Campanhas sazonais importantes.", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "Itana Oliveira", contactMethod: "Email", relationshipLevel: "Bom", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 2, name: "Opera GX", category: "Marca", website: "https://operagx.gg", logo: "/logo-Netflix.png", contacts: [ { id: 3, name: "Juliana A.", role: "Partnership Manager", email: "juliana.a@chocoagency.com", phone: "+55 11 99999-0003", department: "Partnerships", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Navegador focado em gamers. Público jovem e engajado. Parcerias via Choco Agency.", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "Juliana A.", contactMethod: "Email", relationshipLevel: "Regular", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 3, name: "Nord VPN", category: "Marca", website: "https://nordvpn.com", logo: "/logo-Netflix.png", contacts: [ { id: 4, name: "Affiliate Team", role: "Affiliate Manager", email: "affiliate@nordvpnmedia.com", phone: "+1 800 000-0000", department: "Affiliates", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "VPN líder mundial. Programa de afiliados ativo. Contato via formulário: https://support.nordvpn.com/Contact-us/", author: "Sistema", date: "2025-01-01" }, ], status: "Prospecto", lastContact: null, lastContactBy: null, lastContactWith: null, contactMethod: null, relationshipLevel: "Nenhum", neverContacted: true, addedBy: "Sistema", suggestedBy: null, },
  { id: 4, name: "Spotify", category: "Marca", website: "https://spotify.com", logo: "/logo-Netflix.png", contacts: [ { id: 5, name: "Office Team", role: "Partnership Manager", email: "office@spotify.com", phone: "+1 800 000-0001", department: "Partnerships", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Plataforma de streaming musical. Contato em inglês. Foco em criadores de conteúdo musical.", author: "Sistema", date: "2025-01-01" }, ], status: "Prospecto", lastContact: null, lastContactBy: null, lastContactWith: null, contactMethod: null, relationshipLevel: "Nenhum", neverContacted: true, addedBy: "Sistema", suggestedBy: null, },
  { id: 5, name: "KaBum", category: "Marca", website: "https://kabum.com.br", logo: "/logo-Netflix.png", contacts: [ { id: 6, name: "Influencers Team", role: "Influencer Manager", email: "influencers@kabum.com.br", phone: "+55 11 99999-0006", department: "Marketing", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "E-commerce de tecnologia líder no Brasil. Foco em gamers e tech enthusiasts. Programa de influenciadores ativo.", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "Influencers Team", contactMethod: "Email", relationshipLevel: "Bom", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 6, name: "Ambev", category: "Marca", website: "https://ambev.com.br", logo: "/logo-Netflix.png", contacts: [ { id: 7, name: "Atendimento", role: "Customer Service", email: "faleonosco@ambev.com.br", phone: "+55 11 99999-0007", department: "Atendimento", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Maior cervejaria da América Latina. Marcas: Skol, Brahma, Antarctica, Stella Artois. Campanhas de grande impacto.", author: "Sistema", date: "2025-01-01" }, ], status: "Prospecto", lastContact: null, lastContactBy: null, lastContactWith: null, contactMethod: null, relationshipLevel: "Nenhum", neverContacted: true, addedBy: "Sistema", suggestedBy: null, },
  { id: 7, name: "Burger King", category: "Marca", website: "https://burgerking.com.br", logo: "/logo-Netflix.png", contacts: [ { id: 8, name: "Atendimento BK", role: "Customer Service", email: "atendimento@burgerking.com.br", phone: "+55 11 3003-5464", department: "Atendimento", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Rede de fast food. Campanhas criativas e irreverentes. WhatsApp: (11) 3003-5464", author: "Sistema", date: "2025-01-01" }, ], status: "Prospecto", lastContact: null, lastContactBy: null, lastContactWith: null, contactMethod: null, relationshipLevel: "Nenhum", neverContacted: true, addedBy: "Sistema", suggestedBy: null, },
  { id: 8, name: "Danone", category: "Marca", website: "https://danone.com.br", logo: "/logo-Netflix.png", contacts: [ { id: 9, name: "Jessica Batista", role: "Marketing Manager", email: "jessica.batista@external.danone.com", phone: "+55 11 3095-8482", department: "Marketing", addedBy: "Sistema", addedDate: "2025-01-01" }, { id: 10, name: "Stephanie Pereira", role: "Brand Manager", email: "stephanie.pereira@external.danone.com", phone: "+55 11 99999-0010", department: "Marketing", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Multinacional de alimentos. Foco em saúde e nutrição. WhatsApp: (11) 3095-8482", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "Jessica Batista", contactMethod: "WhatsApp", relationshipLevel: "Bom", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 9, name: "iFood", category: "Marca", website: "https://ifood.com.br", logo: "/logo-Netflix.png", contacts: [ { id: 11, name: "Priscilla Bastos", role: "Partnership Manager", email: "priscilla.bastos@ifood.com.br", phone: "+55 11 99999-0011", department: "Partnerships", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Líder em delivery no Brasil. Campanhas focadas em food influencers e lifestyle.", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "Priscilla Bastos", contactMethod: "Email", relationshipLevel: "Excelente", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 10, name: "KTO", category: "Bet", website: "https://kto.com", logo: "/logo-Netflix.png", contacts: [ { id: 12, name: "João Izzo", role: "Partnership Manager", email: "joao.izzo@kto.com", phone: "+55 11 96693-5252", department: "Partnerships", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Casa de apostas esportivas. IMPORTANTE: Sempre promover jogo responsável. Público 18+.", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "João Izzo", contactMethod: "WhatsApp", relationshipLevel: "Excelente", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 11, name: "Sportsbet.io", category: "Bet", website: "https://sportsbet.io", logo: "/logo-Netflix.png", contacts: [ { id: 13, name: "Iza", role: "Influencer Manager", email: "influencers@sportsbet.io", phone: "+55 11 94692-2410", department: "Marketing", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Casa de apostas com foco em cripto. Programa de influenciadores ativo. ATENÇÃO: Jogo responsável obrigatório.", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "Iza", contactMethod: "WhatsApp", relationshipLevel: "Bom", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 12, name: "Stake", category: "Bet", website: "https://stake.com", logo: "/logo-Netflix.png", contacts: [ { id: 14, name: "Guilherme", role: "Partnership Manager", email: "guilherme@stake.com", phone: "+61 479 086 217", department: "Partnerships", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Casa de apostas internacional. Contato também via partners@stake.com. Compliance rigoroso necessário.", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "Guilherme", contactMethod: "WhatsApp", relationshipLevel: "Bom", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 13, name: "Esportes da Sorte", category: "Bet", website: "https://esportesdasorte.com", logo: "/logo-Netflix.png", contacts: [ { id: 15, name: "Diego Borges", role: "Project Manager", email: "projetos@esportesdasorte.com", phone: "+55 81 7341-7773", department: "Projetos", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Casa de apostas brasileira em crescimento. Foco em esportes nacionais. Campanhas com influenciadores esportivos.", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "Diego Borges", contactMethod: "WhatsApp", relationshipLevel: "Regular", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 14, name: "Publination", category: "Agência", website: "https://publination.com.br", logo: "/logo-Netflix.png", contacts: [ { id: 16, name: "Simone Blaz", role: "Gerente de Marketing", email: "simone@publination.com.br", phone: "+55 17 99231-0751", department: "Marketing", addedBy: "Sistema", addedDate: "2025-01-01" }, { id: 17, name: "Victoria", role: "Comercial", email: "victoria@publination.com.br", phone: "+55 13 99690-1201", department: "Comercial", addedBy: "Sistema", addedDate: "2025-01-01" }, { id: 18, name: "Giulia Rangel", role: "Account Manager", email: "giulia.rangel@publination.com.br", phone: "+55 11 97376-1590", department: "Atendimento", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Agência especializada em influencer marketing. Múltiplos contatos ativos. Atende marcas como Manual e Nestlé.", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "Simone Blaz", contactMethod: "WhatsApp", relationshipLevel: "Excelente", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 15, name: "Choco Agency", category: "Agência", website: "https://chocoagency.com", logo: "/logo-Netflix.png", contacts: [ { id: 19, name: "Juliana A.", role: "Account Manager", email: "juliana.a@chocoagency.com", phone: "+55 11 99999-0019", department: "Atendimento", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Agência que atende Opera GX. Foco em gaming e tecnologia. Boa para benchmarking no setor tech.", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "Juliana A.", contactMethod: "Email", relationshipLevel: "Regular", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 16, name: "Jones.ag", category: "Agência", website: "https://jones.ag", logo: "/logo-Netflix.png", contacts: [ { id: 20, name: "Marina Silva", role: "Partnership Manager", email: "marina.silva@jones.ag", phone: "+55 11 99999-0020", department: "Partnerships", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Agência que atende Tinder. Especializada em apps e tecnologia. Instagram: @jonesagencia", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "Marina Silva", contactMethod: "Email", relationshipLevel: "Regular", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 17, name: "Allan Jesus", category: "Pessoa Influente", website: "https://instagram.com/allanjesus", logo: "/logo-Netflix.png", contacts: [ { id: 21, name: "Allan Jesus", role: "Consultor", email: "contato@allanjesus.com", phone: "+55 21 99743-3686", department: "Consultoria", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Consultor e pessoa influente no mercado digital. ASJ Consultoria. Networking valioso no setor.", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "Allan Jesus", contactMethod: "WhatsApp", relationshipLevel: "Bom", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 18, name: "Guilherme Raya", category: "Pessoa Influente", website: "https://x.com/guilhermeraya", logo: "/logo-Netflix.png", contacts: [], suggestedInfluencers: [], observations: [ { id: 1, text: "O Milionário. Influenciador financeiro. DM aberta no X (Twitter). Foco em investimentos e empreendedorismo.", author: "Sistema", date: "2025-01-01" }, ], status: "Prospecto", lastContact: null, lastContactBy: null, lastContactWith: null, contactMethod: null, relationshipLevel: "Nenhum", neverContacted: true, addedBy: "Sistema", suggestedBy: null, },
  { id: 19, name: "Yago - Relam⚡", category: "Freelancer", website: "https://behance.net/RelampEditor", logo: "/logo-Netflix.png", contacts: [ { id: 22, name: "Yago", role: "Editor de Vídeo", email: "contato@relampeditor.com", phone: "+55 19 98957-3979", department: "Edição", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Editor de vídeo especializado. Portfólio no Behance. Valores competitivos e qualidade comprovada.", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "Yago", contactMethod: "WhatsApp", relationshipLevel: "Bom", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 20, name: "Kaio Caldera", category: "Freelancer", website: "https://behance.net/bykaiox", logo: "/logo-Netflix.png", contacts: [ { id: 23, name: "Kaio Caldera", role: "Designer Gráfico", email: "contato@kaiocaldera.com", phone: "+55 64 9294-6612", department: "Design", addedBy: "Sistema", addedDate: "2025-01-01" }, ], suggestedInfluencers: [], observations: [ { id: 1, text: "Designer gráfico especializado em redes sociais. Portfólio no Behance: @bykaiox. Estilo moderno e criativo.", author: "Sistema", date: "2025-01-01" }, ], status: "Ativo", lastContact: "2025-01-01", lastContactBy: "Sistema", lastContactWith: "Kaio Caldera", contactMethod: "WhatsApp", relationshipLevel: "Bom", neverContacted: false, addedBy: "Sistema", suggestedBy: null, },
  { id: 21, name: "Nike", category: "Marca", website: "https://nike.com.br", logo: "/logo-Netflix.png", contacts: [], suggestedInfluencers: [], observations: [ { id: 1, text: "Marca esportiva global. Foco em atletas e lifestyle. Campanhas de alto impacto. Parceria estratégica importante.", author: "Sistema", date: "2025-01-01" }, ], status: "Prospecto", lastContact: null, lastContactBy: null, lastContactWith: null, contactMethod: null, relationshipLevel: "Nenhum", neverContacted: true, addedBy: "Sistema", suggestedBy: null, },
  { id: 22, name: "Netflix", category: "Marca", website: "https://netflix.com", logo: "/logo-Netflix.png", contacts: [], suggestedInfluencers: [], observations: [ { id: 1, text: "Plataforma de streaming líder mundial. Campanhas de lançamento de séries e filmes. Alto potencial de parceria.", author: "Sistema", date: "2025-01-01" }, ], status: "Prospecto", lastContact: null, lastContactBy: null, lastContactWith: null, contactMethod: null, relationshipLevel: "Nenhum", neverContacted: true, addedBy: "Sistema", suggestedBy: null, },
  { id: 23, name: "Coca-Cola", category: "Marca", website: "https://cocacola.com.br", logo: "/logo-Netflix.png", contacts: [], suggestedInfluencers: [], observations: [ { id: 1, text: "Marca icônica mundial. Campanhas sempre envolvem grandes nomes e eventos. Orçamento alto para ativações.", author: "Sistema", date: "2025-01-01" }, ], status: "Prospecto", lastContact: null, lastContactBy: null, lastContactWith: null, contactMethod: null, relationshipLevel: "Nenhum", neverContacted: true, addedBy: "Sistema", suggestedBy: null, },
  { id: 24, name: "McDonald's", category: "Marca", website: "https://mcdonalds.com.br", logo: "/logo-Netflix.png", contacts: [], suggestedInfluencers: [], observations: [ { id: 1, text: "Rede de fast food global. Campanhas criativas e sazonais. Foco em família e jovens. Parceria de alto valor.", author: "Sistema", date: "2025-01-01" }, ], status: "Prospecto", lastContact: null, lastContactBy: null, lastContactWith: null, contactMethod: null, relationshipLevel: "Nenhum", neverContacted: true, addedBy: "Sistema", suggestedBy: null, },
  { id: 25, name: "Samsung", category: "Marca", website: "https://samsung.com.br", logo: "/logo-Netflix.png", contacts: [], suggestedInfluencers: [], observations: [ { id: 1, text: "Gigante da tecnologia. Smartphones, TVs, eletrodomésticos. Campanhas de lançamento de produtos. Tech influencers.", author: "Sistema", date: "2025-01-01" }, ], status: "Prospecto", lastContact: null, lastContactBy: null, lastContactWith: null, contactMethod: null, relationshipLevel: "Nenhum", neverContacted: true, addedBy: "Sistema", suggestedBy: null, },
  { id: 26, name: "Blaze", category: "Bet", website: "https://blaze.com", logo: "/logo-Netflix.png", contacts: [], suggestedInfluencers: [], observations: [ { id: 1, text: "Casa de apostas com foco em jogos online. ATENÇÃO: Verificar compliance rigoroso. Jogo responsável obrigatório.", author: "Sistema", date: "2025-01-01" }, ], status: "Prospecto", lastContact: null, lastContactBy: null, lastContactWith: null, contactMethod: null, relationshipLevel: "Nenhum", neverContacted: true, addedBy: "Sistema", suggestedBy: null, },
];

const getFaqByCategory = (category: string) => {
  const baseFaq = [ { question: "Qual o melhor horário para contato?", answer: "• WhatsApp: 9h às 18h (dias úteis)\n• Email: Terça a quinta, 10h às 16h\n• LinkedIn: Qualquer horário, resposta em 24-48h\n• Telefone: 14h às 17h (evitar início da manhã)\n• Evite sextas-feiras após 15h", }, { question: "Como manter o relacionamento?", answer: "• Envie updates mensais sobre performance\n• Compartilhe tendências do mercado\n• Lembre de datas importantes da marca\n• Proponha ideias criativas regularmente\n• Seja proativo em resolver problemas", }, { question: "O que fazer quando não respondem?", answer: "• Aguarde 1 semana antes do follow-up\n• Mude o canal de comunicação (email → WhatsApp)\n• Ofereça algo de valor (relatório, insight)\n• Tente contatar outra pessoa da equipe\n• Use gatilhos de urgência (oportunidade limitada)", }, ]
  const categorySpecific = { Marca: [ { question: "Como abordar marcas grandes?", answer: "• Pesquise campanhas recentes e mencione\n• Apresente cases similares com ROI comprovado\n• Proponha teste pequeno antes de campanha grande\n• Destaque diferencial competitivo\n• Seja persistente mas respeitoso", }, { question: "Onde encontrar contatos de marcas?", answer: "• LinkedIn - Marketing Manager, Brand Manager\n• Site oficial - seção Imprensa ou Contato\n• Eventos de marketing e publicidade\n• Redes sociais corporativas\n• Indicações de outros clientes", }, ], Bet: [ { question: "Cuidados especiais com casas de apostas?", answer: "• SEMPRE incluir aviso de jogo responsável\n• Verificar compliance legal da campanha\n• Público obrigatoriamente 18+\n• Evitar linguagem que incentive vício\n• Documentar todas as aprovações legais", }, { question: "Como abordar o mercado de apostas?", answer: "• Foque em entretenimento, não em ganhos\n• Use influenciadores que já trabalham no setor\n• Destaque aspectos de diversão e socialização\n• Sempre mencione riscos e limites\n• Tenha advogado especializado na equipe", }, ], Agência: [ { question: "Como fazer benchmarking com agências?", answer: "• Analise cases públicos e premiações\n• Participe de eventos do setor\n• Conecte-se com profissionais no LinkedIn\n• Estude metodologias e processos\n• Proponha trocas de conhecimento", }, { question: "Como se relacionar com agências concorrentes?", answer: "• Mantenha relacionamento profissional\n• Compartilhe oportunidades que não servem\n• Participe de grupos e associações\n• Seja transparente sobre especialidades\n• Busque parcerias em projetos grandes", }, ], Influenciador: [ { question: "Como avaliar um influenciador?", answer: "• Analise engajamento real vs seguidores\n• Verifique alinhamento com valores da marca\n• Observe qualidade do conteúdo\n• Cheque histórico de parcerias\n• Teste com campanha pequena primeiro", }, { question: "Como negociar com influenciadores?", answer: "• Seja transparente sobre orçamento\n• Ofereça contrapartidas além do dinheiro\n• Negocie exclusividade quando necessário\n• Defina entregáveis claramente\n• Mantenha relacionamento pós-campanha", }, ], "Pessoa Influente": [ { question: "Como abordar pessoas muito famosas?", answer: "• SEMPRE via assessoria ou empresário\n• Prepare proposta muito bem estruturada\n• Tenha orçamento compatível com o status\n• Seja extremamente profissional\n• Respeite tempos de resposta longos", }, { question: "Cuidados com celebridades?", answer: "• Contratos muito detalhados\n• Cláusulas de imagem e uso\n• Seguro para eventos presenciais\n• Backup plans para imprevistos\n• Equipe jurídica especializada", }, ], Freelancer: [ { question: "Como gerenciar freelancers?", answer: "• Defina briefings muito claros\n• Estabeleça prazos realistas\n• Mantenha comunicação constante\n• Tenha sempre backup de profissionais\n• Pague em dia para manter relacionamento", }, { question: "Como encontrar bons freelancers?", answer: "• Behance e Dribbble para designers\n• LinkedIn para diversos profissionais\n• Indicações de outros clientes\n• Portfólios online e redes sociais\n• Teste com projetos pequenos primeiro", }, ], }
  return [...baseFaq, ...(categorySpecific[category] || [])]
}
=======
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
  const baseFaq = [
    {
      question: "Qual o melhor horário para contato?",
      answer:
        "• WhatsApp: 9h às 18h (dias úteis)\n• Email: Terça a quinta, 10h às 16h\n• LinkedIn: Qualquer horário, resposta em 24-48h\n• Telefone: 14h às 17h (evitar início da manhã)\n• Evite sextas-feiras após 15h",
    },
    {
      question: "Como manter o relacionamento?",
      answer:
        "• Envie updates mensais sobre performance\n• Compartilhe tendências do mercado\n• Lembre de datas importantes da marca\n• Proponha ideias criativas regularmente\n• Seja proativo em resolver problemas",
    },
    {
      question: "O que fazer quando não respondem?",
      answer:
        "• Aguarde 1 semana antes do follow-up\n• Mude o canal de comunicação (email → WhatsApp)\n• Ofereça algo de valor (relatório, insight)\n• Tente contatar outra pessoa da equipe\n• Use gatilhos de urgência (oportunidade limitada)",
    },
  ];
  const categorySpecific = {
    Marca: [
      {
        question: "Como abordar marcas grandes?",
        answer:
          "• Pesquise campanhas recentes e mencione\n• Apresente cases similares com ROI comprovado\n• Proponha teste pequeno antes de campanha grande\n• Destaque diferencial competitivo\n• Seja persistente mas respeitoso",
      },
      {
        question: "Onde encontrar contatos de marcas?",
        answer:
          "• LinkedIn - Marketing Manager, Brand Manager\n• Site oficial - seção Imprensa ou Contato\n• Eventos de marketing e publicidade\n• Redes sociais corporativas\n• Indicações de outros clientes",
      },
    ],
    Bet: [
      {
        question: "Cuidados especiais com casas de apostas?",
        answer:
          "• SEMPRE incluir aviso de jogo responsável\n• Verificar compliance legal da campanha\n• Público obrigatoriamente 18+\n• Evitar linguagem que incentive vício\n• Documentar todas as aprovações legais",
      },
      {
        question: "Como abordar o mercado de apostas?",
        answer:
          "• Foque em entretenimento, não em ganhos\n• Use influenciadores que já trabalham no setor\n• Destaque aspectos de diversão e socialização\n• Sempre mencione riscos e limites\n• Tenha advogado especializado na equipe",
      },
    ],
    Agência: [
      {
        question: "Como fazer benchmarking com agências?",
        answer:
          "• Analise cases públicos e premiações\n• Participe de eventos do setor\n• Conecte-se com profissionais no LinkedIn\n• Estude metodologias e processos\n• Proponha trocas de conhecimento",
      },
      {
        question: "Como se relacionar com agências concorrentes?",
        answer:
          "• Mantenha relacionamento profissional\n• Compartilhe oportunidades que não servem\n• Participe de grupos e associações\n• Seja transparente sobre especialidades\n• Busque parcerias em projetos grandes",
      },
    ],
    Influenciador: [
      {
        question: "Como avaliar um influenciador?",
        answer:
          "• Analise engajamento real vs seguidores\n• Verifique alinhamento com valores da marca\n• Observe qualidade do conteúdo\n• Cheque histórico de parcerias\n• Teste com campanha pequena primeiro",
      },
      {
        question: "Como negociar com influenciadores?",
        answer:
          "• Seja transparente sobre orçamento\n• Ofereça contrapartidas além do dinheiro\n• Negocie exclusividade quando necessário\n• Defina entregáveis claramente\n• Mantenha relacionamento pós-campanha",
      },
    ],
    "Pessoa Influente": [
      {
        question: "Como abordar pessoas muito famosas?",
        answer:
          "• SEMPRE via assessoria ou empresário\n• Prepare proposta muito bem estruturada\n• Tenha orçamento compatível com o status\n• Seja extremamente profissional\n• Respeite tempos de resposta longos",
      },
      {
        question: "Cuidados com celebridades?",
        answer:
          "• Contratos muito detalhados\n• Cláusulas de imagem e uso\n• Seguro para eventos presenciais\n• Backup plans para imprevistos\n• Equipe jurídica especializada",
      },
    ],
    Freelancer: [
      {
        question: "Como gerenciar freelancers?",
        answer:
          "• Defina briefings muito claros\n• Estabeleça prazos realistas\n• Mantenha comunicação constante\n• Tenha sempre backup de profissionais\n• Pague em dia para manter relacionamento",
      },
      {
        question: "Como encontrar bons freelancers?",
        answer:
          "• Behance e Dribbble para designers\n• LinkedIn para diversos profissionais\n• Indicações de outros clientes\n• Portfólios online e redes sociais\n• Teste com projetos pequenos primeiro",
      },
    ],
  };
  return [...baseFaq, ...(categorySpecific[category] || [])];
};
>>>>>>> 059cc5c755d35dd1595127d20c853c4599b384ab

const LoadingSkeleton = () => (
  <div className="flex items-center justify-center py-24">
    <div className="relative">
      <div className="w-12 h-12 rounded-full border-2 border-transparent border-t-[#8A4BFF] animate-spin"></div>
      <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-transparent border-r-[#DB9EFF] animate-spin animation-delay-150"></div>
    </div>
  </div>
);

// ===================================================================================
// COMPONENTE PRINCIPAL DA PÁGINA
// ===================================================================================
export default function MailingControl() {
  // --- CORREÇÃO DEFINITIVA PARA ERRO DE HIDRATAÇÃO ---
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // --- ESTADOS DO COMPONENTE ---
  const [brands, setBrands] = useState(mockBrands);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("todos");

  // --- FUNÇÕES DE LÓGICA ---
<<<<<<< HEAD
  const handleTabChange = (value: string) => { setIsLoading(true); setActiveTab(value); setTimeout(() => setIsLoading(false), 300); };
  
  const getFilteredBrands = (category = "all") => {
    return brands.filter((brand) => {
      const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) || brand.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === "all" || brand.category === categoryFilter;
      const matchesStatus = statusFilter === "all" || brand.status === statusFilter;
      const matchesTabCategory = category === "all" || brand.category === category;
      return matchesSearch && matchesCategory && matchesStatus && matchesTabCategory;
=======
  const handleTabChange = (value: string) => {
    setIsLoading(true);
    setActiveTab(value);
    setTimeout(() => setIsLoading(false), 300);
  };

  const getFilteredBrands = (category = "all") => {
    return brands.filter((brand) => {
      const matchesSearch =
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || brand.category === categoryFilter;
      const matchesStatus =
        statusFilter === "all" || brand.status === statusFilter;
      const matchesTabCategory =
        category === "all" || brand.category === category;
      return (
        matchesSearch && matchesCategory && matchesStatus && matchesTabCategory
      );
>>>>>>> 059cc5c755d35dd1595127d20c853c4599b384ab
    });
  };

  const categories = [...new Set(brands.map((b) => b.category))];
  const statuses = [...new Set(brands.map((b) => b.status))];
<<<<<<< HEAD
  const getBrandsWithoutContacts = (category = "all") => brands.filter((b) => b.contacts.length === 0 && (category === "all" || b.category === category));
  
  const stats = {
    totalBrands: brands.length,
    byCategory: { Marca: brands.filter((b) => b.category === "Marca").length, Bet: brands.filter((b) => b.category === "Bet").length, Agência: brands.filter((b) => b.category === "Agência").length, Influenciador: brands.filter((b) => b.category === "Influenciador").length, "Pessoa Influente": brands.filter((b) => b.category === "Pessoa Influente").length, Freelancer: brands.filter((b) => b.category === "Freelancer").length },
  };
  
  const getCategoryMessage = (category: string) => {
    switch(category){case "Marca":return{title:"💼 Foco em Parcerias Comerciais",message:"Priorize fechar parcerias duradouras. Apresente cases de sucesso e ROI comprovado.",icon:Briefcase};case "Bet":return{title:"⚠️ Jogo Responsável",message:"IMPORTANTE: Sempre promover jogo responsável. Público 18+. Verificar compliance legal.",icon:AlertTriangle};case "Agência":return{title:"📊 Benchmarking Construtivo",message:"Analise estratégias e cases. Oportunidade de aprendizado mútuo e parcerias estratégicas.",icon:TrendingUp};case "Influenciador":return{title:"🌟 Relacionamento Direto",message:"Construa relacionamentos autênticos. Foque no fit com a marca e engajamento real.",icon:Star};case "Pessoa Influente":return{title:"👑 Alto Impacto",message:"Contatos de alto valor. Abordagem mais formal. Geralmente via assessoria ou empresários.",icon:UserCheck};case "Freelancer":return{title:"🎨 Talentos Criativos",message:"Profissionais para demandas específicas. Mantenha portfólio atualizado e prazos claros.",icon:Palette};default:return null}
  };
  
=======
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
    switch (category) {
      case "Marca":
        return {
          title: "💼 Foco em Parcerias Comerciais",
          message:
            "Priorize fechar parcerias duradouras. Apresente cases de sucesso e ROI comprovado.",
          icon: Briefcase,
        };
      case "Bet":
        return {
          title: "⚠️ Jogo Responsável",
          message:
            "IMPORTANTE: Sempre promover jogo responsável. Público 18+. Verificar compliance legal.",
          icon: AlertTriangle,
        };
      case "Agência":
        return {
          title: "📊 Benchmarking Construtivo",
          message:
            "Analise estratégias e cases. Oportunidade de aprendizado mútuo e parcerias estratégicas.",
          icon: TrendingUp,
        };
      case "Influenciador":
        return {
          title: "🌟 Relacionamento Direto",
          message:
            "Construa relacionamentos autênticos. Foque no fit com a marca e engajamento real.",
          icon: Star,
        };
      case "Pessoa Influente":
        return {
          title: "👑 Alto Impacto",
          message:
            "Contatos de alto valor. Abordagem mais formal. Geralmente via assessoria ou empresários.",
          icon: UserCheck,
        };
      case "Freelancer":
        return {
          title: "🎨 Talentos Criativos",
          message:
            "Profissionais para demandas específicas. Mantenha portfólio atualizado e prazos claros.",
          icon: Palette,
        };
      default:
        return null;
    }
  };

>>>>>>> 059cc5c755d35dd1595127d20c853c4599b384ab
  const renderTabContent = (category = "all") => {
    const filteredBrands = getFilteredBrands(category);
    const categoryMessage = getCategoryMessage(category);
    const categoryBrandsWithoutContacts = getBrandsWithoutContacts(category);
    const faqData = getFaqByCategory(category);
<<<<<<< HEAD
    
    return (
        <div className="space-y-16">
            {isLoading ? <LoadingSkeleton/> : (
            <div className={`transition-all duration-500 space-y-16 ${isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                {categoryMessage && <Card className="eclipse-card eclipse-card-hover rounded-2xl border-2"><CardContent className="p-8"><div className="flex items-center gap-6"><div className="p-4 rounded-2xl eclipse-gradient"><categoryMessage.icon className="h-8 w-8 eclipse-text-primary" /></div><div className="flex-1"><h3 className="eclipse-title text-2xl font-bold mb-3 flex items-center gap-4">{categoryMessage.title}<ChevronRight className="h-6 w-6 eclipse-accent eclipse-pulse" /></h3><p className="eclipse-text-secondary text-base leading-relaxed">{categoryMessage.message}</p></div></div></CardContent></Card>}
                <Card className="eclipse-card eclipse-card-hover rounded-2xl"><CardHeader className="pb-6"><CardTitle className="eclipse-title text-2xl flex items-center gap-4"><Search className="h-6 w-6 eclipse-accent" />Filtros e Busca</CardTitle></CardHeader><CardContent className="px-8 pb-8"><div className="flex flex-col md:flex-row gap-6"><div className="flex-1"><div className="relative group"><Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 eclipse-text-muted transition-colors group-focus-within:eclipse-accent" /><Input placeholder="Buscar por nome ou categoria..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-14 h-14 rounded-xl eclipse-input border-0 focus:ring-2 focus:ring-[#8A4BFF]/30 transition-all duration-300 text-base" /></div></div><Select value={categoryFilter} onValueChange={setCategoryFilter}><SelectTrigger className="w-full md:w-56 h-14 rounded-xl eclipse-input border-0 eclipse-text-primary text-base"><SelectValue placeholder="Categoria" /></SelectTrigger><SelectContent className="eclipse-card rounded-xl border-0"><SelectItem value="all">Todas as Categorias</SelectItem>{categories.map((cat) => ( <SelectItem key={cat} value={cat} className="eclipse-text-primary hover:eclipse-gradient">{cat}</SelectItem> ))}</SelectContent></Select><Select value={statusFilter} onValueChange={setStatusFilter}><SelectTrigger className="w-full md:w-56 h-14 rounded-xl eclipse-input border-0 eclipse-text-primary text-base"><SelectValue placeholder="Status" /></SelectTrigger><SelectContent className="eclipse-card rounded-xl border-0"><SelectItem value="all">Todos os Status</SelectItem>{statuses.map((status) => ( <SelectItem key={status} value={status} className="eclipse-text-primary hover:eclipse-gradient">{status}</SelectItem> ))}</SelectContent></Select></div></CardContent></Card>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{filteredBrands.map((brand, index) => ( <div key={brand.id} className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}><BrandCard brand={brand} onClick={() => setSelectedBrand(brand)} onUpdate={(updatedBrand) => { setBrands(brands.map((b) => (b.id === updatedBrand.id ? updatedBrand : b))) }} /></div> ))}</div>
                {filteredBrands.length === 0 && !isLoading && ( <Card className="eclipse-card eclipse-card-hover rounded-2xl"><CardContent className="text-center py-20"><div className="p-6 rounded-2xl eclipse-gradient inline-block mb-8"><Building2 className="h-16 w-16 eclipse-text-primary eclipse-pulse" /></div><h3 className="eclipse-title text-2xl font-bold mb-4">Nenhum resultado encontrado</h3><p className="eclipse-text-secondary mb-8 max-w-md mx-auto text-base leading-relaxed">Tente ajustar os filtros ou adicione um novo contato para começar.</p><Button onClick={() => setShowAddDialog(true)} className="eclipse-button-primary h-14 px-10 rounded-xl font-semibold text-base"><Plus className="h-5 w-5 mr-3" />Adicionar Novo</Button></CardContent></Card> )}
                {categoryBrandsWithoutContacts.length > 0 && ( <Card className="eclipse-card eclipse-card-hover rounded-2xl border-2 border-red-500/20"><CardHeader className="pb-6"><div className="flex items-center gap-6"><div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20"><Target className="h-8 w-8 text-red-400 eclipse-pulse" /></div><div><CardTitle className="eclipse-title text-2xl flex items-center gap-4">Parcerias a Serem Buscadas<Badge className="eclipse-badge-danger text-sm px-4 py-2 rounded-full">{categoryBrandsWithoutContacts.length}</Badge></CardTitle><CardDescription className="eclipse-text-secondary mt-2 text-base">{category === "all" ? "Contatos que ainda não possuem informações cadastradas e precisam de prospecção" : `${category}s que precisam de prospecção e desenvolvimento de relacionamento`}</CardDescription></div></div></CardHeader><CardContent className="px-8 pb-8"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{categoryBrandsWithoutContacts.map((brand, index) => ( <Card key={brand.id} className="eclipse-card eclipse-card-hover rounded-xl border border-red-500/20 animate-in fade-in slide-in-from-left-4 h-full" style={{ animationDelay: `${index * 150}ms` }}><CardContent className="p-6 h-full flex flex-col"><div className="flex items-center gap-4 mb-6"><div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center"><AlertTriangle className="h-7 w-7 text-red-400" /></div><div><h3 className="eclipse-text-primary font-semibold text-lg">{brand.name}</h3><p className="eclipse-text-muted text-sm">{brand.category}</p></div></div><div className="space-y-4 text-sm flex-1"><div className="flex justify-between items-center"><span className="eclipse-text-muted">Adicionado por:</span><span className="eclipse-text-secondary font-medium">{brand.addedBy}</span></div>{brand.suggestedBy && ( <div className="flex justify-between items-center"><span className="eclipse-text-muted">Sugerido por:</span><span className="eclipse-accent font-medium">{brand.suggestedBy}</span></div> )}<div className="flex justify-between items-center"><span className="eclipse-text-muted">Influenciadores:</span><Badge className="eclipse-badge text-xs px-3 py-1 rounded-full">{brand.suggestedInfluencers.length}</Badge></div></div><Button size="sm" className="w-full mt-6 eclipse-button h-12 rounded-lg font-medium" onClick={() => setSelectedBrand(brand)}><Sparkles className="h-4 w-4 mr-2" />Ver Detalhes</Button></CardContent></Card> ))}</div></CardContent></Card> )}
                <Card className="eclipse-card eclipse-card-hover rounded-2xl"><CardHeader className="pb-6"><div className="flex items-center gap-6"><div className="p-4 rounded-2xl eclipse-gradient"><HelpCircle className="h-8 w-8 eclipse-text-primary eclipse-pulse" /></div><div><CardTitle className="eclipse-title text-2xl flex items-center gap-4">Dúvidas Frequentes e Dicas{category !== "all" && ( <Badge className="eclipse-badge text-sm px-4 py-2 rounded-full">{category}</Badge> )}</CardTitle><CardDescription className="eclipse-text-secondary mt-2 text-base">{category === "all" ? "Guia prático para melhorar suas abordagens e relacionamentos" : `Dicas específicas para trabalhar com ${category.toLowerCase()}s`}</CardDescription></div></div></CardHeader><CardContent className="space-y-6 px-8 pb-8">{faqData.map((faq, index) => ( <Collapsible key={index}><CollapsibleTrigger asChild><Button variant="ghost" className="w-full justify-between p-6 h-auto eclipse-card eclipse-card-hover rounded-xl border-0"><span className="eclipse-text-primary font-medium text-left flex items-center gap-4 text-base"><Zap className="h-5 w-5 eclipse-accent" />{faq.question}</span>
                {/* O ERRO DE DIGITAÇÃO ESTAVA AQUI, AGORA CORRIGIDO */}
                <ChevronDown className="h-5 w-5 eclipse-accent transition-transform duration-200" /></Button></CollapsibleTrigger><CollapsibleContent className="px-6 pb-6 animate-in slide-in-from-top-2"><div className="eclipse-text-secondary text-sm whitespace-pre-line eclipse-gradient p-6 rounded-xl border border-[#8A4BFF]/20 leading-relaxed mt-4">{faq.answer}</div></CollapsibleContent></Collapsible> ))}</CardContent></Card>
            </div>
=======

    return (
      <div className="space-y-16">
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div
            className={`transition-all duration-500 space-y-16 ${
              isLoading
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            {categoryMessage && (
              <Card className="eclipse-card eclipse-card-hover rounded-2xl border-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className="p-4 rounded-2xl eclipse-gradient">
                      <categoryMessage.icon className="h-8 w-8 eclipse-text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="eclipse-title text-2xl font-bold mb-3 flex items-center gap-4">
                        {categoryMessage.title}
                        <ChevronRight className="h-6 w-6 eclipse-accent eclipse-pulse" />
                      </h3>
                      <p className="eclipse-text-secondary text-base leading-relaxed">
                        {categoryMessage.message}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            <Card className="eclipse-card eclipse-card-hover rounded-2xl">
              <CardHeader className="pb-6">
                <CardTitle className="eclipse-title text-2xl flex items-center gap-4">
                  <Search className="h-6 w-6 eclipse-accent" />
                  Filtros e Busca
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="relative group">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 eclipse-text-muted transition-colors group-focus-within:eclipse-accent" />
                      <Input
                        placeholder="Buscar por nome ou categoria..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-14 h-14 rounded-xl eclipse-input border-0 focus:ring-2 focus:ring-[#8A4BFF]/30 transition-all duration-300 text-base"
                      />
                    </div>
                  </div>
                  <Select
                    value={categoryFilter}
                    onValueChange={setCategoryFilter}
                  >
                    <SelectTrigger className="w-full md:w-56 h-14 rounded-xl eclipse-input border-0 eclipse-text-primary text-base">
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent className="eclipse-card rounded-xl border-0">
                      <SelectItem value="all">Todas as Categorias</SelectItem>
                      {categories.map((cat) => (
                        <SelectItem
                          key={cat}
                          value={cat}
                          className="eclipse-text-primary hover:eclipse-gradient"
                        >
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full md:w-56 h-14 rounded-xl eclipse-input border-0 eclipse-text-primary text-base">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="eclipse-card rounded-xl border-0">
                      <SelectItem value="all">Todos os Status</SelectItem>
                      {statuses.map((status) => (
                        <SelectItem
                          key={status}
                          value={status}
                          className="eclipse-text-primary hover:eclipse-gradient"
                        >
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBrands.map((brand, index) => (
                <div
                  key={brand.id}
                  className="animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
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
            {filteredBrands.length === 0 && !isLoading && (
              <Card className="eclipse-card eclipse-card-hover rounded-2xl">
                <CardContent className="text-center py-20">
                  <div className="p-6 rounded-2xl eclipse-gradient inline-block mb-8">
                    <Building2 className="h-16 w-16 eclipse-text-primary eclipse-pulse" />
                  </div>
                  <h3 className="eclipse-title text-2xl font-bold mb-4">
                    Nenhum resultado encontrado
                  </h3>
                  <p className="eclipse-text-secondary mb-8 max-w-md mx-auto text-base leading-relaxed">
                    Tente ajustar os filtros ou adicione um novo contato para
                    começar.
                  </p>
                  <Button
                    onClick={() => setShowAddDialog(true)}
                    className="eclipse-button-primary h-14 px-10 rounded-xl font-semibold text-base"
                  >
                    <Plus className="h-5 w-5 mr-3" />
                    Adicionar Novo
                  </Button>
                </CardContent>
              </Card>
            )}
            {categoryBrandsWithoutContacts.length > 0 && (
              <Card className="eclipse-card eclipse-card-hover rounded-2xl border-2 border-red-500/20">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
                      <Target className="h-8 w-8 text-red-400 eclipse-pulse" />
                    </div>
                    <div>
                      <CardTitle className="eclipse-title text-2xl flex items-center gap-4">
                        Parcerias a Serem Buscadas
                        <Badge className="eclipse-badge-danger text-sm px-4 py-2 rounded-full">
                          {categoryBrandsWithoutContacts.length}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="eclipse-text-secondary mt-2 text-base">
                        {category === "all"
                          ? "Contatos que ainda não possuem informações cadastradas e precisam de prospecção"
                          : `${category}s que precisam de prospecção e desenvolvimento de relacionamento`}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryBrandsWithoutContacts.map((brand, index) => (
                      <Card
                        key={brand.id}
                        className="eclipse-card eclipse-card-hover rounded-xl border border-red-500/20 animate-in fade-in slide-in-from-left-4 h-full"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <CardContent className="p-6 h-full flex flex-col">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                              <AlertTriangle className="h-7 w-7 text-red-400" />
                            </div>
                            <div>
                              <h3 className="eclipse-text-primary font-semibold text-lg">
                                {brand.name}
                              </h3>
                              <p className="eclipse-text-muted text-sm">
                                {brand.category}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-4 text-sm flex-1">
                            <div className="flex justify-between items-center">
                              <span className="eclipse-text-muted">
                                Adicionado por:
                              </span>
                              <span className="eclipse-text-secondary font-medium">
                                {brand.addedBy}
                              </span>
                            </div>
                            {brand.suggestedBy && (
                              <div className="flex justify-between items-center">
                                <span className="eclipse-text-muted">
                                  Sugerido por:
                                </span>
                                <span className="eclipse-accent font-medium">
                                  {brand.suggestedBy}
                                </span>
                              </div>
                            )}
                            <div className="flex justify-between items-center">
                              <span className="eclipse-text-muted">
                                Influenciadores:
                              </span>
                              <Badge className="eclipse-badge text-xs px-3 py-1 rounded-full">
                                {brand.suggestedInfluencers.length}
                              </Badge>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            className="w-full mt-6 eclipse-button h-12 rounded-lg font-medium"
                            onClick={() => setSelectedBrand(brand)}
                          >
                            <Sparkles className="h-4 w-4 mr-2" />
                            Ver Detalhes
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            <Card className="eclipse-card eclipse-card-hover rounded-2xl">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-2xl eclipse-gradient">
                    <HelpCircle className="h-8 w-8 eclipse-text-primary eclipse-pulse" />
                  </div>
                  <div>
                    <CardTitle className="eclipse-title text-2xl flex items-center gap-4">
                      Dúvidas Frequentes e Dicas
                      {category !== "all" && (
                        <Badge className="eclipse-badge text-sm px-4 py-2 rounded-full">
                          {category}
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="eclipse-text-secondary mt-2 text-base">
                      {category === "all"
                        ? "Guia prático para melhorar suas abordagens e relacionamentos"
                        : `Dicas específicas para trabalhar com ${category.toLowerCase()}s`}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 px-8 pb-8">
                {faqData.map((faq, index) => (
                  <Collapsible key={index}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-between p-6 h-auto eclipse-card eclipse-card-hover rounded-xl border-0"
                      >
                        <span className="eclipse-text-primary font-medium text-left flex items-center gap-4 text-base">
                          <Zap className="h-5 w-5 eclipse-accent" />
                          {faq.question}
                        </span>
                        <ChevronDown className="h-5 w-5 eclipse-accent transition-transform duration-200" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-6 pb-6 animate-in slide-in-from-top-2">
                      <div className="eclipse-text-secondary text-sm whitespace-pre-line eclipse-gradient p-6 rounded-xl border border-[#8A4BFF]/20 leading-relaxed mt-4">
                        {faq.answer}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </CardContent>
            </Card>
          </div>
>>>>>>> 059cc5c755d35dd1595127d20c853c4599b384ab
        )}
      </div>
    );
  };

  if (!hasMounted) {
    return (
      <div className="min-h-screen felx flex-col eclipse-bg eclipse-scroll">
        <div className="max-w-7xl w-full mx-auto p-10 space-y-12 flex flex-col flex-1">
          <div className="flex items-center justify-between">
            <div className="space-y-3">
              <h1 className="eclipse-title text-5xl font-bold">
                Controle de Mailing
              </h1>
              <p className="eclipse-text-secondary text-xl">
                Gerencie contatos de marcas, agências, influenciadores e
                freelancers
              </p>
            </div>
            <Button
              className="eclipse-button-primary h-14 px-8 rounded-xl font-semibold flex items-center gap-3 text-base"
              disabled
            >
              <Plus className="h-6 w-6" /> Novo Contato
            </Button>
          </div>
          <LoadingSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen eclipse-bg eclipse-scroll">
      <div className="max-w-7xl mx-auto p-10 space-y-12">
        <div className="flex items-center justify-between animate-in fade-in slide-in-from-top-4">
          <div className="space-y-3">
            <h1 className="eclipse-title text-5xl font-bold">
              Controle de Mailing
            </h1>
            <p className="eclipse-text-secondary text-xl">
              Gerencie contatos de marcas, agências, influenciadores e
              freelancers
            </p>
          </div>
          <Button
            onClick={() => setShowAddDialog(true)}
            className="eclipse-button-primary h-14 px-8 rounded-xl font-semibold flex items-center gap-3 text-base"
          >
            <Plus className="h-6 w-6" /> Novo Contato
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
<<<<<<< HEAD
          {[ { title: "Total", value: stats.totalBrands, icon: Building2, color: "eclipse-text-primary", }, { title: "Marcas", value: stats.byCategory.Marca, icon: Briefcase, color: "text-blue-400", }, { title: "Bets", value: stats.byCategory.Bet, icon: TrendingUp, color: "text-red-400", }, { title: "Agências", value: stats.byCategory.Agência, icon: Building2, color: "text-purple-400", }, { title: "Influencers", value: stats.byCategory.Influenciador, icon: Star, color: "text-yellow-400", }, { title: "Influentes", value: stats.byCategory["Pessoa Influente"], icon: UserCheck, color: "text-green-400", }, { title: "Freelancers", value: stats.byCategory.Freelancer, icon: Palette, color: "text-orange-400", }, ].map((stat, index) => (
=======
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
>>>>>>> 059cc5c755d35dd1595127d20c853c4599b384ab
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
          className="space-y-12"
        >
          <TabsList className="grid w-full grid-cols-7 p-2 eclipse-card rounded-2xl h-16">
<<<<<<< HEAD
            {[ { value: "todos", label: "Todos" }, { value: "marcas", label: "Marcas" }, { value: "bets", label: "Bets" }, { value: "agencias", label: "Agências" }, { value: "influenciadores", label: "Influenciadores" }, { value: "pessoas-influentes", label: "Pessoas Influentes" }, { value: "freelancers", label: "Freelancers" }, ].map((tab) => (
=======
            {[
              { value: "todos", label: "Todos" },
              { value: "marcas", label: "Marcas" },
              { value: "bets", label: "Bets" },
              { value: "agencias", label: "Agências" },
              { value: "influenciadores", label: "Influenciadores" },
              { value: "pessoas-influentes", label: "Pessoas Influentes" },
              { value: "freelancers", label: "Freelancers" },
            ].map((tab) => (
>>>>>>> 059cc5c755d35dd1595127d20c853c4599b384ab
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="eclipse-tab rounded-xl h-12 font-medium transition-all duration-300 text-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="todos">{renderTabContent("all")}</TabsContent>
          <TabsContent value="marcas">{renderTabContent("Marca")}</TabsContent>
          <TabsContent value="bets">{renderTabContent("Bet")}</TabsContent>
          <TabsContent value="agencias">
            {renderTabContent("Agência")}
          </TabsContent>
          <TabsContent value="influenciadores">
            {renderTabContent("Influenciador")}
          </TabsContent>
          <TabsContent value="pessoas-influentes">
            {renderTabContent("Pessoa Influente")}
          </TabsContent>
          <TabsContent value="freelancers">
            {renderTabContent("Freelancer")}
          </TabsContent>
        </Tabs>

        <AddBrandDialog
          open={showAddDialog}
          onOpenChange={setShowAddDialog}
          onAdd={(newBrand) => {
            setBrands([...brands, { ...newBrand, id: brands.length + 1 }]);
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 059cc5c755d35dd1595127d20c853c4599b384ab
