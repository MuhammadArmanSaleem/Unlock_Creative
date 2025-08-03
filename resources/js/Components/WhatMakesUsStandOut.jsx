import React from "react";
import { Link } from "@inertiajs/react";

const WhatMakesUsStandOut = () => {
    return (
        <div class=" bg-gradient-to-r from-light-1 via-transparent to-light-1  flex items-center justify-center px-6 py-4">
                <div class="container mx-auto w-[80%] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-20">
                    <div class=" grid md:grid-cols-2 gap-10 items-center">
                        <div class="sm:px-6 md:px-8">
                            <h2 class="text-2xl font-bold font-poppins text-dark-2 mb-4  pr-16 leading-tight hover:text-3xl duration-1000">
                                What Makes Us Stand Out
                            </h2>
                            <p class="text-dark-3 text-[8px] font-poppins hover:text-black ">
                                Unlock Creatives is not just a design and development agency; we are your strategic partner in unlocking your brands potential. With our innovative designs, user-centric approach, and commitment to excellence, we strive to create digital experiences that leave a lasting impression and drive your business forward.
                                Innovation is at the heart of everything we do. We constantly push the boundaries of creativity to deliver fresh, original, and visually striking designs. Our team of highly skilled designers and developers are passionate about their craft, continuously exploring the latest design trends, techniques, and technologies. By embracing innovation, we create digital experiences that go beyond the ordinary, setting your brand apart and establishing a strong competitive edge.
                            </p>
                        </div>
                        <div class="flex justify-center transition-all duration-1000 ease-in-out hover:scale-110">
                            <img src="/assets/images/What_Makes_Us_Stand_Out.png" alt="What Makes Us Stand Out" class="w-full max-w-xl" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default WhatMakesUsStandOut;