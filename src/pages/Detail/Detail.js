import { useEffect, useState } from "react"
import { BiPlayCircle } from 'react-icons/bi'
import { AiOutlineStar } from 'react-icons/ai'
import { useParams } from "react-router-dom"
import Headers from "../../components/Headers"
import { useDispatch, useSelector } from "react-redux"
import { getDetailMovie } from "../../Redux/Actions/popularActions"

const Detail = ({token, setToken})=>{

    const [loading] = useState(false)
    const [search, setSearch] = useState('')
    
    const params = useParams()
    const dispatch = useDispatch()

    const {popular} = useSelector((state) => state)


    useEffect(() => {
        dispatch(getDetailMovie(params.id))
    },[dispatch, params])

    const getPosterURL = (poster_path) =>{
        return `https://www.themoviedb.org/t/p/original${poster_path}`
    }

    return(
        <div className="bg-white">
            <div className="w-screen">
                {loading ? (
                    <p className="text-center text-black"> Loading... </p>
                ): (
                    <div id="item1" className="relative carousel-item w-full ">
                        <Headers search={search} setSearch={setSearch} id={params.id} setToken={setToken} token={token}/>
                        <img src={getPosterURL(popular.details?.backdrop_path)} alt="..." className=" w-screen h-screen opacity-[5]" />
                        <div className="absolute text-white text-left font-sans left-5 top-44 pr-[47rem]">
                            <h1 className="text-7xl font-bold">{popular.details?.title}</h1>
                            <p className="pt-3">{popular.details?.release_date}</p>
                            <div className=" flex flex-row gap-3 mt-5">
                                {popular?.details?.genres?.map((item) => 
                                <p className="text-xl font-semibold">
                                    {item.name},
                                </p>)}
                            </div>
                            <p className="pt-12 text-xl">
                                {popular.details?.overview}
                            </p>
                            <p className="flex flex-row mt-10">
                                <AiOutlineStar className="text-2xl text-yellow-400"/> {popular.details?.vote_average}/10
                            </p>
                            <button className="btn btn-ghost text-white bg-red-700 font-medium rounded-3xl px-12 mt-7 " > 
                                <BiPlayCircle className="mr-2 text-xl"/>Watch Trailer
                            </button>
                        </div>
                    </div>   
                )}
            </div>
        </div>
    )
}

export default Detail