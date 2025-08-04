import {data} from "./data.js";
export default function Portfolio(){
    return(
        <section className="flex flex-col items-center gap-10 mt-20 px-5">
            <h3 className="text-3xl">Selected Works</h3>
            <section className="grid grid-cols-3 gap-12">
                 {data.map((item, idx) => {
                    const colSpan = idx%4 === 0 ? "col-span-2" : "";
                    const height = idx%4 === 0 ? "max-h-[50em] " : "max-h-fit";
                    const dir = idx%2===0? "rtl" : undefined;
                    return (
                        <div key={idx} className={`${colSpan} ${height} rounded-lg shadow-xl`} dir={dir}>
                            <img
                                src={require(`../../${item.url.replace('.../', '')}`)}
                                alt={item.brand}
                                className="h-full w-full rounded-lg"
                            />
                            <div className="relative top-[-8em] px-5 text-left">
                                <h4 className="font-semibold text-[#F9ECE3] text-2xl">{item.brand}</h4>
                                <p className="text-[#ffc7a4] float-left border-b-2 w-fit border-b-[#d22c2f] hover:w-full transition-all hover:transition:discrete">{item.year}</p>
                            </div>
                        </div>
                    );
                })}
            </section>
        </section>
    )
}