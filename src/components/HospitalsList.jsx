import  { useEffect, useState } from 'react';
import { getHospitals } from '../services/hospitalService.js'; // Ensure the correct import path

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHospitals = async () => {
    try {
      const response = await getHospitals();
      console.log("Fetched hospitals:", response);
      
      // Assuming the response structure includes a data property with the hospitals array
      if (Array.isArray(response.data)) {
        setHospitals(response.data);
      } else {
        setError(new Error("Data is not an array"));
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching hospitals: {error.message}</p>;

  return (
    <div className='bg-[#C0EBA6] w-full flex flex-col items-center py-5 px-4'>
  <h1 className='text-[#4A4947] text-5xl mb-6'>Hospital List</h1>
  <div className='w-full flex flex-wrap justify-center gap-6'>
    {hospitals.map((hospital) => (
      <div key={hospital._id} className='w-1/3 bg-white rounded-xl hover:bg-slate-200 shadow-xl p-4'>
        {hospital.hospitalImage && (
          <img className='h-40 w-full object-cover rounded-xl hover:scale-105' src={hospital.hospitalImage} alt={hospital.hospitalName} />
        )}
        <div className='p-2'>
          <h2 className='font-bold text-lg'>{hospital.hospitalName}</h2>
          <h5 className='font-semibold'>{hospital.address}</h5>
          <p className='text-sm text-gray-600'>Rating: {hospital.rating}</p>
          <div className='mt-2'>
            <a role='button' href='#' className='text-white bg-purple-600 px-3 py-1 hover:bg-purple-400 rounded-md'>Read More</a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default HospitalList;


