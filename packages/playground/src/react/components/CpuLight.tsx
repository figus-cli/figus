import React, { SVGProps } from "react";

export function CpuLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M7 11c0-1.8856 0-2.8284.5858-3.4142C8.1716 7 9.1144 7 11 7h2c1.8856 0 2.8284 0 3.4142.5858C17 8.1716 17 9.1144 17 11v2c0 1.8856 0 2.8284-.5858 3.4142C15.8284 17 14.8856 17 13 17h-2c-1.8856 0-2.8284 0-3.4142-.5858C7 15.8284 7 14.8856 7 13v-2Z"
            />
            <rect
                width="4"
                height="4"
                x="10"
                y="10"
                fill="currentColor"
                rx="1"
            />
            <path
                stroke="currentColor"
                d="M10 7V4m4 3V4m3 6h3m-3 4h3m-10 6v-3m4 3v-3M4 10h3m-3 4h3"
            />
        </svg>
    );
}
export default CpuLight;
