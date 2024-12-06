import { Link } from '@inertiajs/react'
import React from 'react'

function Footer() {
    return (
        <div className='bg-primary-cfc h-[10vh] text-white fixed bottom-0 left-0 w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-2 content-center h-full mx-5'>
                <div>
                    <h1 className='text-2xl italic font-bold font-serif'>Chairman Fried Chicken</h1>
                </div>
                <div>
                    <ul className='flex flex-wrap space-x-7 items-center h-full text-sm'>
                        <li>
                            <Link href="#">Link1</Link>
                        </li>
                        <li>
                            <Link href="#">Link2</Link>
                        </li>
                        <li>
                            <Link href="#">Link3</Link>
                        </li>
                        <li>
                            <Link href="#">Link4</Link>
                        </li>
                        <li>
                            <Link href="#">Link5</Link>
                        </li>
                        <li>
                            <Link href="#">Link6</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer