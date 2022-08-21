import React, { SVGProps } from "react";

export function DoneDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="10"
                cy="14"
                r="7"
                fill="currentColor"
                fillOpacity=".24"
            />
            <path stroke="currentColor" d="m6 13 4 3 7-9" strokeWidth="1.2" />
        </svg>
    );
}
export default DoneDuotoneLine;
