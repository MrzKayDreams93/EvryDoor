import { Building2, Clock, Users2, ShieldCheck } from 'lucide-react'

const features = [
  {
    title: "Trusted Platform",
    description: "Serving property managers and marketers since 2020",
    icon: ShieldCheck,
  },
  {
    title: "Fast Delivery",
    description: "Same-day distribution to your selected complexes",
    icon: Clock,
  },
  {
    title: "500k+ Residents",
    description: "Reach a massive audience across DFW",
    icon: Users2,
  },
  {
    title: "1000+ Properties",
    description: "Access to major apartment communities",
    icon: Building2,
  },
]

export default function Features() {
  return (
    <section className="container px-4 py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight">
        Why Choose Reach Every Door?
      </h2>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <feature.icon className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

