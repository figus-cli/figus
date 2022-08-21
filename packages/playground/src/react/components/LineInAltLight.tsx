import React, { SVGProps } from "react";

export function LineInAltLight(props: SVGProps<SVGSVGElement>) {
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
                x="15"
                y="9"
                stroke="currentColor"
                rx="2"
                transform="rotate(-90 15 9)"
            />
            <path fill="currentColor" stroke="currentColor" d="m6 21-3-4 3-4" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M3 17h7c3.7712 0 5.6569 0 6.8284-1.1716C18 14.6569 18 12.7712 18 9"
            />
        </svg>
    );
}
export default LineInAltLight;
