'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

// Em vez de importar 'ThemeProviderProps', nós criamos nosso próprio tipo
// extraindo as propriedades diretamente do componente que importamos.
// Isso é mais seguro e funciona em todas as versões.
type NextThemesProviderProps = React.ComponentProps<typeof NextThemesProvider>

export function ThemeProvider({ children, ...props }: NextThemesProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}