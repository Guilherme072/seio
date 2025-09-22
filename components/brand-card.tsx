"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Users, Calendar, FileText, Sparkles, MessageCircle, Phone, Mail, User, Video, AlertTriangle } from 'lucide-react'
import Image from "next/image"
import { Brand } from "@/types" // Importa o tipo Brand

interface BrandCardProps {
  brand: Brand
  onClick: () => void
  onUpdate: (brand: Brand) => void
}

export function BrandCard({ brand, onClick }: BrandCardProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Ativo": return "eclipse-badge-success"
      case "Prospecto": return "eclipse-badge"
      case "Inativo": return "eclipse-badge text-gray-400"
      default: return "eclipse-badge"
    }
  }

  const getRelationshipBadge = (level: string) => {
    switch (level) {
      case "Excelente": return "eclipse-badge-success"
      case "Bom": return "eclipse-badge text-blue-400"
      case "Regular": return "eclipse-badge-warning"
      case "Fraco": return "eclipse-badge text-orange-400"
      case "Nenhum": return "eclipse-badge text-gray-400"
      default: return "eclipse-badge text-gray-400"
    }
  }

  const getContactMethodIcon = (method: string | null) => {
    switch (method) {
      case "WhatsApp": return <MessageCircle className="h-4 w-4" />
      case "Telefone": return <Phone className="h-4 w-4" />
      case "Email": return <Mail className="h-4 w-4" />
      case "LinkedIn": return <User className="h-4 w-4" />
      case "Reunião Presencial": return <Video className="h-4 w-4" />
      default: return null
    }
  }

  return (
    <Card className="eclipse-card eclipse-card-hover rounded-2xl cursor-pointer group border-0 overflow-hidden h-full flex flex-col" onClick={onClick}>
      <CardHeader className="pb-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl eclipse-gradient p-0.5 group-hover:eclipse-glow-soft transition-all duration-300">
              <div className="w-full h-full rounded-xl bg-[#100426] flex items-center justify-center overflow-hidden">
                <Image 
                  src={brand.logo || "/placeholder.svg"} 
                  alt={`${brand.name} logo`}
                  width={56}
                  height={56}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="eclipse-text-primary font-bold text-xl group-hover:eclipse-accent transition-colors duration-300 truncate">{brand.name}</h3>
              <p className="eclipse-text-muted text-sm mt-1">{brand.category}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <Badge className={`${getStatusBadge(brand.status)} text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap`}>
              {brand.status}
            </Badge>
            {brand.neverContacted && (
              <Badge className="eclipse-badge-danger text-xs px-3 py-1 rounded-full font-medium eclipse-pulse whitespace-nowrap">
                <AlertTriangle className="h-3 w-3 mr-1" />
                Nunca contatada
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 eclipse-text-secondary">
            <Users className="h-5 w-5 eclipse-accent" />
            <span>{brand.contacts.length} contato{brand.contacts.length !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-3 eclipse-text-secondary">
            <FileText className="h-5 w-5 eclipse-accent" />
            <span>{brand.observations.length} obs.</span>
          </div>
        </div>
        
        <div className="space-y-4 flex-1">
          <div className="flex items-center justify-between">
            <span className="eclipse-text-muted text-sm">Relacionamento:</span>
            <Badge className={`${getRelationshipBadge(brand.relationshipLevel)} text-xs px-3 py-1 rounded-full`}>
              {brand.relationshipLevel}
            </Badge>
          </div>
          
          {!brand.neverContacted && brand.lastContact && (
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm eclipse-text-secondary">
                <Calendar className="h-4 w-4 eclipse-accent" />
                <span>Último contato: {new Date(brand.lastContact).toLocaleDateString('pt-BR')}</span>
              </div>
              
              <div className="flex items-start gap-3 text-xs eclipse-text-muted">
                {getContactMethodIcon(brand.contactMethod)}
                <span className="leading-relaxed">
                  Por <strong>{brand.lastContactBy}</strong>
                  {brand.lastContactWith && ( <> <br /> com <strong>{brand.lastContactWith}</strong> </> )}
                  {brand.contactMethod && ( <> <br /> via <strong>{brand.contactMethod}</strong> </> )}
                </span>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4 pt-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 eclipse-button h-12 rounded-lg font-medium"
            onClick={(e) => {
              e.stopPropagation()
              window.open(brand.website, '_blank')
            }}
          >
            <Globe className="h-4 w-4 mr-2" />
            Site
          </Button>
          <Button size="sm" className="flex-1 eclipse-button-primary h-12 rounded-lg font-medium">
            <Sparkles className="h-4 w-4 mr-2" />
            Ver Detalhes
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}