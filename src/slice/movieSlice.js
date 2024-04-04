import { createSlice } from "@reduxjs/toolkit"; 


const initialState = {
    movie: [ ],
    topRated:[],
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovie:(state, action ) => {
            state.movie = action.payload
        },
        setTopRated:(state, action ) => {
            state.topRated = action.payload
        }
    },
});

export const { setMovie, setTopRated } = movieSlice.actions;

export default movieSlice.reducer