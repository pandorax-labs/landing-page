export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Grid layout for footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Partners</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Web3 Solutions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Creative Design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600">© 2024 Pandora Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}