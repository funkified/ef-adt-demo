import { config } from "@/lib/config"

export default function Benefits() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          ¿Por qué elegir nuestro sistema?
        </h2>

        <div className="space-y-6 text-lg">
          {config.benefits.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-3"
            >
              <span className="text-green-600 text-2xl">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
