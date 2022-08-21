import React, { SVGProps } from "react";

export function TimeDelLight(props: SVGProps<SVGSVGElement>) {
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
                d="M10.1883 5.2385a6.9997 6.9997 0 0 1 6.7614 1.8117 6.9995 6.9995 0 0 1 1.8118 6.7615"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M16.9497 16.9497a6.9997 6.9997 0 0 1-9.8994 0 6.9998 6.9998 0 0 1 0-9.8994"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M19 19 5 5"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M18.0353 3.1363a4 4 0 0 1 2.8284 2.8284"
                strokeWidth="2"
            />
        </svg>
    );
}
export default TimeDelLight;
