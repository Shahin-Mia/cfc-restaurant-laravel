import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InertiaLinkProps, Link } from '@inertiajs/react';
import { motion } from "motion/react"

export default function MenuLink({
    className = '',
    icon,
    children,
    ...props
}: InertiaLinkProps & { icon: IconDefinition }) {
    return (
        <motion.div whileHover={{ scale: 1.2 }} className='font-semibold p-1'>
            <Link
                {...props}
                className='grid grid-cols-2 content-baseline'
            >
                <FontAwesomeIcon icon={icon} className='text-2xl mx-auto' />
                <span className='text-xl'>
                    {children}
                </span>
            </Link>
        </motion.div>
    );
}
