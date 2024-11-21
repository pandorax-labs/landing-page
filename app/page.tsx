import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  const services = [
    {
      title: 'Web3 Solutions',
      description: 'Smart Contract Development, Audits, NFT Marketplaces, DeFi, and Chain Abstraction',
      stats: '100+ Projects',
      iconBg: 'bg-blue-100 dark:bg-blue-900',
      icon: <div className="w-3 h-3 rounded-full bg-blue-500" />
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      stats: '500+ Deployments',
      iconBg: 'bg-purple-100 dark:bg-purple-900',
      icon: <div className="text-purple-500">{'</>'}</div>
    },
    {
      title: 'Smart Contract Audits',
      description: 'Ensure the security and efficiency of your blockchain projects',
      stats: '50+ Audits',
      iconBg: 'bg-blue-100 dark:bg-blue-900',
      icon: <div className="text-blue-500">🛡️</div>
    },
    {
      title: 'Creative Design',
      description: 'Ad Creative, Social Media Assets, Email Design, and Brand Identity',
      stats: '200+ Designs',
      iconBg: 'bg-purple-100 dark:bg-purple-900',
      icon: <div className="text-purple-500">🎨</div>
    },
    {
      title: 'Video Production',
      description: 'Effortless video production at scale for all your marketing needs',
      stats: '1000+ Videos',
      iconBg: 'bg-blue-100 dark:bg-blue-900',
      icon: <div className="text-blue-500">🎥</div>
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven solutions for faster growth and better ROI',
      stats: '300+ Campaigns',
      iconBg: 'bg-purple-100 dark:bg-purple-900',
      icon: <div className="text-purple-500">📈</div>
    }
  ]

  const testimonials = [
    {
      author: "Alex Chen",
      handle: "@alexchen_dev",
      avatar: "/avatars/alex.jpg", // Add actual avatar images
      content: "Pandora Labs delivered beyond expectations. Their AI solutions transformed our business processes completely!",
      verified: true
    },
    {
      author: "Sarah Miller",
      handle: "@sarahm_tech",
      avatar: "/avatars/sarah.jpg",
      content: "The team's expertise in blockchain development is unmatched. Best technical partnership we've had.",
      verified: true
    },
    {
      author: "David Kumar",
      handle: "@davidk_web3",
      avatar: "/avatars/david.jpg",
      content: "Outstanding results with our DeFi platform. 10/10 would recommend their services!",
      verified: true
    },
    {
      author: "Emma Wilson",
      handle: "@emma_wilson",
      avatar: "/avatars/emma.jpg",
      content: "Their creative approach to problem-solving is refreshing. Great communication throughout the project.",
      verified: true
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#1E2124]">
      <nav className="fixed w-full top-0 z-50 bg-white dark:bg-[#1E2124] border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <img
                src="/Pandora_Logo_light.png"
                alt="Pandora Labs"
                className="h-12 w-auto dark:hidden" // Increased from h-8 to h-12
              />
              <img
                src="/Pandora_Logo_light.png"
                alt="Pandora Labs"
                className="h-12 w-auto hidden dark:block" // Increased from h-8 to h-12
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Projects', 'Team', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-md bg-[#6366F1] text-white hover:bg-[#5558E8]">
              Get Started
            </button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
{/* 
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
            About Pandora Labs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Pandora Labs is a specialized AI automation agency focused on streamlining business processes through intelligent software solutions. We harness cutting-edge AI technology to create tailored, efficient, and scalable solutions that drive growth and innovation.
          </p>
        </div>
      </section>
*/}



      <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 max-w-2xl">
        {/* Hiring Badge */}
        {/* <div className="inline-flex items-center mb-8">
          <span className="text-[#6366F1] dark:text-[#818CF8] text-sm font-medium mr-2">
            We're hiring
          </span>
          <a 
            href="#" 
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center group"
          >
            See open positions
            <svg 
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div> */}

        {/* Main Content */}
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          A better way to ship your projects
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Pandora Labs is a specialized AI automation agency focused on streamlining business processes through intelligent software solutions. We harness cutting-edge AI technology to create tailored, efficient, and scalable solutions that drive growth and innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 bg-[#6366F1] hover:bg-[#5558E8] text-white rounded-full font-medium transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium inline-flex items-center group">
            Learn more
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile App Screenshot */}
      <div className="flex-1 relative">
        <div className="relative w-full max-w-[280px] mx-auto">
          <img
            src="/mobile-app-screenshot.png"
            alt="Mobile app interface"
            className="w-full h-auto rounded-[32px] shadow-2xl"
          />
          <div className="absolute inset-0 rounded-[32px] ring-1 ring-gray-900/10 dark:ring-white/10" />
        </div>
      </div>
    </div>
  </div>
</section>
  
{/* Services Section */}
<section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#6366F1] dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto">
              Comprehensive solutions for your digital transformation journey, from blockchain development to creative design and marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white dark:bg-[#2A2D31] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800">
                <div className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center ${service.iconBg}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                
                <div className="text-[#6366F1] dark:text-blue-400 font-medium">
                  {service.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> 
{/* Projects Section */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-[#6366F1] dark:text-white mb-4">
        Successful Projects
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-xl">
        Our track record of delivering exceptional results speaks for itself. Here are some of our recent success stories and what our clients have to say.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-[#2A2D31] rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
        <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg mb-6" />
        <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
          DeFi Platform Overhaul
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Redesigned and optimized a major DeFi platform, resulting in a 200% increase in user engagement and $50M+ in additional locked value.
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Client:</p>
            <p className="font-medium text-gray-900 dark:text-white">FinTech Innovations Inc.</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Feedback:</p>
            <p className="italic text-gray-600 dark:text-gray-300">
              "Pandora Labs transformed our platform beyond our expectations. Their expertise in Web3 and UX design is unparalleled."
            </p>
          </div>
        </div>
      </div>

      {/* Repeat for other project cards */}
    </div>
  </div>
</section>
<section className="py-20 bg-gray-50 dark:bg-gray-800/50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        What People Are Saying
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Don't just take our word for it. Here's what <span className="font-medium">real people</span> are saying about Pandora Labs.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          name: "Fred Maia",
          handle: "@fredmaiagarantes",
          content: "Was looking for something like that yesterday. Well done and tks for sharing!",
          avatar: "/path-to-avatar.jpg"
        },
        {
          name: "Sumu",
          handle: "@DesignSumu",
          content: "Pre-ordered. Excited to see what you ship!",
          avatar: "/path-to-avatar.jpg"
        },
        {
          name: "Ben Ford",
          handle: "@commandodev",
          content: "Insta buy!",
          avatar: "/path-to-avatar.jpg"
        },
        {
          name: "Masoud",
          handle: "@FoundersMentor",
          content: "This is beautiful man",
          avatar: "/path-to-avatar.jpg"
        }
      ].map((testimonial) => (
        <div 
          key={testimonial.handle}
          className="bg-white dark:bg-[#2A2D31] rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-800"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              {/* Add actual avatar image here */}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 text-blue-500"
                  fill="currentColor"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.handle}
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {testimonial.content}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Testimonials sec */}
<section className="py-20 border-t border-gray-100 dark:border-gray-800">
  <div className="max-w-7xl mx-auto px-6">
    <h3 className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-12">
      TRUSTED BY LEADING TEAMS
    </h3>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-75">
      {[
        {
          name: 'Microsoft',
          logo: '/logos/microsoft.svg'
        },
        {
          name: 'Amazon',
          logo: '/logos/amazon.svg'
        },
        {
          name: 'Netflix',
          logo: '/logos/netflix.svg'
        },
        {
          name: 'YouTube',
          logo: '/logos/youtube.svg'
        },
        {
          name: 'Instagram',
          logo: '/logos/instagram.svg'
        },
        {
          name: 'Uber',
          logo: '/logos/uber.svg'
        },
        {
          name: 'Spotify',
          logo: '/logos/spotify.svg'
        },
        {
          name: 'Google',
          logo: '/logos/google.svg'
        },
        {
          name: 'Microsoft',
          logo: '/logos/microsoft.svg'
        },
        {
          name: 'BMO',
          logo: '/logos/bmo.svg'
        }
      ].map((brand) => (
        <div 
          key={brand.name}
          className="w-32 h-12 flex items-center justify-center grayscale opacity-70 hover:opacity-100 transition-opacity"
        >
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="max-w-full max-h-full object-contain dark:invert"
          />
        </div>
      ))}
    </div>
  </div>
</section>


{/* Contact Section */}
<section className="py-20 text-center">
  <div className="max-w-xl mx-auto px-6">
    <h2 className="text-5xl font-bold text-[#6366F1] dark:text-white mb-4">
      Ready to Transform Your Digital Landscape?
    </h2>
    <p className="text-gray-600 dark:text-gray-300 mb-8">
      Get in touch with our experts and let's build something extraordinary together.
    </p>
    <div className="space-y-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2A2D31] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
      />
      <button className="w-full px-4 py-3 bg-[#6366F1] hover:bg-[#5558E8] text-white rounded-lg font-medium transition-colors">
        Get in Touch
      </button>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-gray-50 dark:bg-gray-800/50 pt-20 pb-8">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
      {[
        {
          title: 'Company',
          links: ['About Us', 'Careers', 'Partners']
        },
        {
          title: 'Services',
          links: ['Web3 Solutions', 'Creative Design', 'Digital Marketing']
        },
        {
          title: 'Resources',
          links: ['Blog', 'Case Studies', 'Documentation']
        },
        {
          title: 'Connect',
          links: ['Twitter', 'LinkedIn', 'GitHub']
        }
      ].map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    
    <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
      <p className="text-gray-600 dark:text-gray-400">
        © 2024 Pandora Labs. All rights reserved.
      </p>
    </div>
  </div>
</footer>


    </main>
  )
}