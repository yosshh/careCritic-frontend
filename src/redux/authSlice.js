import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  error: null,
  doctor: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      const userData = action.payload;

      // Explicitly set null if payload is null
      state.user = userData?.user || userData || null;
      state.error = null;
    },
    setDoctor: (state, action) => {
      const doctorData = action.payload;
      console.log("Updated doctor:", doctorData);
    
      // Assuming doctor data is always a flat object
      state.doctor = doctorData?.doctor || doctorData || null;
      state.error = null;
    },    
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLogout: (state) => {
      // Clear all relevant state fields
      state.user = null;
      state.doctor = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setLoading, setUser, setError, setLogout, setDoctor } = authSlice.actions;
export default authSlice.reducer;
