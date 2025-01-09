import FilterCard from "./FilterCard";
import Navbar from "./shared/Navbar";
import Hospital from "./Hospital";

const hospitalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Hospitals = () => {
  return (
    <div className="bg-[#FEF9E1] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 px-4">
        
        {/* Filter Card Section */}
        <div className="mb-6">
          <FilterCard />
        </div>

        {/* Hospital List */}
        {hospitalArray.length <= 0 ? (
          <div className="text-center py-10">
            <span className="text-lg font-medium">Hospitals Not Found.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hospitalArray.map((item, index) => (
              <div key={index} className="flex justify-center">
                <Hospital />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hospitals;
