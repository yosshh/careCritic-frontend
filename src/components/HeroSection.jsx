import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-white">
        Discover The Best 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">{" "}HealthCare </span>
        for your 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">{" "}Treatment. </span>
      </h1>
      <p className="mt-10 text-lg text-center text-[#3C3D37] max-w-4xl">
      Transforming healthcare through transparency and community,
      Find the right hospital for your needs. Read reviews, compare ratings.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#C0EBA6] shadow-sm shadow-[#347928] mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#C0EBA6] shadow-sm shadow-[#347928] mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
};

export default HeroSection;







