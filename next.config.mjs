/** @type {import('next').NextConfig} */
const nextConfig = {
  // Nós removemos as opções que ignoravam os erros.
  // Se houver algum outro erro de TypeScript, o build agora vai te avisar,
  // o que é o comportamento correto e mais seguro.
  images: {
    unoptimized: true,
  },
}

export default nextConfig