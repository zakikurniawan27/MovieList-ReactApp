import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {FiHome} from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { getAllMovie3 } from "../../Redux/Actions/allMovie1Actions"

const AllMovie = ()=>{
    const [loading] = useState(false)
    const {allmovies3} = useSelector((state) => state.allMovie3)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllMovie3())
    },[dispatch])

    const getPosterURL = (poster_path) =>{
        return `https://www.themoviedb.org/t/p/original${poster_path}`
    }

    return(
        <div className="bg-white">
            <div className="py-5 pl-5">
                <p className="font-semibold text-3xl text-black">AllMovie</p>
            </div>
            <div className="grid grid-cols-5 gap-y-4 gap-x-4 ml-7 mt-7">
            {loading ? (
                <p className="text-center"> Loading... </p>
            ):(
                allmovies3.results?.map((item) => (
                    <>
                         <div className="card w-64 bg-transparent shadow-xl" >
                            <figure className="pt-10" key={item.id}>
                                <img src={getPosterURL(item.poster_path)} alt="poster" className="rounded-xl cursor-pointer" 
                                onClick={() => navigate(`/detail/${item.id}`)}/>
                            </figure>
                         </div>
                    </>
                ))
            )}
            </div>
            <div className="btn-group flex justify-center pt-7">
                <button className="btn btn-outline" onClick={()=> navigate('/seeallmovie-page2')}>Previous</button>
                <button className="btn btn-outline" onClick={()=> navigate('/')}><FiHome/></button>
                <button className="btn btn-outline">Next</button>
            </div>
        </div>
        
    )
}

export default AllMovie