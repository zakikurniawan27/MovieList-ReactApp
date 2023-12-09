import { createSlice } from "@reduxjs/toolkit"

const initialState ={
   allmovies1: [],
   allmovies2: [],
   allmovies3: []
}

const allMovie1Slicer = createSlice({
    name:"allmovie",
    initialState,
    reducers: {
        getAllMovie1Reducer: (state, action) =>{
            state.allmovies1 = action.payload
        },
        getAllMovie2Reducer: (state, action) =>{
            state.allmovies2 = action.payload
        },
        getAllMovie3Reducer: (state, action) =>{
            state.allmovies3 = action.payload
        }
    }
})

export const {getAllMovie1Reducer, getAllMovie2Reducer, getAllMovie3Reducer} = allMovie1Slicer.actions

export default allMovie1Slicer.reducer