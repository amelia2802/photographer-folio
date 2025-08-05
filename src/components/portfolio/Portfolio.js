import {data} from "./data.js";
export default function Portfolio(){

    const typeCounts = data.reduce((acc, item) => {
        acc[item.type] = (acc[item.type] || 0) + 1;
        return acc;
    }, {});

    const categories = [
        { id: "all", label: "All Work", count: data.length },
        ...Object.entries(typeCounts).map(([type, count]) => ({
            id: type,
            label: type.charAt(0).toUpperCase() + type.slice(1),
            count
        }))
    ];

    return(
        <section className="flex flex-col items-center gap-10 mt-20 px-5">
            <h3 className="text-5xl text-[#D40003]">Selected Works</h3>
            <p className="italic text-[#ec8268]">A curated collection of luxury fashion photography and editorial work</p>
            <div className="flex gap-4 mb-6">
                {categories.map(cat => (
                    <span key={cat.id} className="px-4 py-1 bg-[#fffafaf7] rounded-xl shadow text-[#d22c2f] border border-[#d22c2f]">
                        {cat.label} ({cat.count})
                    </span>
                ))}
            </div>
            <section className="grid grid-cols-3 gap-12">
                 {data.map((item, idx) => {
                    const colSpan = idx%4 === 0 ? "col-span-2" : "";
                    const height = idx%4 === 0 ? "max-h-[50em] " : "max-h-fit";
                    return (
                        <div key={idx} className={`${colSpan} ${height} rounded-lg shadow-xl`}>
                            <img
                                src={require(`../../${item.url.replace('.../', '')}`)}
                                alt={item.brand}
                                className="h-full w-full rounded-lg"
                            />
                            <div className="w-3/4 relative top-[-8em] px-5 text-left popout">
                                <h4 className="font-semibold text-[#F9ECE3] text-2xl">{item.brand}</h4>
                                <p className="text-[#ffc7a4] float-left border-b-2 border-b-[#d22c2f]">{item.year}</p>
                            </div>
                        </div>
                    );
                })}
            </section>
        </section>
    )
}