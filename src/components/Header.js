import {useState, useEffect} from 'react';
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
        <header className={`z-10 w-full h-[7em]  m-0 flex md:items-center justify-between fixed ${isTop ? "" : "shadow-lg"} ${isTop ? "" : "bg-[#fffafaf7]"}`}>
            <div className='flex items-center justify-center'>
                <h1 className={`font-custom relative text-sm -right-5 md:-right-14 ${isTop ? "text-[#F9ECE3]" : "text-[#D40003]"} font-semibold md:text-xl`}>BARBARA WILLIAMS</h1>
                <img className='w-[1.5em] md:w-[2.5em] md:left-6 h-auto object-cover -top-4 md:-top-6 relative ' src={isTop ? require("../assets/icon.png") : require("../assets/alt-icon.png")} alt="logo" />
            </div>
            <nav className="flex flex-col gap-5 pr-12">
                <button onClick={toggleMenu} className="relative z-10 top-12 left-5 p-2 text-[#FF4649] rounded-full text-xl hover:text-[#D40003] md:hidden"><RxHamburgerMenu /></button>
                <ul className={`max-[600px]:absolute max-[600px]:right-0 max-[600px]:py-24 max-[600px]:shadow-lg flex gap-5 ${isTop ? "text-neutral-50" : ""} ${open ? "max-[600px]:flex" : "max-[600px]:hidden"} max-[600px]:flex-col max-[600px]:items-center max-[600px]:bg-[#fffafaf7] max-[600px]:text-gray-900 max-[600px]:p-5 `}>
                    <li className="hover:nav-link"><a href="#about">About</a></li>
                    <li className='hover:nav-link'><a href="#portfolio">Portfolio</a></li>
                    <li className='hover:nav-link'><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}