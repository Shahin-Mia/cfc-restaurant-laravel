import MainLayout from "@/Layouts/MainLayout";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Meals, Menus } from "@/lib/fakeData";
import CustomSlider from "@/Components/CustomSlider";
import Card from "@/Components/Card";

function Meal() {
    const containerRef = useRef<any>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showDetails, setShowDetails] = useState<number>(0);
    const [modalOpeningSlide, setModalOpeningSlide] = useState(false);
    const [modalClosingSlide, setmodalClosingSlide] = useState(false);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [menus, setMenus] = useState<any>([]);
    const [meals, setMeals] = useState<any>([]);

    useEffect(() => {
        setMenus(Menus);
        const handleResize = () => {
            setViewportHeight(window.innerHeight);
            setViewportWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const modalOpen = (id: number) => {
        if (meals.length <= 0 || id !== meals[0].menuId) {
            setModalOpeningSlide((prev) => !prev);
            setTimeout(() => {
                if (!showDetails) {
                    setShowModal(true);
                }
                const meals = Meals.filter((item) => item.menuId === id);
                setMeals(meals);
                setModalOpeningSlide((prev) => !prev);
            }, 1000)
        }
    }

    const modalClose = () => {
        setmodalClosingSlide((prev) => !prev);
        setTimeout(() => {
            setShowModal((prev) => !prev);
            setmodalClosingSlide((prev) => !prev);
            setMeals([]);
        }, 1000)
    }

    const handleProductClick = (id: number) => {
        setShowDetails(0);
        setTimeout(() => {
            if (showDetails === id) {
                setShowDetails(0);
            } else {
                setShowDetails(id);
            }
        }, 500)
    }

    const config = {
        infinite: false,
        slidesToShow: viewportWidth < 480 ? 1 : viewportWidth < 780 ? 2 : 3
    }

    return (
        <MainLayout>
            <Head title="Meals" />
            <div className="overflow-hidden bg-white">
                <CustomSlider showModal={showModal} config={config} isResponsive={true}>
                    {
                        menus.map((item: any, index: any) => (
                            <Card
                                key={item.id}
                                title={item.name}
                                image={item.image}
                                handleClick={() => modalOpen(item.id)}
                                index={index}
                            />
                        ))
                    }
                </CustomSlider>
                <div className={`w-full h-[90vh] relative ${showModal ? "block" : "hidden"}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden w-full h-full">
                        <div className="lg:flex justify-center items-center bg-primary-cfc bg-opacity-10 hidden">
                            <ul className="[&>li]:mb-4 [&>li]:font-bold [&>li]:text-2xl/8 [&>li]:cursor-pointer">
                                {
                                    menus.map((item: any) => (
                                        <motion.li
                                            key={item.id}
                                            whileHover={{ scale: 1.1 }}
                                            onClick={() => modalOpen(item.id)}
                                        >
                                            {item.name}
                                        </motion.li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="relative overflow-y-scroll overflow-x-hidden">
                            <button onClick={modalClose} className="absolute right-5 top-5 max-w-20 max-h-20"><FontAwesomeIcon icon={faCircleXmark} className="text-3xl text-[#ff5f01]" /></button>
                            <div className="grid grid-cols-1 lg:gap-y-10 lg:grid-cols-2 mt-20 content-center justify-items-center bg-white lg:[&>div:nth-child(even)>div:nth-child(even)]:-left-full lg:[&>div:nth-child(even)>div:nth-child(even)]:right-0 lg:[&>div:nth-child(odd)>div:nth-child(even)]:-right-full lg:[&>div:nth-child(odd)>div:nth-child(even)]:left-0" ref={containerRef}>
                                {
                                    meals.map((item: any, index: number) => {
                                        return (
                                            <div key={item.id} className={`text-center relative w-full top-0`} onClick={() => handleProductClick(item.id)}>
                                                <motion.div
                                                    className={`${showDetails === item.id && "details-active"}`}
                                                    animate={{
                                                        height: showDetails === item.id ? "100vh" : "auto"
                                                    }}
                                                    transition={{
                                                        duration: .5,
                                                        ease: "easeInOut",
                                                        times: [0, 1]
                                                    }}
                                                >
                                                    <img src={`/images/${item.image}`} alt="nasi-item-1" className="h-56 w-64 object-contain mx-auto" />
                                                    <div className="h-14">
                                                        <h2 className="font-bold text-lg">{item.name}</h2>
                                                    </div>
                                                </motion.div>
                                                <AnimatePresence>
                                                    {showDetails === item.id && (
                                                        <motion.div
                                                            className="bg-primary-cfc w-full lg:w-auto absolute bottom-0 truncate text-left"
                                                            initial={{ height: 0 }}
                                                            animate={{ height: viewportWidth > 1024 ? "50vh" : "42vh" }}
                                                            exit={{ height: 0 }}
                                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                                        >
                                                            <div className="flex items-center flex-col md:flex-row justify-center h-full text-white">
                                                                <div className="w-full md:w-1/2 p-5 break-words">
                                                                    <h2 className="font-bold text-xl mb-1 text-wrap">{item.name}</h2>
                                                                    <p className="text-sm mb-10 text-wrap text-justify">{item.description}</p>
                                                                    <p className="text-base">
                                                                        Starting
                                                                        <small className="mx-1">from</small>
                                                                        <span className="text-2xl font-bold">{item.price}</span>
                                                                        <small>RM</small>
                                                                    </p>
                                                                </div>
                                                                <div className="md:w-1/2 p-5 h-full hidden md:block">
                                                                    <img src={`/images/${item.image}`} alt={item.image} className="object-contain w-full h-full" />
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* progress slide  */}
                <div className="w-full h-full overflow-hidden">
                    <AnimatePresence>
                        {
                            modalOpeningSlide &&
                            <motion.div
                                animate={{
                                    height: [0, "100%"],
                                    y: [viewportHeight, 0]
                                }}
                                exit={{
                                    height: ["100%", 0]
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    times: [0, 0.5],
                                }}
                                className="bg-primary-cfc w-full z-40 fixed top-0 left-0"
                            />
                        }
                        {
                            modalClosingSlide &&
                            <motion.div
                                animate={{
                                    height: [0, "100%"],
                                }}
                                exit={{
                                    height: ["100%", 0],
                                    y: [0, viewportHeight]
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    times: [0, 0.5],
                                }}
                                className="bg-primary-cfc w-full z-40 fixed top-0 left-0"
                            />
                        }
                    </AnimatePresence>
                </div>
            </div>
        </MainLayout>
    )
}

export default Meal
