import { useState } from "react";

const Doctor = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg shadow-lg border border-gray-200 w-full max-w-[500px] h-[400px] flex flex-col overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Doctor Image */}
      <div className="relative w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Doctor"
          className={`w-full h-full object-cover transition-all duration-300 ${
            isHovered ? "brightness-75" : "brightness-100"
          }`}
        />

        {/* Popover Content */}
        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 flex flex-col items-center space-y-2">
            <h2 className="text-lg font-bold">Dr. John Doe</h2>
            <p className="text-sm">10 Years of Experience</p>
            <button className="bg-[#F83002] px-4 py-2 rounded-md text-white font-medium hover:bg-[#d78471]">
              View Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctor;
