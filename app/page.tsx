// Conteúdo de teste para app/page.tsx

"use client"

import { useEffect, useState } from 'react';

export default function TestPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div style={{ padding: '50px', color: 'white', fontSize: '24px' }}>
      <h1>Página de Teste</h1>
      <p>Se você está vendo esta mensagem, o layout está funcionando.</p>
      
      {/* Este teste adicional confirma se o useEffect está funcionando */}
      {isClient ? (
        <p style={{ color: 'lightgreen' }}>O cliente (navegador) montou com sucesso!</p>
      ) : (
        <p style={{ color: 'orange' }}>Renderizando no servidor...</p>
      )}
    </div>
  )
}
