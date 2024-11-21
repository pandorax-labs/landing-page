import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Transform Your Business with Modern Solutions
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We help businesses grow and succeed in the digital age with cutting-edge technology and proven strategies.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}