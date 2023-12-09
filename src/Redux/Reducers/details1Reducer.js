import { createSlice } from "@reduxjs/toolkit"

const initialState ={
   details1: [],
   details2: [],
   details3: []
}

const detailSlicer = createSlice({
    name:"detail1",
    initialState,
    reducers: {
        getDetail1MovieReducer: (state, action) =>{
            state.details1 = action.payload
        },
        getDetail2MovieReducer: (state, action) =>{
            state.details2 = action.payload
        },
        getDetail3MovieReducer: (state, action) =>{
            state.details3 = action.payload
        }
    }
})

export const {getDetail1MovieReducer, getDetail2MovieReducer, getDetail3MovieReducer} = detailSlicer.actions

export default detailSlicer.reducer