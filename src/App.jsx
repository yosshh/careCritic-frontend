import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import HospitalsList from "./components/HospitalsList"
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
              <div className="max-w-7xl mx-auto pt-20 px-6">
                <HeroSection />
                <div className="mt-24"><FeatureSection /></div>
                
                <Testimonials />
              </div>
            }
          />
          <Route exact path="/hospitals" element={<HospitalsList />} />
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
