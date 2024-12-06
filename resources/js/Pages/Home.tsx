import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

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
            <div style={{ height: "90vh", overflow: "hidden", position: "relative" }}>
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
                            <div className="bg-slate-600 h-72 xl:h-96 flex items-center justify-center">
                                {/* placeholder */}
                                <FontAwesomeIcon icon={faImage} className='text-7xl' />
                            </div>
                            <div className="bg-slate-400 h-72 xl:h-96 flex items-center justify-center">
                                {/* placeholder */}
                                <FontAwesomeIcon icon={faImage} className='text-7xl' />
                            </div>
                            <div className="bg-slate-600 h-72 xl:h-96 flex items-center justify-center">
                                {/* placeholder */}
                                <FontAwesomeIcon icon={faImage} className='text-7xl' />
                            </div>
                            <div className="bg-slate-400 h-72 xl:h-96 flex items-center justify-center">
                                {/* placeholder */}
                                <FontAwesomeIcon icon={faImage} className='text-7xl' />
                            </div>
                            <div className="bg-slate-600 h-72 xl:h-96 flex items-center justify-center">
                                {/* placeholder */}
                                <FontAwesomeIcon icon={faImage} className='text-7xl' />
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
                        backgroundColor: "#3498db",
                        position: "absolute",
                        top: 0,
                        zIndex: 10,
                    }}
                >
                    <h1 style={{ padding: "20px", textAlign: "center", color: "#fff" }}>
                        Sliding Div
                    </h1>
                </motion.div>
            </div>
        </MainLayout>
    );
};

export default Home;
