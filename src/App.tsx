import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import './brand.css';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import HeroSection from './components/HeroSection';
import TrustStrip from './components/TrustStrip';
import FeaturesSection from './components/FeaturesSection';
import ProgramsPreview from './components/ProgramsPreview';
import TestimonialsSection from './components/TestimonialsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import PricingPreview from './components/PricingPreview';
// ...existing code...

const Programs = () => <div className="p-8">Programs Page</div>;
const Institutions = () => (
  <div style={{ maxWidth: 800, margin: '40px auto', padding: '48px 24px', background: '#0d0d0d', borderRadius: 16, boxShadow: '0 4px 24px rgba(212, 175, 55, 0.08)' }}>
    <h1 style={{ fontSize: 36, fontWeight: 700, color: '#D4AF37', marginBottom: 24, letterSpacing: '0.02em', textAlign: 'center' }}>For Institutions</h1>
    <p style={{ fontSize: 20, color: '#D4AF37', marginBottom: 24, textAlign: 'center' }}>
      Discover tools and features designed for educational institutions to manage, track, and enhance learning outcomes.
    </p>
    {/* Add more institution-specific content here */}
  </div>
);
const Pricing = () => <div className="p-8">Pricing Page</div>;
// About page is now imported from ./pages/About
const Resources = () => <div className="p-8">Resources Page</div>;
const Login = () => (
  <div style={{ maxWidth: 400, margin: '60px auto', padding: '32px', background: '#0d0d0d', borderRadius: 16, boxShadow: '0 4px 24px rgba(212, 175, 55, 0.08)' }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, color: '#D4AF37', marginBottom: 24, textAlign: 'center' }}>Login</h2>
    <form>
      <input type="email" placeholder="Email" style={{ width: '100%', padding: '12px', marginBottom: 16, borderRadius: 8, border: '1px solid #D4AF37', fontSize: 16, background: '#0d0d0d', color: '#D4AF37' }} />
      <input type="password" placeholder="Password" style={{ width: '100%', padding: '12px', marginBottom: 24, borderRadius: 8, border: '1px solid #D4AF37', fontSize: 16, background: '#0d0d0d', color: '#D4AF37' }} />
      <button type="submit" className="btn" style={{ width: '100%', background: '#D4AF37', color: '#000000', fontWeight: 700, fontSize: 18, borderRadius: 8, padding: '12px' }}>Login</button>
    </form>
  </div>
)


function App() {
  return (
    <>
      <div style={{ minHeight: '100vh', background: '#000000', color: '#D4AF37', fontFamily: 'Inter, Arial, sans-serif' }}>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <TrustStrip />
                  <FeaturesSection />
                  <ProgramsPreview />
                  <TestimonialsSection />
                  <WhyChooseUsSection />
                  <PricingPreview />
                  {/* More homepage sections will be added here */}
                </>
              }
            />
            <Route path="/programs" element={<Programs />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/login" element={<Login />} />
            {/* More routes will be added for all required pages */}
          </Routes>
        </div>
      </div>
      <Chatbot />
    </>
  );
}

export default App;
