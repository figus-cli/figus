import React, { SVGProps } from "react";

export function NestingFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="4"
                height="4"
                x="18"
                y="15"
                fill="currentColor"
                stroke="currentColor"
                rx="2"
                transform="rotate(90 18 15)"
            />
            <rect
                width="4"
                height="4"
                x="6"
                y="8"
                fill="currentColor"
                stroke="currentColor"
                rx="2"
                transform="rotate(-90 6 8)"
            />
            <path
                stroke="currentColor"
                d="M8 8v5c0 1.8856 0 2.8284.5858 3.4142C9.1716 17 10.1144 17 12 17h2"
            />
        </svg>
    );
}
export default NestingFill;
