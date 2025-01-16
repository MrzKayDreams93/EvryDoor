import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Features from "./features"
import Footer from "./footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-blue-500 rounded-md" />
          <span className="text-xl font-semibold">Evrydoor</span>
        </div>
        <Button variant="default">Login</Button>
      </header>

      <main className="flex-1">
        <section className="container px-4 py-20 text-center">
          <div className="mx-auto max-w-[800px] space-y-4">
            <div className="rounded-2xl bg-blue-500 p-4 inline-block">
              <div className="h-12 w-12 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                  <path d="M12 3v6" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Reach Every Door
            </h1>
            <p className="text-lg text-muted-foreground">
              Instantly distribute flyers to thousands of apartment complexes. Enter a location to begin
              your campaign.
            </p>
            <div className="mx-auto max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  className="pl-10 pr-32"
                  placeholder="Enter city or ZIP code..."
                  type="text"
                />
                <Button className="absolute right-1 top-1" size="sm">
                  Search
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Current Coverage:</span>
              {["Dallas", "Fort Worth", "Arlington", "Frisco"].map((city) => (
                <span key={city} className="rounded-full bg-muted px-3 py-1">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Features />
      </main>

      <Footer />
    </div>
  )
}
