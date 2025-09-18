"use client"

import { useState } from "react"
import { ArrowLeft, Plus, Edit, Trash2, Globe, Mail, Phone, User, Building } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { AddContactDialog } from "./add-contact-dialog"
import { EditBrandDialog } from "./edit-brand-dialog"
import Image from "next/image"

interface BrandDetailsProps {
  brand: any
  onBack: () => void
  onUpdate: (brand: any) => void
}

export function BrandDetails({ brand, onBack, onUpdate }: BrandDetailsProps) {
  const [showAddContact, setShowAddContact] = useState(false)
  const [showEditBrand, setShowEditBrand] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo": return "bg-green-100 text-green-800"
      case "Prospecto": return "bg-blue-100 text-blue-800"
      case "Inativo": return "bg-gray-100 text-gray-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-4 flex-1">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
              <Image 
                src={brand.logo || "/placeholder.svg"} 
                alt={`${brand.name} logo`}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{brand.name}</h1>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-gray-600">{brand.category}</span>
                <Badge className={getStatusColor(brand.status)}>
                  {brand.status}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => window.open(brand.website, '_blank')}>
              <Globe className="h-4 w-4 mr-2" />
              Visitar Site
            </Button>
            <Button variant="outline" onClick={() => setShowEditBrand(true)}>
              <Edit className="h-4 w-4 mr-2" />
              Editar
            </Button>
          </div>
        </div>

        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList>
            <TabsTrigger value="contacts">Contatos</TabsTrigger>
            <TabsTrigger value="influencers">Influenciadores Sugeridos</TabsTrigger>
            <TabsTrigger value="observations">Observações</TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Contatos ({brand.contacts.length})</h2>
              <Button onClick={() => setShowAddContact(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Contato
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {brand.contacts.map((contact: any) => (
                <Card key={contact.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{contact.name}</CardTitle>
                        <CardDescription>{contact.role}</CardDescription>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Building className="h-4 w-4 text-gray-500" />
                      <span>{contact.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
                        {contact.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {brand.contacts.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum contato cadastrado</h3>
                  <p className="text-gray-600 mb-4">Adicione o primeiro contato desta marca.</p>
                  <Button onClick={() => setShowAddContact(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Contato
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="influencers" className="space-y-4">
            <h2 className="text-xl font-semibold">Influenciadores Sugeridos</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {brand.suggestedInfluencers.map((influencer: string, index: number) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                      {influencer}
                    </Badge>
                  ))}
                </div>
                {brand.suggestedInfluencers.length === 0 && (
                  <p className="text-gray-600 text-center py-8">Nenhum influenciador sugerido ainda.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="observations" className="space-y-4">
            <h2 className="text-xl font-semibold">Observações</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed">
                  {brand.observations || "Nenhuma observação registrada."}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <AddContactDialog 
          open={showAddContact}
          onOpenChange={setShowAddContact}
          onAdd={(newContact) => {
            const updatedBrand = {
              ...brand,
              contacts: [...brand.contacts, { ...newContact, id: brand.contacts.length + 1 }]
            }
            onUpdate(updatedBrand)
            setShowAddContact(false)
          }}
        />

        <EditBrandDialog 
          open={showEditBrand}
          onOpenChange={setShowEditBrand}
          brand={brand}
          onUpdate={(updatedBrand) => {
            onUpdate(updatedBrand)
            setShowEditBrand(false)
          }}
        />
      </div>
    </div>
  )
}
