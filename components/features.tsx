export function Features() {
  const features = [
    {
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge solutions tailored for your business needs.'
    },
    {
      title: 'Reliability',
      description: '24/7 support and maintenance to keep your business running smoothly.'
    },
    {
      title: 'Scalability',
      description: 'Grow your business with solutions that scale with your needs.'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security to protect your valuable data.'
    }
  ]

  return (
    <section id="features" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}