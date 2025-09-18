"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AddContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAdd: (contact: any) => void
}

export function AddContactDialog({ open, onOpenChange, onAdd }: AddContactDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    department: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(formData)
    setFormData({
      name: "",
      role: "",
      email: "",
      phone: "",
      department: ""
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Contato</DialogTitle>
          <DialogDescription>
            Preencha as informações do contato da marca.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Ex: João Silva"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="role">Cargo *</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              placeholder="Ex: Gerente de Marketing"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="department">Departamento</Label>
            <Select value={formData.department} onValueChange={(value) => setFormData({...formData, department: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o departamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Influencer Marketing">Influencer Marketing</SelectItem>
                <SelectItem value="Marketing Digital">Marketing Digital</SelectItem>
                <SelectItem value="Atendimento">Atendimento</SelectItem>
                <SelectItem value="Comercial">Comercial</SelectItem>
                <SelectItem value="Criação">Criação</SelectItem>
                <SelectItem value="Planejamento">Planejamento</SelectItem>
                <SelectItem value="Diretoria">Diretoria</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="joao@empresa.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="+55 11 99999-9999"
            />
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit">Adicionar Contato</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
