import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyProfile from './components/CompanyProfile';
import VisionMission from './components/VisionMission';
import CEOSection from './components/CEOSection';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.1 0 0)' }}>
      <Navbar />
      <main>
        <Hero />
        <CompanyProfile />
        <VisionMission />
        <CEOSection />
        <Services />
        <Portfolio />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
