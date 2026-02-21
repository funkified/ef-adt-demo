import Hero from "@/components/Hero"
import Benefits from "@/components/Benefits"
import CoverageCTA from "@/components/CoverageCTA"
import LeadForm from "@/components/LeadForm"

export default function Home() {
  return (
    <main className="flex flex-col gap-20 pb-20">

      <Hero />

      <Benefits />

      <section className="max-w-5xl mx-auto px-6">
        <LeadForm />
      </section>

      <CoverageCTA />

    </main>
  )
}
