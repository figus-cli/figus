import React, { SVGProps } from "react";

export function Happy(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                stroke="currentColor"
                d="M9.402 13.5A2.9994 2.9994 0 0 0 12 15a3.0002 3.0002 0 0 0 2.5981-1.5"
                strokeWidth="2"
            />
            <rect
                width="3.25"
                height="2.25"
                x="6.875"
                y="7.875"
                fill="currentColor"
                stroke="currentColor"
                rx="1.125"
                strokeWidth=".25"
            />
            <rect
                width="3.25"
                height="2.25"
                x="13.875"
                y="7.875"
                fill="currentColor"
                stroke="currentColor"
                rx="1.125"
                strokeWidth=".25"
            />
        </svg>
    );
}
export default Happy;
