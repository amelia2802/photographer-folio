import { useState } from "react";
import {data} from "./data.js";
export default function Portfolio(){

    const [selectedCategory, setSelectedCategory] = useState("all");

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

    function showTopics(categoriId){
       setSelectedCategory(categoriId);
    }

    const selectedWorks = selectedCategory === "all" ? data : (data.filter(item => item.type === selectedCategory));

    const getBentoClasses = (index) => {
        const patterns = [
            "col-span-2 row-span-2", 
            "col-span-1 row-span-1", 
            "col-span-1 row-span-2", 
            "col-span-2 row-span-1", 
            "col-span-1 row-span-1", 
            "col-span-1 row-span-1", 
        ];
        return patterns[index % patterns.length];
    };

    return(
        <section id="portfolio" className="flex flex-col items-center gap-10 mt-20 px-5">
            <h3 className="text-5xl text-center text-[#d22c2f]">Selected Works</h3>
            <p className="italic text-[#940000]">A curated selection of fashion events, campaigns and exclusive moments captured with the world's most prestigious brands</p>
            <div className="flex gap-4 max-[600px]:block max-[600px]:translate-x-[3%]">
                {categories.map(cat => (
                    <button 
                        key={cat.id} 
                        className="px-4 py-1 bg-[#fffafaf7] rounded-xl max-[600px]:m-2 shadow text-[#d22c2f] border border-[#d22c2f] hover:submit" 
                        onClick={()=> showTopics(cat.id)}
                    >
                        {cat.label} ({cat.count})
                    </button>
                ))}
            </div>
            <section className="md:grid grid-cols-3 grid-flow-row gap-9 md:p-28 template-area">
                 {selectedWorks.map((item, idx) => {
                    const bentoClasses = getBentoClasses(idx);
                    return (
                        <div key={idx} className={`${bentoClasses} rounded-lg md:shadow-xl max-[600px]:w-[15em]`}>
                            <img
                                src={require(`../../${item.url.replace('.../', '')}`)}
                                alt={item.brand}
                                className="h-full w-full object-cover rounded-lg"
                            />
                            <div className="relative -top-36 px-5 text-left popout">
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