import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

export default function Navbar() {

    const [color, setColor] = useState('bg-transparent');
    const [icon, setIcon] = useState({icon1:"block", icon2: "hidden"})
    const [width, setWidth] = useState('w-0')
    
    const changeColor = () => {
        if (window.scrollY >= 70) {
            setColor('bg-red-700');
        } else {
            setColor('bg-transparent');
        }
    }

    const changesvg = () => {
        if(icon.icon1 == "block"){
            setIcon({icon1:"hidden", icon2: "block"})
            setWidth("w-[180px]");
        } else {
            setIcon({icon1:"block", icon2: "hidden"})
            setWidth("w-0")
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <>
            <div className={`fixed flex w-screen items-center gap-5 ${color} py-4 pl-10 justify-between pr-10 z-50`}>
                <div className='flex gap-5 items-center'>
                    <div className='w-24 h-12 text-black text-3xl font-bold pl-3 pt-1'>
                        Logo
                    </div>
                    <div className='grid grid-flow-col gap-4 text-white nav_link'>
                        <div>
                            <a>Link1</a>
                        </div>
                        <div>
                            <a>Link2</a>
                        </div>
                        <div>
                            <a>Link3</a>
                        </div>
                        <div>
                            <a>Link4</a>
                        </div>
                        <div>
                            <a>Link5</a>
                        </div>
                    </div>
                </div>

                <div className='text-4xl hidden threeLine'>
                    <div className={`${icon.icon1}`} onClick={changesvg}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg></div>

                    <div className={`${icon.icon2}`} onClick={changesvg}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    </div>
                </div>
            </div>
            <div className={`${width} h-screen fixed bg-black overflow-x-hidden`}>
            <div className='flex justify-center flex-col gap-5 items-center pt-4'>
                    <div className='w-24 h-12 text-red-700 text-3xl font-bold pl-3 pt-1'>
                        Logo
                    </div>
                    <div className='pt-20 grid text-white gap-5 text-xl'>
                        <div>
                            <a>Link1</a>
                        </div>
                        <div>
                            <a>Link2</a>
                        </div>
                        <div>
                            <a>Link3</a>
                        </div>
                        <div>
                            <a>Link4</a>
                        </div>
                        <div>
                            <a>Link5</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
