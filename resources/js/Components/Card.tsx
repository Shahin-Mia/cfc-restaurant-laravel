import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MouseEventHandler } from "react"

function Card({
    title,
    image,
    handleClick,
    index
}: {
    title: string,
    image: string,
    handleClick: MouseEventHandler<HTMLDivElement>,
    index: number
}) {
    return (
        <div>
            <div
                className={
                    `bg-primary-cfc h-screen py-20 lg:py-0 lg:h-[90vh] cursor-pointer group flex justify-around items-center flex-col
                    ${(index % 2 === 0) ? "bg-opacity-10" : "bg-opacity-0"}`
                }
                onClick={handleClick}
            >
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl mt-12 lg:text-4xl mb-6 font-bold group-hover:scale-105 transition-transform duration-300 ease-in-out text-black">{title}</h2>
                    <div className="bg-primary-cfc px-5 lg:px-7 py-3 lg:py-4 w-40 lg:w-48 flex justify-center items-center text-white rounded-full font-bold md:group-hover:scale-105 transition-transform duration-300 ease-in-out md:group-hover:text-[#ff5f01] md:group-hover:bg-transparent md:group-hover:border-2 border-[#ff5f01]">
                        <FontAwesomeIcon icon={faPlusCircle} className="text-sm lg:text-lg" />
                        <span className="ml-1">find out more</span>
                    </div>
                </div>
                <div className="w-56 h-52 lg:w-60 md:group-hover:scale-110 transition-transform duration-300 ease-in-out">
                    <img src={`/images/${image}`} className="w-full h-full" />
                </div>

            </div>
        </div>
    )
}

export default Card