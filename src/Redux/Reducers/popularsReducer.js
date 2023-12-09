import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    populars: [],
    details : null
}

const popularsSlicer = createSlice({
    name: "popular",
    initialState,
    reducers:{
        getAllPopularReducer: (state, action) =>{
            state.populars = action.payload
        }, 
        getDetailMovieReducer: (state, action) =>{
            state.details = action.payload
        },
        getSearchMovieReducer: (state, action) =>{
            state.populars = action.payload
        }
    }
})

export const { getAllPopularReducer, getDetailMovieReducer, getSearchMovieReducer } = popularsSlicer.actions

export default popularsSlicer.reducer