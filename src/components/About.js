import pradaLogo from "../assets/prada.svg";
import lv from "../assets/LV.png";
import vogue from "../assets/Vogue.svg";
import ck from "../assets/calvin-klein.svg";
import vs from "../assets/vs.png";

export default function About(){
    
    const brands=[
        {id:0,name:"prada",url:pradaLogo},
        {id:1,name:"louie vuitton",url:lv},
        {id:2,name:"vogue",url:vogue},
        {id:3,name:"calvin klein",url:ck},
        {id:4,name:"victoria's secret",url:vs},
    ]

    return(
        <section id="about" className="flex flex-col items-center p-20">
            <h2 className="text-center text-[#D40003] text-5xl">About Barbara</h2>
            <div className="md:flex items-center gap-10 justify-evenly py-9">
                <article className="text-[1.2em] text-[#d22c2f]">
                    <p>
                        With over three years of experience in the fashion industry, Barbara Williams has established herself as one of the most sought-after event
                        photographers in the luxury fashion space Her unique ability to capture the raw emotion and elegance of high-fashion events has made her 
                        the go-to photographer for prestigious brands and exclusive gatherings.
                    </p>
                    <p className="mt-7"> 
                        Barbara's portfolio spans from intimate backstage moments at Vogue 
                        photoshoots to the grandeur of red carpet events at Cannes and the Met Gala. Her work with Louis Vuitton, Victoria's Secret, and Calvin Klein 
                        showcases her versatility in capturing both the commercial essence and artistic soul of fashion.
                    </p>
                </article>
                <img className="w-2/5 max-[600px]:w-full max-[600px]:mt-10 rounded-xl shadow-2xl" src={require("../assets/f4.webp")} alt="Barbara Williams with camera" />
            </div>
            <div className="w-[20em] md:w-full mt-5 p-5 flex shadow-2xl rounded-lg flex-col items-center gap-10">
                <p className="md:text-2xl ">Trusted by Global Luxury Brands</p>
                <div className="flex justify-evenly gap-8 md:gap-20">
                    {brands.map((brand)=>
                        <img className="max-[600px]:w-[2em]" key={brand.id} src={brand.url} alt={brand.name} />
                    )}
                </div>
            </div>
        </section>
    )
}