import Hero from '@/components/Hero'
import About from '@/components/About'
import Book from '@/components/Book'
import Research from '@/components/Research'
import Companies from '@/components/Companies'
import Writing from '@/components/Writing'
import Speaking from '@/components/Speaking'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Book />
      <Research />
      <Companies />
      <Writing />
      <Speaking />
      <Footer />
    </main>
  )
}
