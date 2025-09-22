"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, User, Mail, Phone, Globe, MessageSquare, Plus, UserPlus, Briefcase } from "lucide-react"
import { Brand } from "@/types" // Importa o tipo Brand

interface AddBrandDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAdd: (brand: Omit<Brand, 'id'>) => void // Usa o tipo Brand
}

export function AddBrandDialog({ open, onOpenChange, onAdd }: AddBrandDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    website: "",
    observationsText: "", // Alterado para não conflitar com o array
    contactName: "",
    contactRole: "",
    contactEmail: "",
    contactPhone: "",
    contactDepartment: "",
    addedBy: "Usuário Atual",
    suggestedBy: "",
    status: "Prospecto",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newBrand: Omit<Brand, 'id'> = {
      name: formData.name,
      category: formData.category,
      website: formData.website,
      logo: "/abstract-logo.png",
      contacts: formData.contactName
        ? [
            {
              id: 1,
              name: formData.contactName,
              role: formData.contactRole,
              email: formData.contactEmail,
              phone: formData.contactPhone,
              department: formData.contactDepartment,
              addedBy: formData.addedBy,
              addedDate: new Date().toISOString().split("T")[0],
            },
          ]
        : [],
      suggestedInfluencers: [],
      observations: formData.observationsText
        ? [
            {
              id: 1,
              text: formData.observationsText,
              author: formData.addedBy,
              date: new Date().toISOString().split("T")[0],
            },
          ]
        : [],
      status: formData.status,
      lastContact: null,
      lastContactBy: null,
      lastContactWith: null,
      contactMethod: null,
      relationshipLevel: "Nenhum",
      neverContacted: true,
      addedBy: formData.addedBy,
      suggestedBy: formData.suggestedBy || null,
    }

    onAdd(newBrand)
    onOpenChange(false) // Fecha o dialog após adicionar
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="eclipse-card border-0 max-w-4xl max-h-[90vh] overflow-y-auto eclipse-scroll">
        <DialogHeader className="pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl eclipse-gradient">
              <Plus className="h-6 w-6 eclipse-accent" />
            </div>
            <div>
              <DialogTitle className="eclipse-title text-2xl">Adicionar Novo Contato</DialogTitle>
              <DialogDescription className="eclipse-text-secondary mt-2">
                Preencha as informações básicas e o contato principal para começar o relacionamento
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Informações Básicas */}
          <Card className="eclipse-form-section border-0">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 eclipse-text-primary text-lg">
                <Building2 className="h-5 w-5 eclipse-accent" />
                Informações Básicas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="eclipse-text-secondary font-medium">
                    Nome da Empresa/Pessoa *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Nike Brasil, Casimiro Miguel..."
                    required
                    className="eclipse-input h-12 border-0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="eclipse-text-secondary font-medium">
                    Categoria *
                  </Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                    required
                  >
                    <SelectTrigger className="eclipse-input h-12 border-0">
                      <SelectValue placeholder="Selecione a categoria" />
                    </SelectTrigger>
                    <SelectContent className="eclipse-card border-0">
                      <SelectItem value="Marca">Marca</SelectItem>
                      <SelectItem value="Bet">Casa de Apostas</SelectItem>
                      <SelectItem value="Agência">Agência</SelectItem>
                      <SelectItem value="Influenciador">Influenciador</SelectItem>
                      <SelectItem value="Pessoa Influente">Pessoa Influente</SelectItem>
                      <SelectItem value="Freelancer">Freelancer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="website" className="eclipse-text-secondary font-medium">
                    Website/Rede Social
                  </Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 eclipse-text-muted" />
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="[https://exemplo.com](https://exemplo.com)"
                      className="eclipse-input h-12 pl-10 border-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="suggestedBy" className="eclipse-text-secondary font-medium">
                    Sugerido por
                  </Label>
                  <Input
                    id="suggestedBy"
                    value={formData.suggestedBy}
                    onChange={(e) => setFormData({ ...formData, suggestedBy: e.target.value })}
                    placeholder="Nome de quem sugeriu este contato"
                    className="eclipse-input h-12 border-0"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contato Principal */}
          <Card className="eclipse-form-section border-0">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 eclipse-text-primary text-lg">
                <UserPlus className="h-5 w-5 eclipse-accent" />
                Contato Principal
              </CardTitle>
              <p className="eclipse-text-muted text-sm mt-2">
                Adicione pelo menos um contato para facilitar futuras abordagens
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName" className="eclipse-text-secondary font-medium">
                    Nome do Contato
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 eclipse-text-muted" />
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="Nome da pessoa de contato"
                      className="eclipse-input h-12 pl-10 border-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactRole" className="eclipse-text-secondary font-medium">
                    Cargo/Função
                  </Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 eclipse-text-muted" />
                    <Input
                      id="contactRole"
                      value={formData.contactRole}
                      onChange={(e) => setFormData({ ...formData, contactRole: e.target.value })}
                      placeholder="Ex: Gerente de Marketing"
                      className="eclipse-input h-12 pl-10 border-0"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail" className="eclipse-text-secondary font-medium">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 eclipse-text-muted" />
                    <Input
                      id="contactEmail"
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      placeholder="email@exemplo.com"
                      className="eclipse-input h-12 pl-10 border-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPhone" className="eclipse-text-secondary font-medium">
                    Telefone/WhatsApp
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 eclipse-text-muted" />
                    <Input
                      id="contactPhone"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                      placeholder="+55 11 99999-9999"
                      className="eclipse-input h-12 pl-10 border-0"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactDepartment" className="eclipse-text-secondary font-medium">
                  Departamento
                </Label>
                <Input
                  id="contactDepartment"
                  value={formData.contactDepartment}
                  onChange={(e) => setFormData({ ...formData, contactDepartment: e.target.value })}
                  placeholder="Ex: Marketing, Comercial, Atendimento"
                  className="eclipse-input h-12 border-0"
                />
              </div>
            </CardContent>
          </Card>

          {/* Observações Iniciais */}
          <Card className="eclipse-form-section border-0">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 eclipse-text-primary text-lg">
                <MessageSquare className="h-5 w-5 eclipse-accent" />
                Observações Iniciais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="observations" className="eclipse-text-secondary font-medium">
                  Anotações importantes
                </Label>
                <Textarea
                  id="observations"
                  value={formData.observationsText}
                  onChange={(e) => setFormData({ ...formData, observationsText: e.target.value })}
                  placeholder="Adicione informações importantes sobre este contato, como preferências, histórico, dicas de abordagem, etc."
                  className="eclipse-input min-h-[100px] border-0 resize-none"
                />
              </div>
            </CardContent>
          </Card>

          <DialogFooter className="gap-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="eclipse-button h-12 px-8"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="eclipse-button-primary h-12 px-8"
              disabled={!formData.name || !formData.category}
            >
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Contato
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}