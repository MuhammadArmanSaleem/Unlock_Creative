import React from "react";
import { Link } from "@inertiajs/react";

const ProjectInMind = () => {
    return (
        <div class="relative md:py-10 xs:py-6 bg-gradient-to-r from-primary-1 via-dark-1 to-primary-1 text-white">
            <div class="relative container mx-auto ">
                <div class="grid grid-cols-1 md:grid-cols-4 items-center gap-1">

                    <div class="hidden md:flex justify-center order-first w-full h-full">
                        <img
                            src="/assets/images/Stars.png"
                            alt="Decoration"
                            class="w-full h-full object-none"
                        />
                    </div>


                    <div class="text-center flex flex-col items-center col-span-2 md:order-none order-first">
                        <h2 class="text-2xl xs:text-3xl sm:text-4xl font-bold font-poppins text-white mb-2 sm:mb-3 leading-tight">
                            Have a Project in Mind?
                        </h2>
                        <p class="text-xs xs:text-sm sm:text-base text-white mb-3 sm:mb-4 font-poppins max-w-xs sm:max-w-none">
                            Contact us to get a free quote
                        </p>
                        <Link href={route('register')}>
                            <button className="text-xs xs:text-sm sm:text-base text-dark-1 h-8 font-bold py-2 px-4 sm:py-1 sm:px-6 bg-white rounded-md hover:bg-dark-1 hover:text-white transition-colors duration-300 transform hover:scale-105">
                                Contact Now
                            </button>
                        </Link>
                    </div>
                    <div class="hidden md:flex justify-center order-last w-full h-full">
                        <img
                            src="/assets/images/Stars.png"
                            alt="Decoration"
                            class="w-full h-full object-none"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectInMind;