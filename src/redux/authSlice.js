import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading:false,
        user:null
    },
    reducers:{
        // actions
        
        
        setLoading:(state, action) => {
            state.loading = action.payload;
            // console.log("inside reducers");
        },
        setUser:(state, action) => {
            // console.log("Payload received in setUser:", action.payload);
            state.user = action.payload;
        }
    }
});
export const {setLoading, setUser} = authSlice.actions;
export default authSlice.reducer;