import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import requests from '../Request'
import { Link } from 'react-router-dom'
import { db } from '../Firebase'
import { doc, setDoc } from 'firebase/firestore'
import AuthContext from '../Context/AuthContext'

export default function Main() {
    const [movies, setMovies] = useState([])

    const { user } = useContext(AuthContext);
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results);
        })
    }, [])

    const newString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    }

    const moviesDetails = async () => {
        if (user?.email) {
            await setDoc(doc(db, "Users", `${user?.email}`), {
                moviesData: ({
                    id: movie.id,
                    title: movie.title,
                    img: movie.backdrop_path,
                    poster: movie.poster_path,
                    desc: movie.overview,
                    lang: movie.original_language,
                }),
            });
        } else {
            alert('Please log in your account');
        }
    }

    return (
        <>
            <div className='w-full h-[550px] text-white'>
                <div className='w-full h-full'>
                    <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                    <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                    <div className='absolute w-full top-[30%] p-4 md:p-8'>
                        <h1 className='text-3xl md:text-5xl font-bold mb-2'>{movie?.title}</h1>
                        <div>
                            <Link to={`/movie/${movie?.id}`}>
                                <button className='my-1 bg-gray-300 hover:bg-red-700 text-black  py-2 px-8 rounded-md' onClick={moviesDetails}>Play</button>
                            </Link>
                        </div>
                        <p className='text-gray-400 text-sm my-1'>Released : {movie?.release_date}</p>
                        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{newString(movie?.overview, 100)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
