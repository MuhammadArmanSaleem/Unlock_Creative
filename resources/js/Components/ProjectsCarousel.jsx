import React, { useState, useEffect } from "react";
import { usePage, Link } from "@inertiajs/react";


const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
        if (i % size === 0) acc.push(arr.slice(i, i + size));
        return acc;
    }, []);
};

const ProjectsCarousel = () => {
    const { service: services } = usePage().props;
    const [current, setCurrent] = useState(0);
    const [chunkSize, setChunkSize] = useState(1);


useEffect(() => {
    const updateSize = () => {
        const width = window.innerWidth;
        
        
        if (width >= 1280) { // xl
            setChunkSize(3);
        } else if (width >= 1024) { // lg
            setChunkSize(3);
        } else if (width >= 768) { // md
            setChunkSize(2);
        } else if (width >= 640) { // sm
            setChunkSize(2);
        } else { // xs
            setChunkSize(1);
        }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
}, []);

    const slides = chunkArray(services, chunkSize);

    const prevSlide = () => {
        if (current > 0) {
            setCurrent(prev => prev - 1);
        }
    };

    const nextSlide = () => {
        if (current < slides.length - 1) {
            setCurrent(prev => prev + 1);
        }
    };


    return (
        <div className='bg-dark-1 relative overflow-hidden py-20'>
            {/* Asteroids */}
            <div className="absolute top-0 left-0 z-0 w-20 h-20 rotate-[205deg] animate-[asteroid-move5_8000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_1.png"
                    alt="Asteroid"
                    className="w-full h-[10px]"
                />
            </div>
            <div className="absolute top-[50%] left-0 z-0 w-20 h-20 rotate-[205deg] animate-[asteroid-move7_10000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_2.png"
                    alt="Asteroid"
                    className="w-full h-[10px]"
                />
            </div>
            <div className="absolute top-0 left-[30%] z-0 w-20 h-20 rotate-[25deg] animate-[asteroid-move6_17000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_3.png"
                    alt="Asteroid"
                    className="w-full h-[10px]"
                />
            </div>           
            <div className="absolute top-[30%] left-0 z-0 w-20 h-20 rotate-[25deg] animate-[asteroid-move6_17000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_3.png"
                    alt="Asteroid"
                    className="w-full h-[10px]"
                />
            </div>
            <div className="absolute top-0 left-[30%] z-0 w-20 h-20 rotate-[205deg] animate-[asteroid-move8_80000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_4.png"
                    alt="Asteroid"
                    className="w-full h-[10px]"
                />
            </div>
            <div className="absolute top-[40%] left-0 z-0 w-20 h-20 rotate-[205deg] animate-[asteroid-move8_80000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_4.png"
                    alt="Asteroid"
                    className="w-full h-[10px]"
                />
            </div>
            <div className="absolute top-0 left-[35%] z-0 w-20 h-20 rotate-[205deg] animate-[asteroid-move7_18000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_2.png"
                    alt="Asteroid"
                    className="w-full h-[10px]"
                />
            </div>
            <div className="absolute top-[20%] left-0 z-0 w-20 h-20 rotate-[205deg] animate-[asteroid-move5_10000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_1.png"
                    alt="Asteroid"
                    className="w-full h-[10px]"
                />
            </div>


            <div className='relative z-10 bg-transparent max-w-4xl   mx-auto p-8 sm:px-6 lg:px-8 '>
                <h1 class="text-xl text-center font-bold text-white xs:text-center sm:text-center sm:mb-5 sm:py-5 lg:py-10 ">
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
                                    {slide.map((service, index) => (
                                        <div
                                            key={index}
                                            className="bg-transparent rounded-xl flex flex-col items-center w-full sm:w-[33%] transition-transform duration-700 hover:scale-105"
                                        >
                                            <div className="h-[350px] w-full overflow-hidden rounded-xl">
                                                <img
                                                    src={`/assets/services/${service.image}`}
                                                    alt={service.title}
                                                    className="h-full w-full object-cover rounded-xl "
                                                />
                                            </div>
                                            <div className="bg-dark-2 rounded-2xl w-full md:h-[180px] sm:h-[180px] p-4 sm:p-6 mt-4 shadow-md  my-4 flex flex-col  ">

                                                <h3 className="text-md font-bold text-light-1 mb-2 hover:text-white">
                                                    {service.title}
                                                </h3>
                                                <p className="text-light-1 text-[9px] text-justify hover:text-white">
                                                    {service.description}
                                                </p>
                                                <Link href="#" className="text-[#00bfff] text-sm font-semibold hover:text-[#00a6d1] mt-3 block text-right">
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

                <div className="flex justify-center mt-5 space-x-1">
                    {slides.map((_, idx) => (
                        <div key={idx} className={`w-8 h-1 ${idx === current ? "bg-white" : "bg-gray-600"}`} />
                    ))}
                </div>
            </div>

            {/* Keyframes */}
            <style jsx>{`
                
    @keyframes asteroid-move5 {
        0% { transform: translate(0, 0) rotate(205deg); }
        90% { transform: translate(45vw, 45vh) rotate(205deg); }
        100% { transform: translate(100vw, 100vh) rotate(205deg); }
    }
    @keyframes asteroid-move6 {
        0% { transform: translate(0, 0) rotate(25deg); }
        90% { transform: translate(35vw, 35vh) rotate(25deg); }
        100% { transform: translate(100vw, 100vh) rotate(25deg); }
    }
    @keyframes asteroid-move7 {
        0% { transform: translate(0, 0) rotate(205deg); }
        90% { transform: translate(25vw, 25vh) rotate(205deg); }
        100% { transform: translate(100vw, 100vh) rotate(205deg); }
    }
    @keyframes asteroid-move8 {
        0% { transform: translate(-100vw, -100vh) rotate(205deg); }
        100% { transform: translate(100vw, 100vh) rotate(205deg); }
    }
            `}</style>
        </div>
    );
};

export default ProjectsCarousel;
