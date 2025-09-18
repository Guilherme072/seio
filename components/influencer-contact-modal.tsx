"use client"

import { X, MessageCircle, Instagram, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface InfluencerContactModalProps {
  influencer: {
    name: string
    phone: string
    instagram: string
  } | null
  open: boolean
  onClose: () => void
}

export function InfluencerContactModal({ influencer, open, onClose }: InfluencerContactModalProps) {
  if (!open || !influencer) return null

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }

  const openWhatsApp = () => {
    const phoneNumber = influencer.phone.replace(/\D/g, '')
    const message = encodeURIComponent(`Olá ${influencer.name}! Tudo bem? Sou da equipe de mailing e gostaria de conversar sobre uma possível parceria.`)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const openInstagram = () => {
    window.open(`https://instagram.com/${influencer.instagram.replace('@', '')}`, '_blank')
  }

  const callPhone = () => {
    window.open(`tel:${influencer.phone}`, '_blank')
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Contato do Influenciador</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-purple-100 text-purple-600 font-medium">
                {getInitials(influencer.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{influencer.name}</h3>
              <p className="text-sm text-gray-600">Influenciador</p>
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={openWhatsApp}
              className="w-full flex items-center gap-2 bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="h-4 w-4" />
              Abrir WhatsApp
            </Button>

            <Button 
              onClick={openInstagram}
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <Instagram className="h-4 w-4" />
              Ver Instagram
            </Button>

            <Button 
              onClick={callPhone}
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Ligar: {influencer.phone}
            </Button>
          </div>

          <div className="text-xs text-gray-500 text-center">
            Clique em WhatsApp para enviar uma mensagem direta
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
