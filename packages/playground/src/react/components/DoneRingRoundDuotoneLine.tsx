import React, { SVGProps } from "react";

export function DoneRingRoundDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                r="9"
                fill="currentColor"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="m9 10 3.2581 2.4436a1.0002 1.0002 0 0 0 1.3526-.1415L20 5"
                strokeWidth="1.2"
            />
            <path
                stroke="currentColor"
                d="M21 12a8.9997 8.9997 0 0 1-6.107 8.5224 9.0007 9.0007 0 0 1-10.0332-3.0435 9 9 0 0 1 9.4696-14.1722"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default DoneRingRoundDuotoneLine;
