import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null, // Will store the user object with fields like role, name, etc.
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload; // Payload should be the user object
      state.error = null; // Clear any errors
    },
    setError: (state, action) => {
      state.error = action.payload; // Payload should be the error message
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setLoading, setUser, setError, logout } = authSlice.actions;
export default authSlice.reducer;
