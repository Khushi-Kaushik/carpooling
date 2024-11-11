import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageSection from "./components/ImageSection";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ImageSection />
      <HowItWorks />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
