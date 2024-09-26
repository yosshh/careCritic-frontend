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
    <div>
      <h1 className='text-4xl text-center py-5 '>Hospitals List</h1>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital._id}>
            <h2 className='py text-2xl'>{hospital.hospitalName}</h2>
            {hospital.imageURL && <img src={hospital.imageURL} alt={hospital.hospitalName} />}
            <p>{hospital.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalList;


