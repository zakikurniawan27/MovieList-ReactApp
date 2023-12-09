import { useEffect, useState } from "react"
import { BiPlayCircle, BiRightArrowAlt } from 'react-icons/bi'
import { useNavigate } from "react-router-dom"
import Headers from "../../components/Headers"
import { useDispatch, useSelector } from "react-redux"
import { getSearchMovie, popularActions } from "../../Redux/Actions/popularActions"
import { getDetail1 } from "../../Redux/Actions/detail1Actions"
import { getDetail2 } from "../../Redux/Actions/detail1Actions"
import { getDetail3 } from "../../Redux/Actions/detail1Actions"




function Home({setToken, token}){
    const [loading] = useState(false)
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {populars} = useSelector((state) => state.popular)
    const {details1} = useSelector((state) => state.detail1)
    const {details2} = useSelector((state) => state.detail2)
    const {details3} = useSelector((state) => state.detail3)

    
    
  


    useEffect(() =>{
        dispatch(popularActions())
        dispatch(getDetail1())
        dispatch(getDetail2())
        dispatch(getDetail3())
        dispatch(getSearchMovie(search))
    },[dispatch, search])

    const getPosterURL = (poster_path) =>{
        return `https://www.themoviedb.org/t/p/original${poster_path}`
    }
    
    return(
        <div className="bg-white">
            <div className="carousel w-full h-screen">
                <div id="item1" className="relative carousel-item w-full ">
                    <Headers search={search} setSearch={setSearch} setToken={setToken} token={token}/>
                    <img src={getPosterURL(details1.backdrop_path)} alt="..." className=" w-full" />
                    <div className="absolute text-white text-left font-sans left-5 top-44 pr-[47rem]">
                        <h1 className="text-7xl font-bold">{details1.title}</h1>
                        <p className="mt-5 text-2xl">
                            {details1.overview}
                        </p>
                        <button className="btn btn-ghost text-white bg-red-700 font-medium rounded-3xl px-12 mt-5 " > 
                            <BiPlayCircle className="mr-2 text-xl"/>Watch Trailer
                        </button>
                    </div>
                    <div className="absolute z-30 flex justify-center w-full py-2 gap-1 bottom-5">
                        <a href="#item1" type="button" className="btn btn-xs rounded-full"> </a> 
                        <a href="#item2" type="button" className="btn btn-xs rounded-full"> </a> 
                        <a href="#item3" type="button" className="btn btn-xs rounded-full"> </a> 
                    </div>
                </div> 
                <div id="item2" className="relative carousel-item w-full">
                    <Headers search={search} setSearch={setSearch}  setToken={setToken} token={token}/>
                    <img src={getPosterURL(details2.backdrop_path)} alt="..." className="w-full" />
                    <div className="absolute text-white text-left font-sans left-5 top-44 pr-[47rem]">
                        <h1 className="text-7xl font-bold">{details2.title}</h1>
                        <p className="mt-5 text-2xl">
                            {details2.overview}
                        </p>
                        <button className="btn btn-ghost text-white bg-red-700 font-medium rounded-3xl px-12 mt-5 " > 
                            <BiPlayCircle className="mr-2 text-xl"/>Watch Trailer
                        </button>
                    </div>
                    <div className="absolute z-30 flex justify-center w-full py-2 gap-1 bottom-5">
                        <a href="#item1" type="button" className="btn btn-xs rounded-full"> </a> 
                        <a href="#item2" type="button" className="btn btn-xs rounded-full"> </a> 
                        <a href="#item3" type="button" className="btn btn-xs rounded-full"> </a> 
                    </div>
                </div> 
                <div id="item3" className="relative carousel-item w-full">
                <Headers search={search} setSearch={setSearch} setToken={setToken} token={token}/>
                    <img src={getPosterURL(details3.backdrop_path)} alt="..." className="w-full" />
                    <div className="absolute text-white text-left font-sans left-5 top-44 pr-[47rem]">
                        <h1 className="text-7xl font-bold">{details3.title}</h1>
                        <p className="mt-5 text-2xl">
                            {details3.overview}
                        </p>
                        <button className="btn btn-ghost text-white bg-red-700 font-medium rounded-3xl px-12 mt-5 " > 
                            <BiPlayCircle className="mr-2 text-xl"/>Watch Trailer
                        </button>
                    </div>
                    <div className="absolute z-30 flex justify-center w-full py-2 gap-1 bottom-5">
                        <a href="#item1" type="button" className="btn btn-xs rounded-full"> </a> 
                        <a href="#item2" type="button" className="btn btn-xs rounded-full"> </a> 
                        <a href="#item3" type="button" className="btn btn-xs rounded-full"> </a> 
                    </div>
                </div> 
            </div>
            {search ? (
                <div className="py-5 pl-5">
                    <p className="font-semibold text-3xl text-black">Search Result "{search}"</p>
                </div>
            ) : (
                <div className="py-5 pl-5">
                    <p className="font-semibold text-3xl text-black">Popular Movie</p>
                </div>
            )}
            <div className="flex justify-end gap-3 pr-5 ">
                <p className="text-red-600 cursor-pointer hover:text-red-900" onClick={() => navigate('/seeallmovie')}>
                    See All Movie
                    <BiRightArrowAlt className="text-red-600 inline text-lg"/>
                </p>
            </div>
            <div className="grid grid-cols-5 gap-y-4 gap-x-4 ml-7 mt-7">
            {loading ? (
                <p className="text-center"> Loading... </p>
            ):(
                populars.results?.map((item) => (
                    <>
                        <div className="card w-64 bg-transparent shadow-xl">
                            <figure className="pt-10"  key={item.id}>
                                <img src={getPosterURL(item.poster_path)} alt="poster" className="rounded-xl cursor-pointer" 
                                onClick={() => navigate(`/detail/${item.id}`)} />
                            </figure>
                         </div>
                    </>
                ))
            )}
            </div>
            
        </div>
    )
}


export default Home