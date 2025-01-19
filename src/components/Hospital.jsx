import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import { Button } from "./ui/button";
import { useState } from "react";

const Hospital = ({ hospital }) => {
    const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()
  // const hospitalId = "jlklfjdlkgkaj"
  return (
    <div className='rounded-lg shadow-lg border border-gray-200 w-full max-w-[500px] h-[400px] flex flex-col overflow-hidden relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      
      {/* Hospital Image (Top Half) */}
      <div className="w-full h-[50%]">
        <img 
          src={hospital?.hospitalImage ||"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"} 
          alt="Hospital" 
          className={`w-full h-full object-cover transition-all duration-300 ${isHovered ? "brightness-75" : "brightness-100"}`}
        />
      </div>

      {/* Hospital Details (Bottom Half) */}
      <div className='p-5 bg-[#D99D81] flex flex-col justify-between h-[50%]'>
        
        {/* Header */}
        <div className='flex items-center gap-4'>
          <div>
            <h1 className='font-semibold text-xl text-white font-Poppins'>{hospital?.hospitalName}</h1>
            <p className='text-sm text-gray-600'>{hospital?.address}</p>
          </div>
        </div>

        {/* Body */}
        <p className="text-gray-700 mt-2">
          Specialized in cardiology, neurology, and orthopedic treatments.
        </p>

        {/* Footer */}
        <div className='flex justify-between items-center mt-4'>
          <Button className='bg-[#69247C] hover:bg-[#b664cc] text-white' onClick={()=> navigate(`/description/hospital/${hospital?._id}`)}>Details</Button>
          <Button className="bg-[#F83002] hover:bg-[#eb5a64f6] text-white px-6 py-2">View Hospital</Button>
        </div>
      </div>
    </div>
  );
};

Hospital.propTypes = {
  hospital: PropTypes.shape({
    hospitalName: PropTypes.string.isRequired,
    address: PropTypes.string,
    hospitalImage: PropTypes.string,
    // experienceInYears: PropTypes.number,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hospital;
