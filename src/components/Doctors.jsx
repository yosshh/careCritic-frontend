import Navbar from "./shared/Navbar";
import Doctor from "./Doctor";
import FilterCardForDoctor from "./FilterCardForDoctor";
import { useSelector } from "react-redux";
import useGetAllDoctors from "@/hooks/useGetAllDoctors";

const Doctors = () => {
  // Extracting doctors from the Redux store
  // const { doctors = [] } = useSelector((store) => store.doctor);
  useGetAllDoctors();
  const doctors = useSelector((state) => state.doctor.doctors);
  console.log("Doctors in Redux:", doctors);

  return (
    <div className="bg-[#FEF9E1] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 px-4">
        {/* Filter Card Section */}
        <div className="mb-6">
          <FilterCardForDoctor />
        </div>

        {/* Doctors List */}
        {doctors.length <= 0 ? (
          <div className="text-center py-10">
            <span className="text-lg font-medium">No Doctors Available.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctors.map((doctor) => (
              <div key={doctor._id} className="flex justify-center">
                <Doctor doctor={doctor} /> {/* Pass doctor as a prop */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
