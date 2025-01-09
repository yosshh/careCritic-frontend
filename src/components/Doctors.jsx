import Navbar from "./shared/Navbar";
import Doctor from "./Doctor";
import FilterCardForDoctor from "./FilterCardForDoctor";

const doctorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Doctors = () => {
  return (
    <div className="bg-[#FEF9E1] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 px-4">
        
        {/* Filter Card Section */}
        <div className="mb-6">
          <FilterCardForDoctor />
        </div>

        {/* Doctors List */}
        {doctorArray.length <= 0 ? (
          <div className="text-center py-10">
            <span className="text-lg font-medium">No Doctors Available.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctorArray.map((item, index) => (
              <div key={index} className="flex justify-center">
                <Doctor />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
