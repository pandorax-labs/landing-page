import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          YourBrand
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="#features" className="hover:text-neutral-600">Features</Link>
          <Link href="#services" className="hover:text-neutral-600">Services</Link>
          <Link href="#testimonials" className="hover:text-neutral-600">Testimonials</Link>
          <Link href="#contact" className="hover:text-neutral-600">Contact</Link>
        </div>

        <Button>Get Started</Button>
      </div>
    </nav>
  )
}