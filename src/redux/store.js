import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import doctorSlice from "./doctorSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    doctor: doctorSlice,
  },
});

export default store;
