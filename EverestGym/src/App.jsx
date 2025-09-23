import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import ImgaeSlide from "./components/ImageSlide";
import FitnessGoals from "./components/FitnessGoals";
import Subscriptions from "./components/Subscriptions";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ImgaeSlide />
      <FitnessGoals />
      <Subscriptions />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
