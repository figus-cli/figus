import React, { SVGProps } from "react";

export function CloseSquareDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                r="8.4"
                stroke="currentColor"
                strokeOpacity=".24"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m16 8-8 8m0-8 8 8"
                strokeLinejoin="round"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default CloseSquareDuotoneLine;
