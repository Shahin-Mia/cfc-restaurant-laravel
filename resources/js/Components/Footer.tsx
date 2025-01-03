import { Link } from '@inertiajs/react'
import React from 'react'

function Footer() {
    return (
        <div className='bg-primary-cfc h-auto lg:h-[10vh] text-white lg:fixed lg:bottom-0 lg:left-0 w-full z-50'>
            <div className='grid grid-cols-1 lg:grid-cols-2 content-center h-full mx-5'>
                <div className='p-5 text-center lg:text-start'>
                    <h1 className='text-xl lg:text-2xl/3 italic font-bold font-serif'>
                        Chairman Fried Chicken
                        <small className='text-[7px] bg-white text-[#ff5f01] rounded-full font-light'
                        >TM</small>
                    </h1>
                    <small className='hidden lg:inline-block'>&copy; {new Date().getFullYear()} Chairman Fried Chicken | All rights are reserved.</small>
                </div>
                <div>
                    <ul className='flex flex-wrap space-x-0 lg:space-x-4 items-center justify-center lg:justify-start h-full text-sm flex-col lg:flex-row'>
                        <li>
                            <Link href="/meal">Explore our foods</Link>
                        </li>
                        <li>
                            <Link href="/location">Location</Link>
                        </li>
                        <li>
                            <Link href="#">Terms & Condition</Link>
                        </li>
                    </ul>
                </div>
                <small className='text-center mt-5 lg:hidden'>&copy; {new Date().getFullYear()} Chairman Fried Chicken | All rights are reserved.</small>
            </div>
        </div>
    )
}

export default Footer