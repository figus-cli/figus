import React, { SVGProps } from "react";

export function LoadListAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M3 3h18M5 3h14v14.9006c0 .0367 0 .055-.0041.0723a.151.151 0 0 1-.018.0433c-.0093.0152-.0223.0282-.0482.0541l-2.8594 2.8594c-.0259.0259-.0389.0389-.0541.0482a.151.151 0 0 1-.0433.018C15.9556 21 15.9373 21 15.9006 21H8.2c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C5 19.4802 5 18.9201 5 17.8V3Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M14 21v-4.85a.15.15 0 0 1 .15-.15H19m-7-3V7m-3 3 2.8939-2.894a.15.15 0 0 1 .2122 0L15 10"
                strokeWidth="2"
            />
        </svg>
    );
}
export default LoadListAlt;
