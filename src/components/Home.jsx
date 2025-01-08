
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";


const Home = () => {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Home;