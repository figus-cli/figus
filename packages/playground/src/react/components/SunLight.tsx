import React, { SVGProps } from "react";

export function Sunlight(props: SVGProps<SVGSVGElement>) {
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
                r="4"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 8V4m0 16v-4M9.1716 9.1716 6.343 6.343m11.3138 11.3139-2.8284-2.8285M16 12h4M4 12h4m6.8283-2.8284 2.8284-2.8285M6.3432 17.6569l2.8284-2.8285"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Sunlight;
