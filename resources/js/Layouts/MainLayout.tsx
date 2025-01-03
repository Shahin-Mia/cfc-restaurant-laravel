import { Link } from '@inertiajs/react';
import { PropsWithChildren, useEffect, useState } from 'react';
import { motion, AnimatePresence } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faHouse, faLocationDot, faUtensils, faXmark } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/Components/Footer';
import MenuLink from '@/Components/MenuLink';

export default function MainLayout({ children }: PropsWithChildren) {
    const [active, setActive] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div>
            <div className="relative">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" onClick={() => setActive(active => !active)} />
                    <div className="drawer-content z-50 fixed top-0 left-0 max-w-24 lg:max-w-32 bg-primary-cfc py-2 px-3 lg:py-3 lg:px-5">
                        <Link href='/'>
                            <img src="/images/cfc-logo.png" alt="" />
                        </Link>
                        <label htmlFor="my-drawer" className="drawer-button cursor-pointer inline-block">
                            <div className='text-white mt-2 lg:mt-3 lg:ml-2'>
                                {
                                    active ?
                                        <FontAwesomeIcon icon={faXmark} className='text-2xl lg:text-3xl' /> :
                                        <FontAwesomeIcon icon={faBarsStaggered} className='text-2xl lg:text-3xl font-thin' />
                                }
                            </div>
                        </label>
                    </div>
                    <div className="drawer-side z-30">
                        <ul className="bg-primary-cfc min-h-full w-full transition-all delay-[1200ms] ease-in-out text-white">
                            {/* Sidebar content here */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                                <div className='mt-40 lg:mt-32 mx-auto'>
                                    <MenuLink href='/' icon={faHouse}>
                                        Home
                                    </MenuLink>
                                    <MenuLink href='/meal' icon={faUtensils}>
                                        Meals
                                    </MenuLink>
                                    <MenuLink href='/location' icon={faLocationDot}>
                                        Locations
                                    </MenuLink>
                                </div>
                                <div className='hidden lg:block'>
                                    <div className="w-full h-screen">
                                        <img src="/images/nav-bar-poster.webp" className='w-full h-full' alt="" />
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-full overflow-hidden">
                    <AnimatePresence>
                        {
                            active &&
                            <motion.div
                                animate={{
                                    width: [0, "100%", 0],
                                    x: [0, 0, viewportWidth],
                                }}
                                exit={{
                                    width: [0, "100%", 0],
                                    x: [viewportWidth, 0, 0],
                                }}
                                transition={{
                                    duration: 2.5,
                                    ease: "easeInOut",
                                    times: [0, 0.5, 1],
                                }}
                                className="bg-primary-cfc h-screen z-40 fixed top-0 left-0"
                            />
                        }
                    </AnimatePresence>
                </div>
            </div>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}
