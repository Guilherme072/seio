"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface EditBrandDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  brand: any
  onUpdate: (brand: any) => void
}

export function EditBrandDialog({ open, onOpenChange, brand, onUpdate }: EditBrandDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    website: "",
    observations: "",
    status: "",
    suggestedInfluencers: ""
  })

  useEffect(() => {
    if (brand) {
      setFormData({
        name: brand.name || "",
        category: brand.category || "",
        website: brand.website || "",
        observations: brand.observations || "",
        status: brand.status || "",
        suggestedInfluencers: brand.suggestedInfluencers?.join(", ") || ""
      })
    }
  }, [brand])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const updatedBrand = {
      ...brand,
      ...formData,
      suggestedInfluencers: formData.suggestedInfluencers
        .split(",")
        .map(s => s.trim())
        .filter(s => s.length > 0)
    }
    
    onUpdate(updatedBrand)
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
            <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Casa de Apostas">Casa de Apostas</SelectItem>
                <SelectItem value="Marca Esportiva">Marca Esportiva</SelectItem>
                <SelectItem value="Agência">Agência</SelectItem>
                <SelectItem value="Tecnologia">Tecnologia</SelectItem>
                <SelectItem value="Alimentação">Alimentação</SelectItem>
                <SelectItem value="Moda">Moda</SelectItem>
                <SelectItem value="Beleza">Beleza</SelectItem>
                <SelectItem value="Financeiro">Financeiro</SelectItem>
                <SelectItem value="Outros">Outros</SelectItem>
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
