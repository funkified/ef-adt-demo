"use client"

export default function LeadForm() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">
          Solicita Información Ahora
        </h3>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            alert("Demo enviada correctamente")
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Nombre"
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Teléfono"
            required
            className="border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Enviar Información
          </button>
        </form>
      </div>
    </section>
  )
}
