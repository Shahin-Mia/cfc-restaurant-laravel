import MainLayout from "@/Layouts/MainLayout";
import { faImage, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";
import { motion, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrowButton, PrevArrowButton } from "@/Components/SliderButtons";

function Meal() {
    const containerRef = useRef<any>(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrowButton />,
        prevArrow: <PrevArrowButton />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const handleWheel = (event: React.WheelEvent) => {
        if (!containerRef.current) return;

        if (event.deltaY < 0) {
            containerRef.current.slickPrev();
        } else {
            containerRef.current.slickNext();
        }
    };

    return (
        <MainLayout>
            <Head title="Meals" />
            <div className="overflow-hidden">
                <div onWheel={handleWheel} className="relative w-full h-[90vh]">
                    <Slider ref={containerRef} {...settings}>
                        {Array.from({ length: 10 }, (_, i) => (
                            <div
                                className="bg-slate-600 w-1/3 h-[90vh] flex items-center justify-center cursor-pointer group"
                                onClick={() => console.log("div clicked")}
                            >
                                {/* placeholder */}
                                <FontAwesomeIcon icon={faImage} className='text-7xl group-hover:scale-150' />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </MainLayout>
    )
}

export default Meal
