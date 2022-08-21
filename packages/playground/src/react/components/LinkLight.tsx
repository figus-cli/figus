import React, { SVGProps } from "react";

export function LinkLight(props: SVGProps<SVGSVGElement>) {
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
                d="M10 16H7c-2.2091 0-4-1.7909-4-4 0-2.2091 1.7909-4 4-4h3m6 4H8m6 4h3c2.2091 0 4-1.7909 4-4 0-2.2091-1.7909-4-4-4h-3"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default LinkLight;
