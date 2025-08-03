import React from "react";
import { Link } from "@inertiajs/react";

const Packages = () => {
    return (
        <div class="bg-gradient-to-r from-light-1 via-light-2 to-light-1 flex flex-col items-center py-12 text-center">

                <h1 class="text-xl text-center font-bold text-dark-1 xs:text-center sm:text-center sm:mb-5 sm:py-5 lg:py-10 ">No Up-Front Charges*</h1>

                <div class="flex flex-col md:flex-row gap-2">

                    <div class="bg-grey rounded-xl shadow-xl shadow-dark-3 w-65 h-[450px] flex flex-col md:mt-5 justify-between transition-all duration-1000 ease-in-out hover:scale-105" >
                        <div>
                            <h2 class="text-3xl font-extrabold  px-6 py-3 text-dark-1 ">Basic</h2>
                            <div class="bg-primary-1 text-white font-extrabold text-sm py-1 mb-4">Logo Design <span class='ml-3'>★★★</span></div>
                            <ul class="text-dark-1 text-xs font-bold px-6 space-y-2 mb-6">
                                <li>3 Logo Concepts</li><hr class='border-black'></hr>
                                <li>1 Dedicated Designer</li><hr class='border-black'></hr>
                                <li>3 Free Revisions</li><hr class='border-black'></hr>
                                <li>48 Hours</li><hr class='border-black'></hr>
                                <li>Ai, PDF, JPG, PNG</li><hr class='border-black'></hr>
                                <li>100% Unique Design + Satisfaction</li><hr class='border-black'></hr>
                                <li>100% Refundable</li>
                            </ul>
                            <p class="text-3xl font-extrabold text-dark-1">$50</p>
                        </div>
                        <div class=" flex gap-1 px-3 py-2">
                            <button class="bg-primary-1 text-white text-xs rounded w-full h-8 ">Buy Now</button>
                            <button class="bg-primary-1 text-white text-xs rounded w-full h-8">Book A Call?</button>
                        </div>
                    </div>

                    <div class="bg-gradient-to-b from-primary-1 to-primary-3 shadow-xl shadow-dark-3 text-white w-64 h-[450px] rounded-lg flex flex-col justify-between transition-all duration-1000 ease-in-out hover:scale-105">
                        <div>
                            <h2 class="text-3xl font-extrabold  px-6 py-3">Standard</h2>
                            <div class="bg-white text-dark-1 text-sm font-extrabold text-sm py-1 mb-4">Logo Design <span class='text-primary-1 ml-3'> ★★★★ </span></div>
                            <ul class="text-white text-xs font-bold px-6 space-y-2 mb-6">
                                <li>6 Logo Concepts</li><hr></hr>
                                <li>3 Dedicated Designers</li><hr></hr>
                                <li>6 Free Revisions</li><hr></hr>
                                <li>48 - 72 Hours</li><hr></hr>
                                <li>Ai, PDF, JPG, PNG, EPS, SVG</li><hr></hr>
                                <li>100% Unique Design & 100% Refundable</li><hr></hr>
                                <li>Free Business Cards & Letter head</li>
                            </ul>
                            <p class="text-3xl font-extrabold">$90</p>
                        </div>
                        <div class=" flex gap-1 px-3 py-2">
                            <button class="bg-white text-dark-1 text-xs font-bold rounded w-full h-8">Buy Now</button>
                            <button class="bg-white text-dark-1 text-xs font-bold rounded w-full h-8">Book A Call?</button>
                        </div>
                    </div>

                    <div class="bg-dark-2 text-white rounded-lg shadow-xl shadow-dark-3 w-64 h-[450px] flex flex-col md:mt-5 justify-between transition-all duration-1000 ease-in-out hover:scale-105">
                        <div>
                            <h2 class="text-3xl font-extrabold  px-6 py-3">Premium</h2>
                            <div class="bg-white text-dark-1 text-sm font-extrabold py-1 mb-4 ">Logo Design</div>
                            <ul class="text-white text-xs font-bold px-6 space-y-2 mb-6">
                                <li>12 Logo Concepts</li><hr></hr>
                                <li>5 Dedicated Designers</li><hr></hr>
                                <li>Unlimited Revisions</li><hr></hr>
                                <li>100 Hours</li><hr></hr>
                                <li>Ai, PDF, JPG, PNG, EPS, SVG</li><hr></hr>
                                <li>100% Unique Design & 100% Refundable</li><hr></hr>
                                <li class="text-lime">Free Stationery Set & SMM Kit</li>
                            </ul>
                            <p class="text-3xl font-extrabold">$150</p>
                        </div>
                        <div class="flex gap-1 px-3 py-2">
                            <button class="bg-white text-dark-1 text-xs font-bold rounded w-full h-8">Buy Now</button>
                            <button class="bg-white text-dark-1 text-xs font-bold rounded w-full h-8">Book A Call?</button>
                        </div>
                    </div>

                </div>
            </div>
    )
}
export default Packages;