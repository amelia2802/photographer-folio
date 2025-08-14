import {PiEnvelopeThin, PiPhoneCallThin, PiMapPinAreaThin, PiInstagramLogoThin } from "react-icons/pi";
import contactInfo from "./ContactInfo";

export default function Footer(){

    return(
        <footer className="md:flex flex-col h-[100%] bg-[#ead5c4] mt-14 p-6">
            <div className="flex max-[600px]:flex-col items-center justify-between px-12">
                <div className='flex items-center justify-center mt-5 max-[600px]:mb-5'>
                    <h1 className={`font-custom relative text-lg -right-5 md:-right-14 text-[#D40003] font-semibold md:text-xl`}>BARBARA WILLIAMS</h1>
                    <img className='w-[1.5em] md:w-[2.5em] md:left-6 h-auto object-cover -top-4 md:-top-6 relative ' src={  require("../assets/alt-icon.png")} alt="logo" />
                </div>
                <div className="flex gap-5">
                    <a className="flex text-2xl p-2 rounded-full bg-[#f03f4295] text-[#D40003] hover:submit" href={contactInfo.email}>
                        <PiEnvelopeThin />
                    </a>
                    <a className="flex text-2xl p-2 rounded-full bg-[#f03f4295] text-[#D40003] hover:submit" href={contactInfo.phone}>
                        <PiPhoneCallThin />
                    </a>
                    <a className="flex text-2xl p-2 rounded-full bg-[#f03f4295] text-[#D40003] hover:submit" href={contactInfo.studios}>
                        <PiMapPinAreaThin />
                    </a>
                    <a className="flex text-2xl p-2 rounded-full bg-[#f03f4295] text-[#D40003] hover:submit" href={contactInfo.instagram}>
                        <PiInstagramLogoThin />
                    </a>
                </div>
                <nav>
                    <ul className="flex gap-5 mt-5">
                        <li className="hover:nav-link"><a href="#about">About</a></li>
                        <li className='hover:nav-link'><a href="#portfolio">Portfolio</a></li>
                        <li className='hover:nav-link'><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <p className="text-center">&copy; All rights reserved. Barbara Williams Photography. {contactInfo.year}</p>
        </footer>
    )
}