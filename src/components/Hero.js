import { useState } from 'react';
import bg1 from '../assets/f3.jpg';
export default function Hero(){
    const [activeBtn, setActiveBtn] = useState('explore');    

    return(
        <main 
            className="z-0 h-[45em] flex flex-col items-center bg-center bg-neutral-400 bg-cover bg-no-repeat bg-blend-multiply"
            style={{ backgroundImage: `url(${bg1})` }}
        >
            <img className='w-[45em] h-full relative top-[-6em]' src={require("../assets/logo.png")} alt="logo" />
            <div className='relative top-[-25em] text-center w-[50%]'>
                <h1 className='mb-10 text-[#F9ECE3] font-bold text-[2em]'>Fashion Event Photographer</h1>
                <p className='text-[#F4C5BF] text-[1.3em]'>
                    Capturing the essence of high fashion through the lens of 
                    elegance. 3+ years of experience with Vogue, Louis Vuitton,
                    Victoria's Secret, and Calvin Klein.
                </p>
            </div>
            <div className='flex gap-10 relative top-[-20em]'>
                <button
                    className={`btn${activeBtn === 'explore' ? ' active' : ''}`}
                    onClick={() => setActiveBtn('explore')}
                >
                    Explore Portfolio
                </button>
                <button
                    className={`btn${activeBtn === 'contact' ? ' active' : ''}`}
                    onClick={() => setActiveBtn('contact')}
                >
                    Get in Touch
                </button>
            </div>
            <button className='w-8 h-14 absolute top-[38em] left-[50%] text-center bg-[rgba(0, 0, 0, 0.256)] border-2 rounded-[6em] m-0'>
               <p className='relative top-[-.5em] animate-bounce animate-infinite text-[#fff]'>|</p>
               </button>
        </main>
    )
}