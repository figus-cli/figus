import React, { SVGProps } from "react";

export function HomeLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M5 12.7596c0-1.3577 0-2.0366.2745-2.6334.2744-.5967.7899-1.0385 1.8208-1.9221l1-.8572C9.9586 5.7498 10.8902 4.9512 12 4.9512s2.0414.7986 3.9047 2.3957l1 .8572c1.0309.8836 1.5464 1.3254 1.8208 1.9221C19 10.723 19 11.4019 19 12.7596V17c0 1.8856 0 2.8284-.5858 3.4142C17.8284 21 16.8856 21 15 21H9c-1.8856 0-2.8284 0-3.4142-.5858C5 19.8284 5 18.8856 5 17v-4.2404Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M14.5 21v-5c0-.5523-.4477-1-1-1h-3c-.5523 0-1 .4477-1 1v5"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default HomeLight;
