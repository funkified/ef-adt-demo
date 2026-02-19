"use client"

import { useState } from "react"

export default function LeadForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Hola, mi nombre es ${name} y mi teléfono es ${phone}. Estoy interesado en el sistema de seguridad.`

    const whatsappNumber = "17875299283" // ← CAMBIA ESTE NÚMERO
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(url, "_blank")
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">
          Solicita Información Ahora
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Teléfono"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
