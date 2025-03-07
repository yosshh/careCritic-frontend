import { createSlice } from "@reduxjs/toolkit";

const hospitalSlice = createSlice({
    name:"hospital",
    initialState:{
        singleHospital:null,
        hospitals: [],
        // searchCompanyByText: "",
    },
    reducers:{
        // actions
        setSingleHospital:(state,action)=> {
            state.singleHospital = action.payload;
        },
        setAllHospitals:(state, action)=> {
            state.hospitals = action.payload;
        },
        setAddReview: (state, action) => {
            if (state.singleHospital) {
                state.singleHospital.reviews.push(action.payload); 
            }
        },
        setAddAppointment: (state, action) => {
            if (state.singleHospital) {
                state.singleHospital.appointments.push(action.payload); 
            }
        // setSearchDoctorByText:(state, action)=> {
        //     state.searchDoctorByText = action.payload;
        // }
    }}
});
export const {setAllHospitals, setSingleHospital, setAddAppointment, setAddReview} = hospitalSlice.actions;
export default hospitalSlice.reducer