import contactInfo from "../ContactInfo";
import { PiButterflyThin, PiEnvelopeThin, PiPhoneCallThin, PiMapPinAreaThin, PiInstagramLogoThin } from "react-icons/pi";
export default function Socials(){
    return(
        <div className="flex flex-col gap-10 md:w-1/2">
            <h5 className="flex items-center gap-3 font-semibold text-2xl text-[#D40003]">
                <PiButterflyThin />
                Luxury Photography Services
            </h5>
            <p className="text-lg">Available for fashion shoots, editorial work, and brand campaigns worldwide. Let's collaborate to create imagery that defines luxury and elegance.</p>
            <ul className="flex flex-col gap-5">
                    <li className="flex items-center gap-3 text-lg text-[#D40003]">
                        <span className="bg-[#f03f4295] p-2 rounded-full"><PiEnvelopeThin /></span>{contactInfo.email}
                    </li>
                    <li className="flex items-center gap-3 text-lg text-[#D40003]">
                        <span className="bg-[#f03f4295] p-2 rounded-full"><PiPhoneCallThin /></span>{contactInfo.phone}
                    </li>
                    <li className="flex items-center gap-3 text-lg text-[#D40003]">
                        <span className="bg-[#f03f4295] p-2 rounded-full"><PiMapPinAreaThin /></span>{contactInfo.studios}
                    </li>
                    <li className="flex items-center gap-3 text-lg text-[#D40003]">
                        <span className="bg-[#f03f4295] p-2 rounded-full"><PiInstagramLogoThin /></span>{contactInfo.instagram}
                    </li>
            </ul>
        </div>
    )
}