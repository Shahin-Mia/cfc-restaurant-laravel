import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NextArrowButton(props: any) {
    const { className, style, onClick } = props;
    console.log(style)
    return (
        <FontAwesomeIcon icon={faAngleRight}
            className={`!block !right-2 lg:!right-12 z-10 !text-white !w-3 !h-3 lg:!w-6 lg:!h-6 !rounded-full !border-2 !border-solid !border-white !outline !p-1 !outline-4 !outline-[#ff5f01] !bg-primary-cfc ${className}`}
            style={{
                ...style
            }}
            onClick={onClick}
        />
    );
}

export function PrevArrowButton(props: any) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faAngleLeft}
            className={`!block !left-2 lg:!left-12 z-10 !text-white !w-3 !h-3 lg:!w-6 lg:!h-6 !rounded-full !border-2 !border-solid !border-white !outline !p-1 !outline-4 !outline-[#ff5f01] !bg-primary-cfc ${className}`}
            style={{
                ...style,
            }}
            onClick={onClick}
        />
    );
}