"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Brand } from "@/types" // Importa o nosso tipo central

// --- INTERFACE DAS PROPRIEDADES CORRIGIDA ---
interface EditBrandDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  brand: Brand | null // Aceita Brand ou null
  onUpdate: (brand: Brand) => void
}

// --- TIPO PARA O ESTADO DO FORMULÁRIO ---
// Descreve o formato dos dados COMO ELES SÃO no formulário
type BrandFormData = {
  name: string;
  category: string;
  website: string;
  observations: string; // No formulário, é um texto único
  status: string;
  suggestedInfluencers: string; // No formulário, é um texto com nomes separados por vírgula
}

export function EditBrandDialog({ open, onOpenChange, brand, onUpdate }: EditBrandDialogProps) {
  const [formData, setFormData] = useState<BrandFormData>({
    name: "",
    category: "",
    website: "",
    observations: "",
    status: "",
    suggestedInfluencers: ""
  })

  // Popula o formulário quando um 'brand' é selecionado
  useEffect(() => {
    if (brand) {
      setFormData({
        name: brand.name || "",
        category: brand.category || "",
        website: brand.website || "",
        observations: brand.observations?.[0]?.text || "", // Pega o texto da primeira observação
        status: brand.status || "",
        suggestedInfluencers: brand.suggestedInfluencers?.map(inf => inf.name).join(", ") || "" // Junta os nomes com vírgula
      })
    }
  }, [brand])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!brand) return
    
    // Converte os dados do formulário de volta para o formato Brand
    const updatedBrand: Brand = {
      ...brand,
      name: formData.name,
      category: formData.category,
      website: formData.website,
      status: formData.status,
      // Garante que o array de observações seja atualizado corretamente
      observations: [
        { 
          ...(brand.observations?.[0] || { id: 1, author: 'Usuário Atual', date: new Date().toISOString() }),
          text: formData.observations,
        }
      ],
      // Converte o texto de volta para um array de objetos Influencer
      suggestedInfluencers: formData.suggestedInfluencers
        .split(",")
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .map(name => ({ name, phone: '', instagram: '' }))
    }
    
    onUpdate(updatedBrand)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Editar Marca</DialogTitle>
          <DialogDescription>
            Atualize as informações da marca.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome da Marca *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Categoria *</Label>
            <Select required value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="Marca">Marca</SelectItem>
                  <SelectItem value="Bet">Casa de Apostas</SelectItem>
                  <SelectItem value="Agência">Agência</SelectItem>
                  <SelectItem value="Influenciador">Influenciador</SelectItem>
                  <SelectItem value="Pessoa Influente">Pessoa Influente</SelectItem>
                  <SelectItem value="Freelancer">Freelancer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({...formData, website: e.target.value})}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Prospecto">Prospecto</SelectItem>
                <SelectItem value="Ativo">Ativo</SelectItem>
                <SelectItem value="Inativo">Inativo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="suggestedInfluencers">Influenciadores Sugeridos</Label>
            <Input
              id="suggestedInfluencers"
              value={formData.suggestedInfluencers}
              onChange={(e) => setFormData({...formData, suggestedInfluencers: e.target.value})}
              placeholder="Separe os nomes por vírgula"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="observations">Observações</Label>
            <Textarea
              id="observations"
              value={formData.observations}
              onChange={(e) => setFormData({...formData, observations: e.target.value})}
              rows={3}
            />
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit">Salvar Alterações</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}