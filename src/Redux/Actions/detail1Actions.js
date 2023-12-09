import axios from "axios";
import { getDetail1MovieReducer, getDetail2MovieReducer, getDetail3MovieReducer } from "../Reducers/details1Reducer";

export const getDetail1= () => async(dispatch) =>{
    try {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/453395`,{
                params:{
                    api_key: 'e699f84b586a7cdbe30dfe41d24f0f86'
                }
            }
        )
        dispatch(getDetail1MovieReducer(data))
    } catch (error) {
        throw(error)
    }
}

export const getDetail2= () => async(dispatch) =>{
    try {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/810693`,{
                params:{
                    api_key:'604903f555635f1a1b0968cd4bde010e'
                }
            }
        )
        dispatch(getDetail2MovieReducer(data))
    } catch (error) {
        throw(error)
    }
}

export const getDetail3= () => async(dispatch) =>{
    try {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/634649`,{
                params:{
                    api_key: '604903f555635f1a1b0968cd4bde010e'
                }
            }
        )
        dispatch(getDetail3MovieReducer(data))
    } catch (error) {
        throw(error)
    }
}