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
  <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold text-primary text-center mb-4">For Institutions</h1>
    <p className="text-deep-gray text-lg text-center mb-4">
      Discover tools and features designed for educational institutions to manage, track, and enhance learning outcomes.
    </p>
  </div>
);
const Pricing = () => <div className="p-8">Pricing Page</div>;
// About page is now imported from ./pages/About
const Resources = () => <div className="p-8">Resources Page</div>;
const Login = () => (
  <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-primary text-center mb-4">Login</h2>
    <form>
      <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded border" />
      <input type="password" placeholder="Password" className="w-full p-3 mb-4 rounded border" />
      <button type="submit" className="btn w-full">Login</button>
    </form>
  </div>
)


function App() {
  return (
    <>
      <div style={{ minHeight: '100vh', fontFamily: 'Inter, Arial, sans-serif' }}>
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
