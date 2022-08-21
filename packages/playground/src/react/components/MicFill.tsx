import React, { SVGProps } from "react";

export function MicFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="8"
                height="13"
                x="8"
                y="2"
                fill="currentColor"
                rx="4"
            />
            <path
                stroke="currentColor"
                d="M5 11a6.9998 6.9998 0 0 0 11.9497 4.9497A6.9997 6.9997 0 0 0 19 11m-7 10v-2"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
}
export default MicFill;
