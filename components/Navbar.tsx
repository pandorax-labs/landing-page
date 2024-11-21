import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 sticky top-0 bg-white z-50">
      <div className="flex items-center">
        <Link href="/">
          <img 
            src="/Pandora_Labs_Logo_Transparent.png"
            alt="Pandora Labs" 
            className="h-12"
          />
        </Link>
      </div>
      
      <div className="flex gap-8">
        <Link 
          href="/" 
          className="text-gray-600 hover:text-gray-900"
        >
          Home
        </Link>
        <Link 
          href="#services" 
          className="text-gray-600 hover:text-gray-900"
        >
          Services
        </Link>
        <Link 
          href="#projects" 
          className="text-gray-600 hover:text-gray-900"
        >
          Projects
        </Link>
        <Link 
          href="#team" 
          className="text-gray-600 hover:text-gray-900"
        >
          Team
        </Link>
        <Link 
          href="#contact" 
          className="text-gray-600 hover:text-gray-900"
        >
          Contact
        </Link>
      </div>

      <Link href="/contact">
        <button className="bg-white text-black px-6 py-2 rounded-full border border-gray-200 hover:bg-gray-50">
          Get Started
        </button>
      </Link>
    </nav>
  )
}