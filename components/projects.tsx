export default function Projects() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Successful Projects
        </h2>
        
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          We've helped numerous companies achieve their digital transformation goals through innovative solutions.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="p-8 rounded-3xl bg-gray-50">
            <div className="text-5xl font-bold text-blue-600 mb-4">100+</div>
            <div className="text-xl text-gray-600">Projects Completed</div>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50">
            <div className="text-5xl font-bold text-purple-600 mb-4">50M+</div>
            <div className="text-xl text-gray-600">Revenue Generated</div>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50">
            <div className="text-5xl font-bold text-blue-600 mb-4">95%</div>
            <div className="text-xl text-gray-600">Client Satisfaction</div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-gray-50 text-left">
            <h3 className="text-2xl font-bold mb-4">DeFi Platform</h3>
            <p className="text-gray-600 mb-4">
              Built a decentralized finance platform handling over $10M in daily transactions.
            </p>
            <div className="text-blue-500">View Case Study →</div>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 text-left">
            <h3 className="text-2xl font-bold mb-4">NFT Marketplace</h3>
            <p className="text-gray-600 mb-4">
              Developed a marketplace for digital artists with 100K+ monthly active users.
            </p>
            <div className="text-blue-500">View Case Study →</div>
          </div>
        </div>
      </div>
    </section>
  )
}