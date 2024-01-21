import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { Link } from 'react-router-dom';

export default function Movies(props) {

    const { user } = useContext(AuthContext);

    const moviesDetails = async () => {
        if (user?.email) {
            await setDoc(doc(db, "Users", `${user?.email}`), {
                moviesData: ({
                    id: props.id,
                    title: props.item.title,
                    img: props.item.backdrop_path,
                    poster: props.item.poster_path,
                    desc: props.item.overview,
                    lang: props.item.original_language,
                }),
            });
        } else {
            alert('Please log in your account');
        }
    }

    return (
        <Link to={`/movie/${props.item?.id}/`}>
            <div key={props.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' onClick={moviesDetails}>
                <img src={`https://image.tmdb.org/t/p/original/${props.item?.backdrop_path}`} alt={props.item} className='hover:scale-110' />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100'>
                    <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] '>{props.item?.title}</p>
                    {/* <p onClick={saveShow} className='absolute top-1 left-1'>
                        {like ? <AiFillHeart /> : <AiOutlineHeart />} </p> */}
                </div>
            </div>
        </Link>
    )
}
