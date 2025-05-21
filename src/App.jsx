import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Project from './sections/Project'

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Project />

      <Contact />
    </main>
  )
}

export default App
