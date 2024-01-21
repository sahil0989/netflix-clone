import React, { useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import AuthContext from '../Context/AuthContext';
import { db } from '../Firebase';
import { FaShareAlt } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    onSnapshot(doc(db, "Users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.moviesData);
    });
  }, [user?.email])

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
    } else {
      alert('Please log in to like a movie.');
    }
  }

  return (
    <>
      <div className="w-full xl:h-screen relative text-white">
        <img src={`https://image.tmdb.org/t/p/original/${movies?.img}`} alt={movies.title} className='opacity-10 w-full hidden xl:inline-block h-full object-cover' />
        <div className='xl:bg-main bg-dry flex-col xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0' >
          <div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-col py-10 lg:py-20 gap-8'>
            <div className='xl:col-span-1 w-full xl:order-none order-last h-header bg-zinc-900  border border-gray-800 rounded-lg overflow-hidden'>
              <img src={`https://image.tmdb.org/t/p/original/${movies?.poster}`} alt={movies.title} className='w-full h-full object-cover' />
            </div>
            <div className='col-span-2 md:grid grid-cols-5 gap-4 items-center'>
              <div className='col-span-3 flex flex-col gap-10' >
                {/* title */}
                <h1 className='xl:text-4xl capitalize font-sans text-2xl font-bold'>
                  {movies.title}
                </h1>

                {/* flex items */}
                <div className='flex items-center font-medium gap-4 text-gray-200'>
                  <div className='flex-col bg-red-700 text-xs px-2 py-1 rounded-md scale-125'>
                    HD 4k
                  </div>
                </div>

                {/* description */}
                <p className='text-sm leading-7'>{movies?.desc}</p>
                <div className='grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main rounded-lg justify-center' >
                  {/* share */}
                  <div className='col-span-1 flex-col border-r'>
                    <button className='w-10 h-10 flex flex-col rounded-lg bg-white hover:bg-red-600 bg-opacity-20 items-center justify-center'>
                      <FaShareAlt />
                    </button>

                  </div>

                  <div className='col-span-2 flex-col font-medium text-sm'>
                    <p>Language : {' '}<span className='ml-2 truncate'>{movies?.lang}</span></p>

                  </div>
                  <p onClick={saveShow} className='scale-125'>
                    {like ? <AiFillHeart /> : <AiOutlineHeart />}</p>
                  <div className='sm:col-span-2 col-span-3 flex justify-end font-medium text-sm'>
                    <button className="mx-1 hover:bg-red-700 transition border-2 border-red-600 rounded-full flex-row gap-4 w-full sm:py-3 py-2">
                      Watch
                    </button>
                  </div>
                    <a href='/home' className='sm:col-span-2 col-span-3 flex justify-end font-medium text-sm'>
                      <button className="mx-1 hover:bg-red-700 transition border-2 border-red-600 rounded-full flex-row gap-4 w-full sm:py-3 py-2">
                        Back
                      </button>
                    </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
