import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Navigation from "./components/Navbar/Navigation";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Auth/Auth";
import ProfilePage from "./components/ProfilePages/ProfilePages";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Auth isSignup={false} />} />
        <Route path="/signup" element={<Auth isSignup={true} />} />
        <Route path="/profile/:id" element={<ProfilePage />} /> {/* ✅ New Profile Route */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
