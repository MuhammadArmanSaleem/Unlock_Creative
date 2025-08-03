import React from 'react';
import { Link } from '@inertiajs/react';

const Services = () => {
    return (
        <div className='bg-dark-2 relative overflow-hidden'>
            <div className="absolute top-0 right-0 z-0 w-20 h-20 rotate-[335deg] animate-[asteroid-move1_6000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_1.png"
                    alt="Asteroid"
                    className="w-full h-[30%]"
                />
            </div>
            <div className="absolute top-[50%] right-0 z-0 w-20 h-20 rotate-[335deg] animate-[asteroid-move3_10000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_2.png"
                    alt="Asteroid"
                    className="w-full h-[10px]"
                />
            </div>
            <div className="absolute top-0 right-[35%] z-0 w-20 h-20 rotate-[155deg] animate-[asteroid-move2_8000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_3.png"
                    alt="Asteroid"
                    className="w-full h-[10px]"
                />
            </div>
            <div className="absolute top-0 right-[30%] z-0 w-20 h-20 rotate-[335deg] animate-[asteroid-move4_80000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_4.png"
                    alt="Asteroid"
                    className="w-full h-[10px]"
                />
            </div>
            <div className="absolute top-[30%] right-0 z-0 w-20 h-20 rotate-[335deg] animate-[asteroid-move4_80000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_4.png"
                    alt="Asteroid"
                    className="w-full h-[10px]"
                />
            </div>
            <div className="absolute top-0 right-[40%] z-0 z-0 w-20 h-20 rotate-[335deg] animate-[asteroid-move3_10000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_2.png"
                    alt="Asteroid"
                    className="w-full h-[10px]"
                />
            </div>
            <div className="absolute top-[20%] right-0 z-0 w-20 h-20 rotate-[335deg] animate-[asteroid-move1_8000ms_linear_infinite]">
                <img
                    src="/assets/images/Asteroid_1.png"
                    alt="Asteroid"
                    className="w-full h-[30%]"
                />
            </div>

            <div className='container mx-auto w-[80%] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-20 relative z-10'>
                <h1 class="text-xl text-center font-bold text-white xs:text-center sm:text-center  sm:py-5 lg:py-10 ">
                    Our Services
                </h1>
                <div class=" bg-transparent mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-2 ">
                    <div className="bg-light-1 p-5 rounded-xl transition-all duration-1000 ease-in-out hover:shadow-[white_0px_0px_20px] hover:scale-105">
                        <div className="w-10">
                            <img
                                className="hover:scale-125 duration-1000 ease-in-out"
                                src="/assets/icons/1-01.png"
                                alt="Logo Design"
                            />
                        </div>
                        <h3 className="text-xl text-dark-3 font-bold font-poppins py-2 hover:text-2xl duration-1000">
                            Logo Design
                        </h3>
                        <p className="text-xs text-dark-3 font-bold pb-3">
                            Our Logo design services at Unlock Creatives are dedicated to helping your brand make a lasting impression.
                        </p>
                        <Link href={route('register')}>
                            <button className="flex items-center bg-light-1 text-dark-3 font-bold text-xs hover:text-[#DA143A] transition-colors duration-300">
                                Read More
                                <i className="fas fa-caret-right text-primary-1 text-xs ml-2" />
                            </button>
                        </Link>
                    </div>
                    <div className="bg-dark-3 py-3  px-5 rounded-xl transition-all duration-1000 ease-in-out hover:shadow-[white_0px_0px_20px] hover:scale-105">
                        <div className="w-10 ">
                            <img className="hover:scale-125  duration-1000 ease-in-out " src="/assets/icons/1-04.png" />
                        </div>
                        <h3 class="text-xl text-light-1 font-bold font-poppins  py-2 hover:text-2xl duration-1000">Web Development</h3>
                        <p class="py-2 text-xs text-light-1 font-bold ">Our Web Development services
                            focus on building responsive, modern websites that strengthen your brand's online presence.
                        </p>
                        <Link href={route('register')}>
                            <button class="bg-[#3D3F53] text-light-1 font-bold text-xs hover:text-[#DA143A] transition-colors">
                                Read More
                                <i className="fas fa-caret-right text-primary-1 text-[10px] sm:text-xs mx-2 sm:mr-2"></i>
                            </button>
                        </Link>
                    </div>
                    <div class="bg-light-1 py-3  px-5 rounded-xl transition-all duration-1000 ease-in-out hover:shadow-[white_0px_0px_20px] hover:scale-105">
                        <div class="w-10 ">
                            <img class="hover:scale-125  duration-1000 ease-in-out " src="/assets/icons/1-05.png" />
                        </div>
                        <h3 class="text-xl text-dark-3 font-bold py-2 font-poppins hover:text-2xl duration-1000">Marketing</h3>
                        <p class="py-2 text-xs text-dark-3 font-bold ">Our Marketing strategies are tailored to grow your
                            audience, enhance engagement, and drive measurable business results.
                        </p>
                        <Link href={route('register')}>
                            <button class="bg-light-1 text-dark-3 font-bold text-xs hover:text-[#DA143A] transition-colors">
                                Read More
                                <i className="fas fa-caret-right text-primary-1 text-[10px] sm:text-xs mx-2 sm:mr-2"></i>
                            </button>
                        </Link>
                    </div>
                    <div class="bg-dark-3 py-3  px-5 rounded-xl transition-all duration-1000 ease-in-out hover:shadow-[white_0px_0px_20px] hover:scale-105">
                        <div class="w-10 ">
                            <img class="hover:scale-125  duration-1000 ease-in-out " src="/assets/icons/1-02.png" />
                        </div>
                        <h3 class="text-xl text-light-1 font-bold py-2 font-poppins hover:text-2xl duration-1000">Animation</h3>
                        <p class="py-2 text-xs text-light-1 font-bold ">Unlock Creatives offers animation solutions that visually
                            tell your story and keep your audience engaged and informed.
                        </p>
                        <Link href={route('register')}>
                            <button class="bg-dark-3 text-light-1 font-bold text-xs hover:text-[#DA143A] transition-colors">
                                Read More
                                <i className="fas fa-caret-right text-primary-1 text-[10px] sm:text-xs mx-2 sm:mr-2"></i>
                            </button>
                        </Link>
                    </div>
                    <div class="bg-light-1 py-3  px-5 rounded-xl transition-all duration-1000 ease-in-out hover:shadow-[white_0px_0px_20px] hover:scale-105">
                        <div class="w-10 ">
                            <img class="hover:scale-125  duration-1000 ease-in-out " src="/assets/icons/1-03.png" />
                        </div>
                        <h3 class="text-xl text-dark-3 font-bold py-2 font-poppins hover:text-2xl duration-1000">E-Book</h3>
                        <p class="py-2 text-xs text-dark-3 font-bold ">Our E-Book designs deliver clean, branded layouts
                            that enhance readability and showcase your expertise professionally.
                        </p>
                        <Link href={route('register')}>
                            <button class="bg-light-1 text-dark-3 font-bold text-xs hover:text-[#DA143A] transition-colors">
                                Read More
                                <i className="fas fa-caret-right text-primary-1 text-[10px] sm:text-xs mx-2 sm:mr-2"></i>
                            </button>
                        </Link>
                    </div>
                    <div class="bg-dark-3 py-3 px-5 rounded-xl transition-all duration-1000 ease-in-out hover:shadow-[white_0px_0px_20px] hover:scale-105">
                        <div class="w-10 ">
                            <img class="hover:scale-125  duration-1000 ease-in-out " src="/assets/icons/1-06.png" />
                        </div>
                        <h3 class="text-xl text-light-1 font-bold py-2 font-poppins hover:text-2xl duration-1000">Brand Collaterals</h3>
                        <p class="py-2 text-xs text-light-1 font-bold ">From business cards to brochures, we create brand
                            collaterals that reflect your identity and leave a lasting impression.
                        </p>
                        <Link href={route('register')}>
                            <button class="bg-dark-3 text-light-1 font-bold text-xs hover:text-[#DA143A] transition-colors">
                                Read More
                                <i className="fas fa-caret-right text-primary-1 text-[10px] sm:text-xs mx-2 sm:mr-2"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes asteroid-move1 {
                0% {transform: translate(0, 0) rotate(335deg);}
                90% {transform: translate(-50vw, 50vh) rotate(335deg);}
                100% {transform: translate(-100vw, 100vh) rotate(335deg);}
                }

                @keyframes asteroid-move2 {
                    0% { transform: translate(0, 0) rotate(155deg); }
                    90% {transform: translate(-25vw, 25vh) rotate(155deg);}
                    100% { transform: translate(-100vw, 100vh) rotate(155deg); }
                }
                @keyframes asteroid-move3 {
                    0% { transform: translate(0, 0) rotate(335deg); }
                    90% {transform: translate(-35vw, 35vh) rotate(335deg);}
                    100% { transform: translate(-100vw, 100vh) rotate(335deg); }
                }
                @keyframes asteroid-move4 {
                    0% { transform: translate(0, 0) rotate(335deg); }
                    100% { transform: translate(-100vw, 100vh) rotate(335deg); }
                }
            `}</style>
        </div>


    )
}

export default Services;