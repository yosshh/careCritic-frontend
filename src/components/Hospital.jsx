import { Button } from "./ui/button";

const Hospital = () => {
  return (
    <div className='rounded-lg shadow-lg border border-gray-200 w-full max-w-[500px] h-[400px] flex flex-col overflow-hidden'>
      
      {/* Hospital Image (Top Half) */}
      <div className="w-full h-[50%]">
        <img 
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" 
          alt="Hospital" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hospital Details (Bottom Half) */}
      <div className='p-5 bg-[#A9C46C] flex flex-col justify-between h-[50%]'>
        
        {/* Header */}
        <div className='flex items-center gap-4'>
          <div>
            <h1 className='font-semibold text-xl'>Hospital Name</h1>
            <p className='text-sm text-gray-600'>123 Health Ave, City</p>
          </div>
        </div>

        {/* Body */}
        <p className="text-gray-700 mt-2">
          Specialized in cardiology, neurology, and orthopedic treatments.
        </p>

        {/* Footer */}
        <div className='flex justify-between items-center mt-4'>
          <Button className='bg-[#69247C] hover:bg-[#b664cc] text-white'>Details</Button>
          <Button className="bg-[#F83002] hover:bg-[#eb5a64f6] text-white px-6 py-2">View Hospital</Button>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
