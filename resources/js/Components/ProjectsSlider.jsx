import { Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';


const chunkArray = (arr, size) => {
    if (!arr || !Array.isArray(arr)) return [];
    return arr.reduce((acc, _, i) => {
        if (i % size === 0) acc.push(arr.slice(i, i + size));
        return acc;
    }, []);
};

export default function ProjectsSlider({ categories }) {
        const [current, setCurrent] = useState(0);
        const [chunkSize, setChunkSize] = useState(1);
    useEffect(() => {
            const updateSize = () => {
                const width = window.innerWidth;
                if (width >= 1280) setChunkSize(3);
                else if (width >= 1024) setChunkSize(3);
                else if (width >= 768) setChunkSize(2);
                else if (width >= 640) setChunkSize(2);
                else setChunkSize(1);
            };
            updateSize();
            window.addEventListener("resize", updateSize);
            return () => window.removeEventListener("resize", updateSize);
        }, []);
    
        const slides = chunkArray(categories, chunkSize);
    
        const prevSlide = () => setCurrent(prev => Math.max(prev - 1, 0));
        const nextSlide = () => setCurrent(prev => Math.min(prev + 1, slides.length - 1));
    
    return (
        <div className='relative z-10 bg-transparent max-w-4xl   mx-auto px-8 py-10 sm:px-6 lg:px-8 '>
            <h1 class="text-4xl text-center font-bold text-white xs:text-center sm:text-center sm:mb-5 sm:py-5 lg:py-10 ">
                Our Projects
            </h1>

            <div className="relative flex  items-center justify-between gap-3">
                <button
                    onClick={prevSlide}
                    className={`rounded-full border border-gray-400 text-white text-2xl sm:text-3xl z-20  item-center justify-center hover:border-[#00bfff] ${current === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-[#00bfff]'}`}
                    disabled={current === 0}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <div className="overflow-hidden  w-full">
                    <div className="flex  transition-transform  duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                        {slides.map((slide, idx) => (
                            <div key={idx} className="min-w-full rounded-xl flex justify-center gap-4 px-4">
                                {slide.map((category, index) => (
                                    <div
                                        key={index}
                                        className="bg-transparent rounded-xl flex flex-col items-center w-full sm:w-[33%] transition-transform duration-700 hover:scale-105"
                                    >
                                        <div className="h-[250px] w-full overflow-hidden rounded-xl">
                                            <img
                                                src={`/assets/categories/${category.image}`}
                                                alt={category.title}
                                                className="h-full w-full object-cover rounded-xl "
                                            />
                                        </div>
                                        <div className="bg-dark-2 rounded-2xl w-full md:h-[180px] sm:h-[180px] p-4 sm:p-6 mt-4 shadow-md  my-4 flex flex-col  ">

                                            <h3 className="text-md font-bold text-light-1 mb-2 hover:text-white">
                                                {category.title}
                                            </h3>
                                            <p className="text-light-1 text-[9px] text-justify hover:text-white">
                                                {category.description}
                                            </p>
                                            <Link href={route('services', category.id)} className="text-primary-1 text-sm font-semibold hover:text-[#00a6d1] mt-3 block text-right">
                                                View
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className={`rounded-full border border-gray-400 text-white text-2xl sm:text-3xl z-20  item-center justify-center hover:border-[#00bfff] ${current === slides.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:text-[#00bfff]'}`}
                    disabled={current === slides.length - 1}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white hover:text-[#00bfff]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 6l6 6-6 6z" />
                    </svg>
                </button>
            </div>

            <div className="flex justify-center mt-5 mb-10 space-x-1">
                {slides.map((_, idx) => (
                    <div key={idx} className={`w-8 h-1 ${idx === current ? "bg-light-1" : "bg-dark-3"}`} />
                ))}
            </div>
        </div>

    );
}