
import video2 from "../assets/video2.mp4"
import v1 from "../assets/v1.mp4"
import v3 from "../assets/v3.mp4"
import v4 from "../assets/v4.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center bg-[#8FD14F]">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide  text-[#69247C] mt-30 my-4">
        Discover The Best 
        <span className="bg-gradient-to-r text-[#F83002] bg-clip-text">{" "}HealthCare </span>
        for your 
        <span className="bg-gradient-to-r text-[#F83002] bg-clip-text">{" "}Treatment. </span>
      </h1>
      <p className="mt-10 text-lg text-center text-[#3C3D37] max-w-4xl">
      Transforming healthcare through transparency and community,
      Find the right hospital for your needs. Read reviews, compare ratings.
      </p>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-full aspect-square object-cover border border-[#C0EBA6] shadow-sm shadow-[#347928] h-60 w-60 mx-2 my-4 overflow-hidden"
        >
          <source src={v1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-full aspect-square object-cover border border-[#C0EBA6] shadow-sm shadow-[#347928] h-60 w-60 mx-2 my-4 overflow-hidden"
        >
          <source src={v3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-full aspect-square object-cover border border-[#C0EBA6] shadow-sm shadow-[#347928] h-60 w-60 mx-2 my-4 overflow-hidden"
        >
          <source src={v4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-full aspect-square object-cover border border-[#C0EBA6] shadow-sm shadow-[#347928] h-60 w-60 mx-2 my-4 overflow-hidden"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
};

export default HeroSection;







