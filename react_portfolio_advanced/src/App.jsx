import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'

export default function App() {
  return (
    <div>
      <Navbar />
      <PageTransition>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </PageTransition>
    </div>
  )
}
