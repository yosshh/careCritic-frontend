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
        // setSearchDoctorByText:(state, action)=> {
        //     state.searchDoctorByText = action.payload;
        // }
    }
});
export const {setAllHospitals, setSingleHospital} = hospitalSlice.actions;
export default hospitalSlice.reducer