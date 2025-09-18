"use client"

import { useState } from "react"
import {
  X,
  ExternalLink,
  Mail,
  Phone,
  Star,
  Plus,
  MessageCircle,
  User,
  Calendar,
  FileText,
  Edit,
  Trash2,
  Camera,
  CheckCircle,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { InfluencerContactModal } from "./influencer-contact-modal"
import { AddContactDialog } from "./add-contact-dialog"
import Image from "next/image"

interface BrandDetailsModalProps {
  brand: any
  open: boolean
  onClose: () => void
  onUpdate: (brand: any) => void
}

export function BrandDetailsModal({ brand, open, onClose, onUpdate }: BrandDetailsModalProps) {
  const [selectedInfluencer, setSelectedInfluencer] = useState(null)
  const [showAddContact, setShowAddContact] = useState(false)
  const [newObservation, setNewObservation] = useState("")
  const [showObservationForm, setShowObservationForm] = useState(false)
  const [editingContact, setEditingContact] = useState(null)
  const [editingContactData, setEditingContactData] = useState({})
  const [addingContactMethod, setAddingContactMethod] = useState(null)
  const [newContactMethod, setNewContactMethod] = useState({ type: "", value: "" })

  // Ensure we always have arrays to work with
  const safeObservations = Array.isArray(brand?.observations) ? brand.observations : []
  const safeContacts = Array.isArray(brand?.contacts) ? brand.contacts : []
  const safeSuggestedInfluencers = Array.isArray(brand?.suggestedInfluencers) ? brand.suggestedInfluencers : []

  if (!open || !brand) return null

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo":
        return "eclipse-badge-success"
      case "Prospecto":
        return "eclipse-badge"
      case "Inativo":
        return "eclipse-badge text-gray-400"
      default:
        return "eclipse-badge text-gray-400"
    }
  }

  const getRelationshipColor = (level: string) => {
    switch (level) {
      case "Excelente":
        return "eclipse-badge-success"
      case "Bom":
        return "eclipse-badge text-blue-400"
      case "Regular":
        return "eclipse-badge-warning"
      case "Fraco":
        return "eclipse-badge text-orange-400"
      case "Nenhum":
        return "eclipse-badge text-gray-400"
      default:
        return "eclipse-badge text-gray-400"
    }
  }

  const getInitials = (name: string) => {
    if (!name) return "??"
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const formatPhone = (phone: string) => {
    if (!phone) return ""
    return phone.replace(/(\d{5})(\d{4})/, "$1-$2")
  }

  const addObservation = () => {
    if (!newObservation.trim()) return

    const observation = {
      id: safeObservations.length + 1,
      text: newObservation,
      author: "Usuário Atual",
      date: new Date().toISOString().split("T")[0],
    }

    const updatedBrand = {
      ...brand,
      observations: [...safeObservations, observation],
    }

    onUpdate(updatedBrand)
    setNewObservation("")
    setShowObservationForm(false)
  }

  const startEditingContact = (contact: any) => {
    setEditingContact(contact.id)
    setEditingContactData({
      name: contact.name || "",
      role: contact.role || "",
      department: contact.department || "",
      email: contact.email || "",
      phone: contact.phone || "",
    })
  }

  const saveContactEdit = () => {
    const updatedBrand = {
      ...brand,
      contacts: safeContacts.map((contact) =>
        contact.id === editingContact ? { ...contact, ...editingContactData } : contact,
      ),
    }
    onUpdate(updatedBrand)
    setEditingContact(null)
    setEditingContactData({})
  }

  const addContactMethod = (contactId: number) => {
    if (!newContactMethod.type || !newContactMethod.value) return

    const updatedBrand = {
      ...brand,
      contacts: safeContacts.map((contact) =>
        contact.id === contactId
          ? {
              ...contact,
              contactMethods: [
                ...(Array.isArray(contact.contactMethods) ? contact.contactMethods : []),
                newContactMethod,
              ],
            }
          : contact,
      ),
    }
    onUpdate(updatedBrand)
    setAddingContactMethod(null)
    setNewContactMethod({ type: "", value: "" })
  }

  const deleteContact = (contactId: number) => {
    const updatedBrand = {
      ...brand,
      contacts: safeContacts.filter((contact) => contact.id !== contactId),
    }
    onUpdate(updatedBrand)
  }

  // Mock data para demonstração
  const closedDeals = brand.closedDeals || 3
  const previousInfluencers = Array.isArray(brand.previousInfluencers)
    ? brand.previousInfluencers
    : [
        { name: "Casimiro Miguel", phone: "+55 11 99887-7665", instagram: "@casimiro", lastCampaign: "2023-12-15" },
        { name: "Gaules", phone: "+55 11 98765-4321", instagram: "@gaules", lastCampaign: "2023-11-20" },
      ]

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto eclipse-card eclipse-card-hover rounded-3xl border-0 eclipse-cosmic-bg relative">
          <div className="eclipse-star-field"></div>
          <CardContent className="p-0 relative z-10">
            {/* Header */}
            <div className="p-8 pb-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <div className="w-16 h-16 rounded-2xl eclipse-gradient p-1 eclipse-glow-soft">
                      <div className="w-full h-full rounded-2xl bg-[#100426] flex items-center justify-center overflow-hidden">
                        <Image
                          src={brand.logo || "/placeholder.svg?height=60&width=60&text=Logo"}
                          alt={`${brand.name || "Brand"} logo`}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full eclipse-button-primary p-0"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div>
                    <h2 className="eclipse-title text-2xl font-bold">{brand.name || "Nome da Marca"}</h2>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-[#FBF9FF] text-sm">{brand.category || "Categoria"}</span>
                      <Badge
                        className={`text-xs px-3 py-1 rounded-full eclipse-glow-soft ${getStatusColor(brand.status)}`}
                      >
                        {brand.status || "Status"}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose} className="eclipse-button rounded-xl">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="eclipse-card eclipse-card-hover rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#FBF9FF] text-sm">Relacionamento:</span>
                    <Badge
                      className={`text-xs px-3 py-1 rounded-full eclipse-glow-soft ${getRelationshipColor(brand.relationshipLevel)}`}
                    >
                      {brand.relationshipLevel || "Nenhum"}
                    </Badge>
                  </div>
                </div>

                <div className="eclipse-card eclipse-card-hover rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#FBF9FF] text-sm">Negócios Fechados:</span>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 eclipse-accent" />
                      <span className="eclipse-text-secondary font-bold">{closedDeals}</span>
                    </div>
                  </div>
                </div>

                <div className="eclipse-card eclipse-card-hover rounded-2xl p-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => brand.website && window.open(brand.website, "_blank")}
                    className="w-full eclipse-button rounded-xl"
                    disabled={!brand.website}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visitar Site
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#FBF9FF] text-sm">Adicionada por:</span>
                    <span className="eclipse-text-secondary font-medium">{brand.addedBy || "Desconhecido"}</span>
                  </div>

                  {brand.suggestedBy && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#FBF9FF] text-sm">Sugerida por:</span>
                      <span className="eclipse-accent font-medium">{brand.suggestedBy}</span>
                    </div>
                  )}
                </div>

                <div>
                  {!brand.neverContacted && brand.lastContact && (
                    <div className="text-xs text-[#FBF9FF] opacity-70">
                      Último contato: {new Date(brand.lastContact).toLocaleDateString("pt-BR")}
                      <br />
                      Por <strong className="eclipse-text-secondary">{brand.lastContactBy || "Desconhecido"}</strong>{" "}
                      com <strong className="eclipse-text-secondary">{brand.lastContactWith || "Desconhecido"}</strong>
                    </div>
                  )}
                </div>
              </div>

              {brand.neverContacted && (
                <div className="mt-4">
                  <Badge className="eclipse-badge-danger text-xs px-4 py-2 rounded-full eclipse-pulse">
                    ⚠️ Marca nunca foi contatada
                  </Badge>
                </div>
              )}
            </div>

            <div className="eclipse-separator"></div>

            {/* Contatos */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl eclipse-gradient flex items-center justify-center">
                    <User className="h-5 w-5 eclipse-accent" />
                  </div>
                  <h3 className="eclipse-title text-xl font-bold">Contatos da Marca ({safeContacts.length})</h3>
                </div>
                <Button
                  size="sm"
                  onClick={() => setShowAddContact(true)}
                  className="eclipse-button-primary rounded-xl px-6"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Contato
                </Button>
              </div>

              {safeContacts.length > 0 ? (
                <div className="space-y-6">
                  {safeContacts.map((contact: any, index: number) => (
                    <div key={contact.id || index} className="eclipse-card eclipse-card-hover rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <Avatar className="w-12 h-12 eclipse-glow-soft">
                            <AvatarFallback className="bg-gradient-to-br from-[#8A4BFF] to-[#DB9EFF] text-white font-bold">
                              {getInitials(contact.name)}
                            </AvatarFallback>
                          </Avatar>
                          <Button
                            size="sm"
                            className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full eclipse-button-primary p-0"
                          >
                            <Camera className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="flex-1 min-w-0">
                          {editingContact === contact.id ? (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-[#FBF9FF] text-sm">Nome</Label>
                                  <Input
                                    value={editingContactData.name || ""}
                                    onChange={(e) =>
                                      setEditingContactData({ ...editingContactData, name: e.target.value })
                                    }
                                    className="eclipse-input rounded-xl mt-1"
                                  />
                                </div>
                                <div>
                                  <Label className="text-[#FBF9FF] text-sm">Cargo</Label>
                                  <Input
                                    value={editingContactData.role || ""}
                                    onChange={(e) =>
                                      setEditingContactData({ ...editingContactData, role: e.target.value })
                                    }
                                    className="eclipse-input rounded-xl mt-1"
                                  />
                                </div>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div>
                                  <Label className="text-[#FBF9FF] text-sm">Departamento</Label>
                                  <Input
                                    value={editingContactData.department || ""}
                                    onChange={(e) =>
                                      setEditingContactData({ ...editingContactData, department: e.target.value })
                                    }
                                    className="eclipse-input rounded-xl mt-1"
                                  />
                                </div>
                                <div>
                                  <Label className="text-[#FBF9FF] text-sm">Email</Label>
                                  <Input
                                    value={editingContactData.email || ""}
                                    onChange={(e) =>
                                      setEditingContactData({ ...editingContactData, email: e.target.value })
                                    }
                                    className="eclipse-input rounded-xl mt-1"
                                  />
                                </div>
                                <div>
                                  <Label className="text-[#FBF9FF] text-sm">Telefone</Label>
                                  <Input
                                    value={editingContactData.phone || ""}
                                    onChange={(e) =>
                                      setEditingContactData({ ...editingContactData, phone: e.target.value })
                                    }
                                    className="eclipse-input rounded-xl mt-1"
                                  />
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  onClick={saveContactEdit}
                                  className="eclipse-button-primary rounded-xl"
                                >
                                  Salvar
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => setEditingContact(null)}
                                  className="eclipse-button rounded-xl"
                                >
                                  Cancelar
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <h4 className="eclipse-text-secondary font-bold text-lg">
                                    {contact.name || "Nome não informado"}
                                  </h4>
                                  <p className="text-[#FBF9FF] text-sm">{contact.role || "Cargo não informado"}</p>
                                  <p className="text-[#FBF9FF] opacity-70 text-xs">
                                    {contact.department || "Departamento não informado"}
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => startEditingContact(contact)}
                                    className="eclipse-button rounded-xl h-8 px-3"
                                  >
                                    <Edit className="h-3 w-3 mr-1" />
                                    Editar
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => deleteContact(contact.id)}
                                    className="eclipse-button rounded-xl h-8 px-3 hover:border-red-500/50"
                                  >
                                    <Trash2 className="h-3 w-3 mr-1" />
                                    Excluir
                                  </Button>
                                </div>
                              </div>

                              <div className="space-y-2 mb-4">
                                {contact.email && (
                                  <div className="flex items-center gap-3 text-sm">
                                    <Mail className="h-4 w-4 eclipse-accent" />
                                    <a
                                      href={`mailto:${contact.email}`}
                                      className="eclipse-accent hover:eclipse-text-secondary transition-colors"
                                    >
                                      {contact.email}
                                    </a>
                                  </div>
                                )}
                                {contact.phone && (
                                  <div className="flex items-center gap-3 text-sm">
                                    <Phone className="h-4 w-4 eclipse-accent" />
                                    <a
                                      href={`tel:${contact.phone}`}
                                      className="eclipse-accent hover:eclipse-text-secondary transition-colors"
                                    >
                                      {formatPhone(contact.phone)}
                                    </a>
                                  </div>
                                )}

                                {/* Métodos de contato adicionais */}
                                {Array.isArray(contact.contactMethods) &&
                                  contact.contactMethods.map((method: any, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm">
                                      <MessageCircle className="h-4 w-4 eclipse-accent" />
                                      <span className="text-[#FBF9FF] capitalize">{method.type}:</span>
                                      <span className="eclipse-text-secondary">{method.value}</span>
                                    </div>
                                  ))}
                              </div>

                              {addingContactMethod === contact.id ? (
                                <div className="eclipse-card rounded-xl p-4 mb-4">
                                  <div className="flex gap-2 mb-3">
                                    <Select
                                      value={newContactMethod.type}
                                      onValueChange={(value) =>
                                        setNewContactMethod({ ...newContactMethod, type: value })
                                      }
                                    >
                                      <SelectTrigger className="w-32 eclipse-input rounded-xl">
                                        <SelectValue placeholder="Tipo" />
                                      </SelectTrigger>
                                      <SelectContent className="eclipse-card rounded-xl border-0">
                                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                                        <SelectItem value="instagram">Instagram</SelectItem>
                                        <SelectItem value="telegram">Telegram</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <Input
                                      placeholder="Valor do contato"
                                      value={newContactMethod.value}
                                      onChange={(e) =>
                                        setNewContactMethod({ ...newContactMethod, value: e.target.value })
                                      }
                                      className="flex-1 eclipse-input rounded-xl"
                                    />
                                  </div>
                                  <div className="flex gap-2">
                                    <Button
                                      size="sm"
                                      onClick={() => addContactMethod(contact.id)}
                                      className="eclipse-button-primary rounded-xl"
                                    >
                                      Adicionar
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => setAddingContactMethod(null)}
                                      className="eclipse-button rounded-xl"
                                    >
                                      Cancelar
                                    </Button>
                                  </div>
                                </div>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => setAddingContactMethod(contact.id)}
                                  className="eclipse-button rounded-xl"
                                >
                                  <Plus className="h-4 w-4 mr-2" />
                                  Adicionar Forma de Contato
                                </Button>
                              )}

                              <div className="text-xs text-[#FBF9FF] opacity-50 mt-3">
                                Adicionado por {contact.addedBy || "Desconhecido"} em{" "}
                                {contact.addedDate
                                  ? new Date(contact.addedDate).toLocaleDateString("pt-BR")
                                  : "Data não informada"}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="eclipse-card eclipse-card-hover rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-2xl eclipse-gradient mx-auto mb-4 flex items-center justify-center">
                    <User className="h-8 w-8 eclipse-accent eclipse-pulse" />
                  </div>
                  <h3 className="eclipse-title text-lg font-bold mb-2">Nenhum contato cadastrado</h3>
                  <p className="text-[#FBF9FF] mb-6">Adicione o primeiro contato desta marca.</p>
                  <Button onClick={() => setShowAddContact(true)} className="eclipse-button-primary rounded-xl px-8">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Contato
                  </Button>
                </div>
              )}
            </div>

            <div className="eclipse-separator"></div>

            {/* Observações */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl eclipse-gradient flex items-center justify-center">
                    <FileText className="h-5 w-5 eclipse-accent" />
                  </div>
                  <h3 className="eclipse-title text-xl font-bold">Observações ({safeObservations.length})</h3>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setShowObservationForm(!showObservationForm)}
                  className="eclipse-button rounded-xl px-6"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Observação
                </Button>
              </div>

              {showObservationForm && (
                <div className="eclipse-card eclipse-card-hover rounded-2xl p-6 mb-6">
                  <Textarea
                    placeholder="Digite sua observação sobre esta marca..."
                    value={newObservation}
                    onChange={(e) => setNewObservation(e.target.value)}
                    rows={3}
                    className="eclipse-input rounded-xl mb-4"
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={addObservation} className="eclipse-button-primary rounded-xl">
                      Salvar Observação
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setShowObservationForm(false)
                        setNewObservation("")
                      }}
                      className="eclipse-button rounded-xl"
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {safeObservations.map((obs: any, index: number) => (
                  <div key={obs.id || index} className="eclipse-card eclipse-card-hover rounded-2xl p-6">
                    <p className="text-[#FBF9FF] leading-relaxed mb-3">{obs.text || "Observação sem texto"}</p>
                    <div className="flex items-center gap-4 text-xs text-[#FBF9FF] opacity-70">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        <span className="eclipse-text-secondary">{obs.author || "Autor desconhecido"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{obs.date ? new Date(obs.date).toLocaleDateString("pt-BR") : "Data não informada"}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {safeObservations.length === 0 && !showObservationForm && (
                <div className="eclipse-card eclipse-card-hover rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-2xl eclipse-gradient mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-8 w-8 eclipse-accent eclipse-pulse" />
                  </div>
                  <h3 className="eclipse-title text-lg font-bold mb-2">Nenhuma observação registrada</h3>
                  <p className="text-[#FBF9FF]">Adicione observações importantes sobre esta marca.</p>
                </div>
              )}
            </div>

            <div className="eclipse-separator"></div>

            {/* Influenciadores */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Influenciadores que já fecharam */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-xl eclipse-gradient flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 eclipse-accent" />
                    </div>
                    <h3 className="eclipse-title text-xl font-bold">
                      Influenciadores que Fecharam ({previousInfluencers.length})
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {previousInfluencers.map((influencer: any, index: number) => (
                      <div
                        key={index}
                        className="eclipse-card eclipse-card-hover rounded-xl p-4 cursor-pointer transition-all duration-300"
                        onClick={() => setSelectedInfluencer(influencer)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <div>
                              <span className="eclipse-text-secondary font-medium">
                                {influencer.name || "Nome não informado"}
                              </span>
                              <p className="text-[#FBF9FF] text-xs opacity-70">
                                Última campanha:{" "}
                                {influencer.lastCampaign
                                  ? new Date(influencer.lastCampaign).toLocaleDateString("pt-BR")
                                  : "Data não informada"}
                              </p>
                            </div>
                          </div>
                          <Badge className="eclipse-badge-success text-xs px-3 py-1 rounded-full">Fechado</Badge>
                        </div>
                      </div>
                    ))}
                  </div>

                  {previousInfluencers.length === 0 && (
                    <div className="eclipse-card eclipse-card-hover rounded-2xl p-8 text-center">
                      <TrendingUp className="h-12 w-12 eclipse-accent mx-auto mb-3 opacity-50" />
                      <p className="text-[#FBF9FF] text-sm">Nenhum influenciador fechou ainda com esta marca.</p>
                    </div>
                  )}
                </div>

                {/* Influenciadores Sugeridos */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-xl eclipse-gradient flex items-center justify-center">
                      <Star className="h-5 w-5 eclipse-accent" />
                    </div>
                    <h3 className="eclipse-title text-xl font-bold">
                      Influenciadores Sugeridos ({safeSuggestedInfluencers.length})
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {safeSuggestedInfluencers.map((influencer: any, index: number) => (
                      <div
                        key={index}
                        className="eclipse-card eclipse-card-hover rounded-xl p-4 cursor-pointer transition-all duration-300"
                        onClick={() => setSelectedInfluencer(influencer)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Star className="w-5 h-5 eclipse-accent" />
                            <span className="eclipse-text-secondary font-medium">
                              {influencer.name || "Nome não informado"}
                            </span>
                          </div>
                          <Badge className="eclipse-badge text-xs px-3 py-1 rounded-full">Sugerido</Badge>
                        </div>
                      </div>
                    ))}
                  </div>

                  {safeSuggestedInfluencers.length === 0 && (
                    <div className="eclipse-card eclipse-card-hover rounded-2xl p-8 text-center">
                      <Star className="h-12 w-12 eclipse-accent mx-auto mb-3 opacity-50" />
                      <p className="text-[#FBF9FF] text-sm">Nenhum influenciador sugerido ainda.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <InfluencerContactModal
        influencer={selectedInfluencer}
        open={!!selectedInfluencer}
        onClose={() => setSelectedInfluencer(null)}
      />

      <AddContactDialog
        open={showAddContact}
        onOpenChange={setShowAddContact}
        onAdd={(newContact) => {
          const updatedBrand = {
            ...brand,
            contacts: [
              ...safeContacts,
              {
                ...newContact,
                id: safeContacts.length + 1,
                addedBy: "Usuário Atual",
                addedDate: new Date().toISOString().split("T")[0],
              },
            ],
          }
          onUpdate(updatedBrand)
          setShowAddContact(false)
        }}
      />
    </>
  )
}
