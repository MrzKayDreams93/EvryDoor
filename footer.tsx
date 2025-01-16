import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-50">
      <div className="container px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-blue-500 rounded-md" />
              <span className="text-xl font-semibold">Evrydoor</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              The fastest way to distribute marketing materials to apartment complexes
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Door-to-Door Distribution</li>
              <li>Apartment Marketing</li>
              <li>Property Management</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
              <Mail className="h-4 w-4" />
              support@evrydoor.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

