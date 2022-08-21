import React, { SVGProps } from "react";

export function Materials(props: SVGProps<SVGSVGElement>) {
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
                d="m3 7 7-4 11 4M3 7v5l11 4 7-4V7M3 7l11 4 7-4"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M3 12v5l11 4 7-4v-5"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Materials;
