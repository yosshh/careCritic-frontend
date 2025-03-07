import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  error: null,
  doctor: null,
  hospital: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      console.log("Setting User in Redux:", action.payload);
      state.user = action.payload || null;
      state.doctor = null;
      state.hospital = null;
      state.error = null;
    },
    setDoctor: (state, action) => {
      console.log("Setting Doctor in Redux:", action.payload);
      state.doctor = action.payload || null;
      state.user = null;
      state.hospital = null;
      state.error = null;
    },    
    setHospital: (state, action) => {
      console.log("Setting Hospital in Redux:", action.payload);
      state.hospital = action.payload || null;
      state.user = null;
      state.doctor = null;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLogout: (state) => {
      console.log("Logging out...");
      state.user = null;
      state.doctor = null;
      state.hospital = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setLoading, setUser, setError, setLogout, setDoctor, setHospital } = authSlice.actions;
export default authSlice.reducer;
