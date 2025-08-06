import contactInfo from "../ContactInfo";
import { PiButterflyThin, PiEnvelopeThin, PiPhoneCallThin, PiMapPinAreaThin, PiInstagramLogoThin } from "react-icons/pi";
export default function Socials(){
    return(
        <div>
            <h5>
                <PiButterflyThin />
                Luxury Photography Services
            </h5>
            <p>Available for fashion shoots, editorial work, and brand campaigns worldwide. Let's collaborate to create imagery that defines luxury and elegance.</p>
            <ul>
                <li>
                    <p>
                        <PiEnvelopeThin />{contactInfo.email}
                    </p>
                    <p>
                        <PiPhoneCallThin />{contactInfo.phone}
                    </p>
                    <p>
                        <PiMapPinAreaThin />{contactInfo.studios}
                    </p>
                    <p>
                        <PiInstagramLogoThin />{contactInfo.instagram}
                    </p>
                </li>
            </ul>
        </div>
    )
}