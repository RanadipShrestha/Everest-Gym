import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Sections for Home Page
import Hero from "./components/Hero";
import About from "./components/About";
import ImageSlide from "./components/ImageSlide";
import FitnessGoals from "./components/FitnessGoals";
import Subscriptions from "./components/Subscriptions";
import Contact from "./components/Contact";

// Pages
import Login from "./components/Login";
import Register from "./components/Register"; // ✅ Import Register page

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <ImageSlide />
              <FitnessGoals />
              <Subscriptions />
              <Contact />
            </>
          }
        />

        {/* Login & Register Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
