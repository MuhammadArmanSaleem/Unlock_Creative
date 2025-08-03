import React from 'react';
import { Link } from '@inertiajs/react';

const HomeTopContent = () => {
    return (

        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 md:pt-24 lg:pt-30 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                {/* Left Column - Content */}
                <div className="lg:ml-[10%] px-0 sm:px-2 md:px-4 lg:px-10">
                    <div className="flex flex-col">
                        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white hover:text-light-1 py-1 sm:py-2">
                            Unleash Your Online Potential
                        </h1>
                        <h3 className="text-lg sm:text-xl font-bold text-white hover:text-light-1 py-1 sm:py-2">
                            Your Partner in Digital World
                        </h3>
                        <p className="text-xs sm:text-sm py-1 sm:py-2 text-white hover:text-light-1">
                            At Unlock Creatives, we transform your ideas into stunning digital solutions that drive success.
                            From Logo Design to website Development, SEO, PPC, social media marketing, animation,
                            content writing and app development, we provide a comprehensive suite of services to meet
                            all your digital needs. Let us bring your vision to Life!
                        </p>
                        <div className="flex flex-row gap-2 mt-2 sm:mt-4">
                            <Link href={route('register')}>
                                <button className="flex items-center text-xs sm:text-sm text-white font-bold py-1 px-2 sm:px-4 bg-primary-1 rounded-2xl hover:bg-white hover:text-primary-1 transition-colors">
                                    <div className="flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white mr-1 sm:mr-2">
                                        <i className="fas fa-phone text-primary-1 text-[6px] sm:text-[8px]"></i>
                                    </div>
                                    +1 234 567 8910
                                </button>
                            </Link>
                            <Link href={route('register')}>
                                <button className="flex items-center text-xs sm:text-sm text-primary-1 font-bold py-1 px-2 sm:px-4 bg-white rounded-2xl hover:bg-primary-1 hover:text-white transition-colors">
                                    <i className="fas fa-comment-dots text-[10px] sm:text-xs mr-1 sm:mr-2"></i>
                                    Live Chat
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="absolute top-20 right-0 z-0 animate-[astronaut-move_15000ms_linear_infinite]">
                    <img
                        src="/assets/images/Astronot.png"
                        alt="Digital Solutions"
                        className="h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] xl:max-h-[500px] object-contain"
                    />
                </div>
            </div>

            <div class="flex items-center justify-center min-h-screen bg-transparent p-4 ">
                <div class="flex flex-col sm:flex-row items-center bg-gradient-to-r from-dark-3 to-dark-1 rounded-full md:rounded-full px-6 py-6 w-full max-w-lg border-2 border-gray-600 shadow-lg mt-20">

                    <div class="relative w-32 h-32 md:w-48 md:h-48 rounded-full flex-shrink-0 transition-all duration-1000 ease-in-out hover:shadow-[white_0px_0px_15px] animate-[profile-rotate_10000ms_linear_infinite]">
                        <img src="/assets/images/About_Us.png" alt="Profile" class="w-full h-full object-cover rounded-full z-10 relative" />
                    </div>


                    <div class="mx-5 sm:ml-8 mt-4 md:mt-0 text-white text-center md:text-left ">
                        <h1 class="text-lg md:text-2xl font-bold my-2 text-light-1 hover:text-white">About Us</h1>
                        <p class="text-[10px] md:text-[9px]  text-gray-300 leading-snug text-gray-200 hover:text-white">
                            Unlock Creatives is a dynamic design and development company focused on crafting exceptional digital experiences that unlock your brand's full potential.
                            We collaborate closely with clients to bring their unique stories to life, offering innovative solutions through a talented team of designers and developers dedicated to making a lasting impact.
                        </p>
                    </div>

                </div>
            </div>
            <style jsx>{`
                @keyframes astronaut-move {
                    0% { transform: translate(-10vw, 5vw) ; }
                    25% { transform: translate(-10vw, 8vw) rotate(15deg); }
                    50% { transform: translate(-10vw, 10vw) rotate(0deg); }
                    75% { transform: translate(-10vw, 8vw) rotate(-15deg); }
                    100% { transform: translate(-10vw, 5vw); } /* Changed from 5vh to 5vw */
                }
                @keyframes profile-rotate {
                    0% { transform: rotate(15deg); }
                    50% { transform: rotate(-15deg); }
                    100% { transform: rotate(15deg); }
                }
            `}</style>
        </div>

    )
}

export default HomeTopContent