import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAllHospitals } from "@/redux/hospitalSlice";
import { HOSPITAL_API_END_POINT } from "@/constants";

const useGetAllHospitals = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllHospitals = async () => {
      try {
        const res = await axios.get(`${HOSPITAL_API_END_POINT}/get`, {
          withCredentials: true,
        });
        console.log("API Response:", res.data);

        // Dispatching the correct data array
        if (res.data.data) {
          dispatch(setAllHospitals(res.data.data));
        } else {
          console.error("No Hospital data found in the response.");
        }
      } catch (error) {
        console.error("Error fetching Hospitals:", error);
      }
    };
    fetchAllHospitals();
  }, [dispatch]);
};

export default useGetAllHospitals;
