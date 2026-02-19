import "./globals.css"

export const metadata = {
    title: "ADT Puerto Rico | Demo",
    description: "Sistema de Seguridad Inteligente",
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="es">
        <body className="font-sans bg-white text-gray-900">
          {children}
        </body>
      </html>
    )
  }
  