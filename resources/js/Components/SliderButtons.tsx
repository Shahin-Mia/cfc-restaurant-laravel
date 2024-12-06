import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NextArrowButton(props: any) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faAngleRight}
            className={className}
            style={{
                ...style,
                display: "block",
                right: 50,
                zIndex: 10,
                background: "#ff5f01",
                color: "white",
                width: 25,
                height: 25,
                borderRadius: '50%',
                border: "2px solid white",
                padding: 5
            }}
            onClick={onClick}
        />
    );
}

export function PrevArrowButton(props: any) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faAngleLeft}
            className={className}
            style={{
                ...style,
                display: "block",
                left: 50,
                zIndex: 10,
                background: "#ff5f01",
                color: "white",
                width: 25,
                height: 25,
                borderRadius: '50%',
                border: "2px solid white",
                padding: 5
            }}
            onClick={onClick}
        />
    );
}