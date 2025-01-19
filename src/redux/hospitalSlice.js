import { createSlice } from "@reduxjs/toolkit";

const hospitalSlice = createSlice({
    name:"hospital",
    initialState:{
        // singleDoctor:null,
        hospitals: [],
        // searchCompanyByText: "",
    },
    reducers:{
        // actions
        // setSingleDoctor:(state,action)=> {
        //     state.singleDoctor = action.payload;
        // },
        setAllHospitals:(state, action)=> {
            state.hospitals = action.payload;
        },
        // setSearchDoctorByText:(state, action)=> {
        //     state.searchDoctorByText = action.payload;
        // }
    }
});
export const {setAllHospitals} = hospitalSlice.actions;
export default hospitalSlice.reducer