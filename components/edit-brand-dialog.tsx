"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Brand } from "@/types" // Importa o tipo Brand

interface EditBrandDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  brand: Brand | null // Usa o tipo Brand
  onUpdate: (brand: Brand) => void // Usa o tipo Brand
}

// Define um tipo para o formulário, baseado no Brand, mas com algumas propriedades como string
type BrandFormData = {
  name: string;
  category: string;
  website: string;
  observationsText: string;
  status: string;
  suggestedInfluencersText: string;
}

export function EditBrandDialog({ open, onOpenChange, brand, onUpdate }: EditBrandDialogProps) {
  const [formData, setFormData] = useState<BrandFormData>({
    name: "",
    category: "",
    website: "",
    observationsText: "",
    status: "",
    suggestedInfluencersText: ""
  })

  useEffect(() => {
    if (brand) {
      setFormData({
        name: brand.name || "",
        category: brand.category || "",
        website: brand.website || "",
        // Pega o texto da primeira observação, se existir
        observationsText: brand.observations?.[0]?.text || "",
        status: brand.status || "",
        suggestedInfluencersText: brand.suggestedInfluencers?.map(inf => inf.name).join(", ") || ""
      })
    }
  }, [brand])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!brand) return
    
    const updatedBrand: Brand = {
      ...brand,
      name: formData.name,
      category: formData.category,
      website: formData.website,
      status: formData.status,
      // Atualiza a primeira observação ou cria uma nova
      observations: [
        { 
          id: brand.observations?.[0]?.id || 1, 
          text: formData.observationsText, 
          author: brand.observations?.[0]?.author || "Usuário Atual", 
          date: brand.observations?.[0]?.date || new Date().toISOString().split("T")[0] 
        }
      ],
      suggestedInfluencers: formData.suggestedInfluencersText
        .split(",")
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .map(name => ({ name, phone: '', instagram: '' })) // Transforma de volta para o formato de objeto
    }
    
    onUpdate(updatedBrand)
    onOpenChange(false) // Fecha o dialog após salvar
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
              value={formData.suggestedInfluencersText}
              onChange={(e) => setFormData({...formData, suggestedInfluencersText: e.target.value})}
              placeholder="Separe os nomes por vírgula"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="observations">Observações</Label>
            <Textarea
              id="observations"
              value={formData.observationsText}
              onChange={(e) => setFormData({...formData, observationsText: e.target.value})}
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