import useGetAllDoctors from "@/hooks/useGetAllDoctors";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import { useSelector } from "react-redux";
import useGetAllHospitals from "@/hooks/useGetAllHospitals";



const Home = () => {
  useGetAllDoctors();
  const doctors = useSelector((state) => state.doctor.doctors);
  console.log("Doctors in Redux:", doctors);
  useGetAllHospitals()
  const hospitals = useSelector((state)=> state.hospital.hospitals)
  console.log("Hospitals in redux", hospitals);
  

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