import React,{useState, useEffect} from 'react';
import logo from '../assets/logo.png';

export default function Header(){

    const [isTop, setTop] = useState(true)

    useEffect(()=>{
        const handleScroll = ()=>{
            setTop(window.scrollY === 0)
        }
        window.addEventListener("scroll",handleScroll)

        handleScroll()
        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])

    return(
        <header className={`z-1 w-full h-[7em] px-5 m-0 flex items-center justify-between fixed ${isTop ? "" : "shadow-lg"} ${isTop ? "" : "bg-[#fffafaf7]"}`}>
            <div className="w-[15rem] h-[9em] bg-[15rem] bg-cover " style={{ backgroundImage: `url(${logo})` }}></div>
            <nav>
                <ul className={`flex gap-5 ${isTop ? "text-neutral-50" : ""}`}>
                    <li className="hover:nav-link">About</li>
                    <li className='hover:nav-link'>Portfolio</li>
                    <li className='hover:nav-link'>Store</li>
                    <li className='hover:nav-link'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}