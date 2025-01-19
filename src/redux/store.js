import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import doctorSlice from "./doctorSlice";
import hospitalSlice from "./hospitalSlice"

const store = configureStore({
  reducer: {
    auth: authSlice,
    doctor: doctorSlice,
    hospital: hospitalSlice
  },
});

export default store;
