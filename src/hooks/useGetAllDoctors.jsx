import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAllDoctors } from "@/redux/doctorSlice";
import { DOCTOR_API_END_POINT } from "@/constants";

const useGetAllDoctors = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        const res = await axios.get(`${DOCTOR_API_END_POINT}/get`, {
          withCredentials: true,
        });
        console.log("API Response:", res.data);

        // Dispatching the correct data array
        if (res.data.data) {
          dispatch(setAllDoctors(res.data.data));
        } else {
          console.error("No doctor data found in the response.");
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchAllDoctors();
  }, [dispatch]);
};

export default useGetAllDoctors;
