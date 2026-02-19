import { config } from "../lib/config"

export default function Hero() {
  return (
    <section className="relative text-white text-center py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('/security.jpg')" }}
      />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {config.headline}
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          {config.subheadline}
        </p>
        <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-lg text-lg">
          {config.cta}
        </button>
      </div>
    </section>
  )
}
