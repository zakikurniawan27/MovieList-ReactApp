import axios from "axios";
import { getAllMovie1Reducer, getAllMovie2Reducer, getAllMovie3Reducer } from "../Reducers/allmovies1Reducer";

export const getAllMovie1= () => async(dispatch) =>{
    try {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing`,{
                params:{
                    api_key: 'e699f84b586a7cdbe30dfe41d24f0f86',
                    page: '1'
                }
            }
        )
        dispatch(getAllMovie1Reducer(data))
    } catch (error) {
        throw(error)
    }
}

export const getAllMovie2 = () => async(dispatch) =>{
    try {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing`,{
                params:{
                    api_key: 'e699f84b586a7cdbe30dfe41d24f0f86',
                    page: '2'
                }
            }
        )
        dispatch(getAllMovie2Reducer(data))
    } catch (error) {
        throw(error)
    }
}

export const getAllMovie3 = () => async(dispatch) =>{
    try {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing`,{
                params:{
                    api_key: 'e699f84b586a7cdbe30dfe41d24f0f86',
                    page: '3'
                }
            }
        )
        dispatch(getAllMovie3Reducer(data))
    } catch (error) {
        throw(error)
    }
}