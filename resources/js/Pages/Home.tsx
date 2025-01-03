import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

const Home = () => {
    const [sliderY, setSliderY] = useState(0);
    const touchStartY = useRef<number | null>(null);
    const scrollableDiv = useRef<HTMLDivElement>(null);

    const handleWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement;

        const scrollableContent = target.closest(".scrollable-content") as HTMLElement;
        if (scrollableContent) {
            const atTop = scrollableContent.scrollTop === 0;
            const atBottom =
                scrollableContent.scrollTop + scrollableContent.clientHeight >=
                scrollableContent.scrollHeight;

            if ((!atTop && e.deltaY < 0)) {
                return;
            }

        }
        // Adjust the slider's position
        setSliderY((prevY) => {
            const newY = prevY - e.deltaY;
            const clampedY = Math.min(0, Math.max(newY, -window.innerHeight));

            // Check if the slider is fully hidden
            if (clampedY === -window.innerHeight) {
                scrollableDiv.current ? scrollableDiv.current.style.overflowY = "auto" : null;
            } else {
                scrollableDiv.current ? scrollableDiv.current.style.overflowY = "hidden" : null;
            }

            return clampedY;
        });
    };

    const handleTouchStart = (e: TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (touchStartY.current === null) return;

        const target = e.target as HTMLElement;
        const scrollableContent = target.closest(".scrollable-content") as HTMLElement;

        const touchEndY = e.touches[0].clientY;
        const touchDelta = touchStartY.current - touchEndY;

        if (scrollableContent) {
            const atTop = scrollableContent.scrollTop === 0;
            const atBottom =
                scrollableContent.scrollTop + scrollableContent.clientHeight >=
                scrollableContent.scrollHeight;

            if ((!atTop && touchDelta < 0) || (!atBottom && touchDelta > 0)) {
                touchStartY.current = touchEndY;
                return;
            }

        }

        setSliderY((prevY) => {
            const newY = prevY - touchDelta;
            return Math.min(0, Math.max(newY, -window.innerHeight));
        });

        touchStartY.current = touchEndY;
    };

    useEffect(() => {
        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return (
        <MainLayout>
            <Head title="Home" />
            <div style={{ height: "90vh", overflow: "hidden", position: "relative" }} className="hidden lg:block">
                {/* Scrollable Content */}
                <div
                    style={{
                        height: "90vh",
                        zIndex: 5,
                        position: "relative",
                        backgroundColor: "#f5f5f5",
                    }}
                >
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className="bg-slate-800 h-[90vh]">
                            <img src="/images/brost_6.jpg" alt="promotional_pic" className="w-full h-full" />
                        </div>
                        <div className='lg:h-[90vh] overflow-x-hidden hidden-scrollbar scrollable-content' ref={scrollableDiv}>
                            <div className="bg-slate-600 h-72 flex items-center justify-center">
                                <img src="/images/side-pic-1.webp" alt="" />
                            </div>
                            <div className="bg-slate-600 h-72 flex items-center justify-center">
                                <img src="/images/side-pic-2.webp" alt="" />
                            </div>
                            <div className="bg-slate-600 h-72 flex items-center justify-center">
                                <img src="/images/side-pic-3.webp" alt="" />
                            </div>

                        </div>
                    </div>
                </div>

                {/* Sliding Div */}
                <motion.div
                    animate={{
                        y: sliderY,
                    }}
                    transition={{
                        duration: 0.1,
                    }}
                    style={{
                        height: "100vh",
                        width: "100%",
                        position: "absolute",
                        backgroundColor: "#fff",
                        top: 0,
                        zIndex: 10,
                        backgroundImage: "url(/images/top-banner.webp)",
                        backgroundPosition: "center",
                        backgroundSize: "100vw 100vh",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="h-full flex justify-end items-center">
                        <div className="flex flex-col w-1/3">
                            <h1 className="text-5xl italic font-serif text-white font-extrabold">Crunch It, Love It – Where Every Bite is Crispy Delight!</h1>
                            <Link href="/meal"><div className="my-7 cursor-pointer bg-primary-cfc px-7 py-4 w-48 flex justify-center items-center text-white rounded-full font-bold hover:scale-105 transition-transform duration-300 ease-in-out hover:text-[#ff5f01] hover:bg-transparent hover:border-2 border-[#ff5f01]">
                                <FontAwesomeIcon icon={faPlusCircle} className="text-lg" />
                                <span className="ml-1">find out more</span>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <img src="/images/scroll-down.gif" className="absolute bottom-10 mx-auto left-0 right-0 w-32" alt="" />
                </motion.div>
            </div>
            <div>
                <div className="grid grid-cols-1 lg:hidden">
                    <div className="bg-slate-600 h-screen flex items-center justify-center relative">
                        <img src="/images/top-banner.webp" className="w-full h-screen object-cover object-center" alt="" />
                        <div className="flex flex-col absolute right-0 top-1/2 text-end items-end">
                            <h1 className="text-2xl md:text-3xl md:w-1/2 italic font-serif text-white font-extrabold">Crunch It, Love It – Where Every Bite is Crispy Delight!</h1>
                            <Link href="/meal"><div className="my-7 cursor-pointer bg-primary-cfc px-4 py-3 w-44 flex justify-center items-center text-white rounded-full font-bold hover:scale-105 transition-transform duration-300 ease-in-out hover:text-[#ff5f01] hover:bg-transparent hover:border-2 border-[#ff5f01]">
                                <FontAwesomeIcon icon={faPlusCircle} className="text-lg" />
                                <span className="ml-1">find out more</span>
                            </div>
                            </Link>
                        </div>
                        <img src="/images/scroll-down.gif" className="absolute bottom-4 mx-auto left-0 right-0 w-24" alt="" />
                    </div>
                    <div className="bg-slate-600 h-full flex items-center justify-center">
                        <img src="/images/brost_6.jpg" alt="promotional_pic" className="w-full h-full" />
                    </div>
                    <div className="bg-slate-600 h-full flex items-center justify-center">
                        <img src="/images/side-pic-1.webp" alt="" />
                    </div>
                    <div className="bg-slate-600 h-full flex items-center justify-center">
                        <img src="/images/side-pic-2.webp" alt="" />
                    </div>
                    <div className="bg-slate-600 h-full flex items-center justify-center">
                        <img src="/images/side-pic-3.webp" alt="" />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Home;
