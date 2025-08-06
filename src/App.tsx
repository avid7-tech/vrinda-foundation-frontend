import './App.css'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import AboutSection from './components/AboutSection'
import CardsCarousel from './components/CardsCarousel'
import Footer from './components/Footer'
import ScrollUpButton from './components/ScrollUpButton'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <CardsCarousel />
      <Footer />
      <ScrollUpButton />
    </div>
  )
}

export default App
