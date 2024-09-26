// src/services/hospitalService.js
import axios from 'axios';

const API_URL =  "http://localhost:8000/api/v1"; 


// console.log("API URL:", process.env.REACT_APP_BACKEND_URL);

export const getHospitals = async () => {
  try {
    const response = await axios.get(`${API_URL}/hospitals`);
    console.log("Fetched hospitals:", response.data); // Log the fetched data
    return response.data; 
  } catch (error) {
    console.error("Error fetching hospitals:", error);
    throw error; 
  }
};


