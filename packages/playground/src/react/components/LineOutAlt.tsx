import React, { SVGProps } from "react";

export function LineOutAlt(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="6"
                height="6"
                x="9"
                y="15"
                stroke="currentColor"
                rx="2"
                strokeWidth="2"
                transform="rotate(90 9 15)"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m18 3 3 4-3 4"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M21 7h-7c-3.7712 0-5.6569 0-6.8284 1.1716C6 9.343 6 11.2288 6 15"
                strokeWidth="2"
            />
        </svg>
    );
}
export default LineOutAlt;
