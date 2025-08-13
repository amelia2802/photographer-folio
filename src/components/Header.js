import {useState, useEffect} from 'react';
import logo from '../assets/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header(){

    const [isTop, setTop] = useState(true)
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            setTop(window.scrollY === 0)
        }
        window.addEventListener("scroll",handleScroll)

        handleScroll()
        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])

    function toggleMenu(){
        setOpen(!open)
    }
    return(
        <header className={`z-10 w-full h-[7em]  m-0 flex md:items-center justify-around md:justify-between fixed ${isTop ? "" : "shadow-lg"} ${isTop ? "" : "bg-[#fffafaf7]"}`}>
            <div className="w-[9em] md:w-[15rem] h-[9em] bg-[9em] md:bg-[15rem] bg-cover " style={{ backgroundImage: `url(${logo})` }}></div>
            <nav className="flex flex-col gap-5 pr-12">
                <button onClick={toggleMenu} className="relative top-12 p-2 text-[#FF4649] rounded-full text-xl hover:text-[#D40003] md:hidden"><RxHamburgerMenu /></button>
                <ul className={`flex gap-5 ${isTop ? "text-neutral-50" : ""} max-[600px]:${open ? "flex" : "hidden"} max-[600px]:flex-col max-[600px]:items-center max-[600px]:bg-[#fffafaf7] max-[600px]:text-gray-900 max-[600px]:p-5 `}>
                    <li className="hover:nav-link"><a href="#about">About</a></li>
                    <li className='hover:nav-link'><a href="#portfolio">Portfolio</a></li>
                    <li className='hover:nav-link'><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}