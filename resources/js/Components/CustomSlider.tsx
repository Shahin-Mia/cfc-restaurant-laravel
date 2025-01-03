import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PropsWithChildren, useRef } from "react";
import { NextArrowButton, PrevArrowButton } from "./SliderButtons";

function CustomSlider({
    children,
    showModal,
    config,
    isResponsive
}: PropsWithChildren<{
    showModal: boolean,
    config?: Settings,
    isResponsive?: boolean
}>) {
    const sliderRef = useRef<any>(null);

    const settings = {
        ...config,
        dots: false,
        speed: 500,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrowButton />,
        prevArrow: <PrevArrowButton />,
    };

    if (isResponsive) {
        settings.responsive = [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    const handleWheel = (event: React.WheelEvent) => {
        if (!sliderRef.current) return;

        if (event.deltaY < 0) {
            sliderRef.current.slickPrev();
        } else {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div onWheel={handleWheel} className={`w-full h-[90vh] relative ${showModal ? "hidden" : "block"}`}>
            <Slider ref={sliderRef} {...settings}>
                {children}
            </Slider>
        </div>
    )
}

export default CustomSlider