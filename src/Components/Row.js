import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Movies from './Movies';

export default function Row({ title, fetchURL, rowID }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        })
    }, [fetchURL]);

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div className='group'>
            <div className='flex justify-items-end items-center'>
                <h2 className='text-white font-bold md:text-xl p-4 w-[50%]'>{title}</h2>
                <div className='flex justify-end w-[50%] arrowBtn'>
                    <div onClick={slideLeft} className='text-white px-2 rounded-full font-extrabold text-2xl opacity-40 hover:opacity-100 cursor-pointer hidden group-hover:block z-50'>&lt;</div>
                    <div onClick={slideRight} className='text-white px-2 rounded-full font-extrabold text-2xl opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'>&gt;</div>

                </div>
            </div>
            <div className='relative flex items-center'>

                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((item, id) => {
                        return <Movies key={id} id={id} item={item} />
                    })}
                </div>

            </div>
        </div>
    )
}
