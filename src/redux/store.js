import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import doctorSlice from "./doctorSlice";
import hospitalSlice from "./hospitalSlice"
import appointmentSlice from "./apponintmentSlice"

const store = configureStore({
  reducer: {
    auth: authSlice,
    doctor: doctorSlice,
    hospital: hospitalSlice,
    appointment: appointmentSlice,
  },
});

export default store;
