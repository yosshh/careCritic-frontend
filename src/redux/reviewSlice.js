import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name:"review",
    initialState:{
        reviews: null
    },
    reducers:{
        // actions
        setReviews:(state,action)=> {
            state.reviews = action.payload;
        },
    }
});
export const {setReviews} = reviewSlice.actions;
export default reviewSlice.reducer