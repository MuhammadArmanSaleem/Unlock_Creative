import React, { useState, useEffect } from "react";
import { Link } from '@inertiajs/react';

const PortfolioUpperSection = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleMore = () => {
        setShowMore(!showMore);
    };

    const [views, setViews] = useState(0);
    const [appreciations, setAppreciations] = useState(0);

    useEffect(() => {
        animateCount(0, 2539, 1000, setViews);
        animateCount(0, 36, 1000, setAppreciations);
    }, []);

    const animateCount = (start, end, duration, setter) => {
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            setter(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    return (
        <div className="container w-[80%] mx-auto my-10  p-0 flex flex-row gap-3">
            <div className="py-6 w-[30%] ">
                <div className="container mx-auto rounded-3xl bg-[#3D3F53] p-10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#DA143A] duration-[1000ms] ">
                    <div className="flex flex-col justify-center items-center py-8">
                        <div className="text-center lg:text-left max-w-lg">
                            <h2 className="text-xl text-white mb-2">Welcome to</h2>
                            <h1 className="text-4xl font-bold text-white mb-4">Unloock Creatives</h1>
                            <h3 className="text-2xl text-[#DA143A] mb-4 hover:text-[#FF4D67]">Digital Solutions & Creative Agency</h3>

                            <p className="text-white text-sm mb-4">🚀 Transforming Ideas into Digital Reality</p>
                            <p className="text-white text-sm mb-1"><span class='fas fa-map-marker-alt text-[#DA143A] text-[12px] mr-1'></span> Karachi, Pakistan | Serving Clients Worldwide</p>
                            <p className="text-white text-sm mb-1"><span class='fas fa-phone text-[#DA143A] text-[12px] mr-1'></span> WhatsApp: +92 33 5354 2499</p>
                            <p className="text-white text-sm mb-1"><span class='fas fa-envelope text-[#DA143A] text-[12px] mr-1'></span>  hello@unloockcreatives.com</p>

                            <div className="flex justify-center  lg:justify-start space-x-4 mt-6 mb-8">
                                <a href="#" className="text-[#DA143A] hover:text-[#FF4D67] transition">🌐 Facebook</a>
                                <a href="#" className="text-[#DA143A] hover:text-[#FF4D67] transition">📸 Instagram</a>
                                <a href="#" className="text-[#DA143A] hover:text-[#FF4D67] transition">💼 LinkedIn</a>
                            </div>


                            <div className="flex justify-center lg:justify-start space-x-2">
                                <button className="bg-[#DA143A] text-white text-sm px-6 py-2 rounded-full shadow-lg hover:bg-[#b6102f] transition duration-300">Message</button>
                            </div>
                            <br />

                        </div>
                    </div>
                </div>
            </div>


            <div class="w-[70%] flex flex-col ">
                <div class="py-6 px-6 flex flex-col gap-5">
                    <div class="container mx-auto rounded-3xl bg-[#3D3F53] p-8 shadow-2xl  transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#DA143A] duration-[2000ms]">
                        <div class="text-center">
                            <h2 class="text-3xl text-left font-bold text-white mb-2">
                                About <span class="text-[#DA143A]">Us</span>
                            </h2>
                            <h3 class="text-xl text-left text-[#DA143A] mb-2 hover:text-[#FF4D67]">Full-Service Digital Agency</h3>
                            <p class="text-white text-left text-sm leading-relaxed">
                                Welcome to <strong>Unloock Creatives</strong>,<br />
                                Your one-stop solution for cutting-edge digital experiences. We are a passionate team of designers, developers, and marketers dedicated to transforming your vision into reality. With 7+ years of industry expertise, we specialize in comprehensive digital solutions including Brand Identity, Web & App Development, UI/UX Design, Social Media Marketing, and Motion Graphics.                                     </p>

                            <div
                                className={`overflow-hidden text-left transition-all ease-in-out duration-[2000ms] ${showMore ? 'max-h-[1000px] mt-2' : 'max-h-0'
                                    }`}
                            >
                                <p class="text-white text-sm leading-relaxed">
                                    <br />
                                    <strong>Our Services:</strong><br />
                                    • Branding & Logo Design<br />
                                    • Website & Mobile App Development<br />
                                    • UI/UX Design & Prototyping<br />
                                    • Social Media Marketing & Management<br />
                                    • SEO & Digital Advertising<br />
                                    • 2D/3D Animation & Motion Graphics<br />
                                    • Content Strategy & Copywriting<br />
                                    • Print & Marketing Collateral<br />
                                    • E-Commerce Solutions
                                </p>
                            </div>

                            <button
                                onClick={toggleMore}
                                class="text-[#DA143A] text-2xl mt-4 hover:text-white align-center transition duration-2000"
                                aria-label="Toggle more"
                            >
                                {showMore ? '⌃' : '⌄'}
                            </button>
                            <br /><br />
                            <a href="#" class="bg-[#DA143A] text-white text-sm px-6 py-2 rounded-full shadow-lg hover:bg-[#b6102f] transition duration-300">
                                More About Us
                            </a>
                        </div>
                    </div>
                </div>
                <div class="px-6 flex flex-row gap-6">
                    <div class="container mx-auto w-[70%] rounded-3xl bg-[#3D3F53] p-6 shadow-2xl  transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#DA143A] duration-[2000ms]">
                        <div class="text-center">
                            <h2 class="text-2xl text-left font-bold text-white mb-2">
                                Work With <span class="text-[#DA143A]">Unloock Creatives</span>
                            </h2>
                            <hr class='border-[#DA143A]'></hr>
                            <div>
                                <h3 class="text-lg text-left text-white pt-2">
                                    Project-Based Work
                                </h3>
                                <h6 class='text-sm   text-left text-[#DA143A] hover:text-[#FF4D67]'>
                                    ✅ Available for Web, App, Branding & Marketing Projects
                                </h6>
                            </div>
                            <div>
                                <h3 class="text-lg text-left text-white pt-2">
                                    Dedicated Team
                                </h3>
                                <h6 class='text-sm text-left text-[#DA143A] hover:text-[#FF4D67]'>
                                    🚀 Custom solutions for startups & enterprises
                                </h6>
                            </div>
                            <div class="mt-3 text-left">
                                <a href="#contact" class="bg-[#DA143A] text-white text-xs px-6 py-2 rounded-full shadow-lg hover:bg-[#b6102f] transition duration-300 inline-block">
                                    Get a Proposal
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="container mx-auto w-[30%] rounded-3xl bg-[#3D3F53] py-8 px-8 shadow-2xl  transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#DA143A] duration-[2000ms]">
                        <div class="text-center flex flex-col gap-2 justify-between">
                            <div class='flex flex-col'>
                                <h4 class="text-xl font-bold text-[#DA143A] py-2 hover:text-[#FF4D67]">
                                    Project Views
                                </h4>
                                <h4 className="text-2xl text-white py-2">
                                    {views}+
                                </h4>
                            </div>
                            <div class='flex flex-col '>
                                <h4 class="text-xl font-bold text-[#DA143A] py-2 hover:text-[#FF4D67]">
                                    Appreciations
                                </h4>
                                <h4 className="text-2xl text-white py-2">
                                    {appreciations}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default PortfolioUpperSection;