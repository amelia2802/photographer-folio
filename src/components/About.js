export default function About(){
    return(
        <section>
            <h2 className="p-20 text-center text-[#D40003] bolder text-[3em]">About Barbara</h2>
            <div className="flex gap-10 justify-evenly p-9">
                <article className="text-[1.2em] text-[#F36B6D]">
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
                <img className="w-2/5 rounded-xl shadow-2xl" src={require("../assets/f4.jpg")} alt="Barbara Williams with camera" />
            </div>
        </section>
    )
}