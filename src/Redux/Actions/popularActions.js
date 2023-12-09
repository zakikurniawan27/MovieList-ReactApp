import axios from "axios";
import { getAllPopularReducer, getDetailMovieReducer, getSearchMovieReducer } from "../Reducers/popularsReducer";


export const popularActions = () => async (dispatch)=>{
    try {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/popular`,{
                params:{
                    api_key: "e699f84b586a7cdbe30dfe41d24f0f86",
                    page: '1'
                }
            }
        )
        dispatch(getAllPopularReducer(data))
    } catch (error) {
        throw error
    }
}

export const getDetailMovie = (id) => async(dispatch) =>{
    try {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}`,{
                params:{
                    api_key: "e699f84b586a7cdbe30dfe41d24f0f86"
                }
            }
        )
        dispatch(getDetailMovieReducer(data))
    } catch (error) {
        throw(error)
    }
}

export const getSearchMovie = (query) => async(dispatch) =>{
    try {
        if(!query) return
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/search/movie`,{
                params:{
                    api_key: "e699f84b586a7cdbe30dfe41d24f0f86",
                    query: query
                }
            }
        )
        dispatch(getSearchMovieReducer(data))
    } catch (error) {
        throw(error)
    }
}

