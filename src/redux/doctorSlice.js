import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
    name:"doctor",
    initialState:{
        singleDoctor:null,
        doctors: [],
        // searchCompanyByText: "",
    },
    reducers:{
        // actions
        setSingleDoctor:(state,action)=> {
            state.singleDoctor = action.payload;
        },
        setAllDoctors:(state, action)=> {
            state.doctors = action.payload;
        },
        // setSearchDoctorByText:(state, action)=> {
        //     state.searchDoctorByText = action.payload;
        // }
    }
});
export const {setAllDoctors, setSingleDoctor} = doctorSlice.actions;
export default doctorSlice.reducer