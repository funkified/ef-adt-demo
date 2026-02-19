import Hero from "@/components/Hero"
import Benefits from "@/components/Benefits"
import LeadForm from "@/components/LeadForm"

export default function Home() {
  return (
    <main>
      {/* Badge demo */}
      <div className="text-center text-xs py-2 bg-yellow-300">
        DEMO - Powered by Emporium Factory
      </div>

      <Hero />
      <Benefits />
      <LeadForm />
    </main>
  )
}
