import { createSlice } from "@reduxjs/toolkit";

const appointmentSlice = createSlice({
    name:"doctor",
    initialState:{
        appointments: null
    },
    reducers:{
        // actions
        setAppointment:(state,action)=> {
            state.appointments = action.payload;
        },
    }
});
export const {setAppointment} = appointmentSlice.actions;
export default appointmentSlice.reducer