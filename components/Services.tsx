export default function Services() {
    return (
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Our Services
          </h2>
          
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Comprehensive solutions for your digital transformation journey, from blockchain
            development to creative design and marketing.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* First row - Original services */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-500 rounded-full mb-6"></div>
              <h3 className="text-2xl font-bold mb-4">Web3 Solutions</h3>
              <p className="text-gray-600 mb-6">
                Smart Contract Development, Audits, NFT Marketplaces, DeFi, and Chain
                Abstraction
              </p>
              <p className="text-blue-500 font-semibold">100+ Projects</p>
            </div>
  
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">&lt;/&gt;</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Software Development</h3>
              <p className="text-gray-600 mb-6">
                Custom software solutions tailored to your business needs
              </p>
              <p className="text-blue-500 font-semibold">500+ Deployments</p>
            </div>
  
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Contract Audits</h3>
              <p className="text-gray-600 mb-6">
                Ensure the security and efficiency of your blockchain projects
              </p>
              <p className="text-blue-500 font-semibold">50+ Audits</p>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Second row - New services */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-5-9h10v2H7v-2zm0-4h10v2H7V7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Creative Design</h3>
              <p className="text-gray-600 mb-6">
                Ad Creative, Social Media Assets, Email Design, and Brand Identity
              </p>
              <p className="text-blue-500 font-semibold">200+ Designs</p>
            </div>
  
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h16V6H4zm8 3l4 4-4 4v-3H8v-2h4V9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Video Production</h3>
              <p className="text-gray-600 mb-6">
                Effortless video production at scale for all your marketing needs
              </p>
              <p className="text-blue-500 font-semibold">1000+ Videos</p>
            </div>
  
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-full mb-6"></div>
              <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-gray-600 mb-6">
                Data-driven solutions for faster growth and better ROI
              </p>
              <p className="text-blue-500 font-semibold">300+ Campaigns</p>
            </div>
          </div>
        </div>
      </section>
    )
  }