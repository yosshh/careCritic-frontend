// import useGetAllJobs from "../components/hooks/useGetAllJobs";
// import CategoryCarousel from "./CategoryCarousel";
// import Footer from "./Footer";
// import HeroSection from "./HeroSection";
// import LatestJobs from "./LatestJobs";
import Navbar from "./shared/Navbar";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const Home = () => {
//   useGetAllJobs();
//   const { user } = useSelector(store => store.auth);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (user?.role === 'Recruiter') {
//       navigate("/admin/companies");
//     }
//   }, []);
  return (
    <div>
      <Navbar />
      {/* <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer /> */}
    </div>
  );
};

export default Home;