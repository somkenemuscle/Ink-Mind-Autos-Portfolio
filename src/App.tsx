import './App.css'
import Navbar from './components/layouts/Navbar';
import HeroSection from './components/sections/HeroSection';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/layouts/Footer';
import WhatsAppButton from './components/WhatsAppButton';



export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
