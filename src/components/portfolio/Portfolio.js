import {data} from "./data.js";
export default function Portfolio(){
    return(
        <section className="flex flex-col items-center gap-10 mt-20 px-5">
            <h3 className="text-3xl">Selected Works</h3>
            <section className="grid grid-cols-3 gap-4">
                 {data.map((item, idx) => {
                    // 50% chance to apply col-span-2, otherwise col-span-1
                    const colSpan = Math.random() > 0.5 ? "col-span-2" : "";
                    return (
                        <div key={idx} className={colSpan}>
                            <img
                                src={require(`../../${item.url.replace('.../', '')}`)}
                                alt={item.brand}
                                className=""
                            />
                            <h4 className="">{item.brand}</h4>
                            <p className="">{item.year}</p>
                        </div>
                    );
                })}
            </section>
        </section>
    )
}