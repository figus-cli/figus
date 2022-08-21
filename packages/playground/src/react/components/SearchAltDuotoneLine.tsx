import React, { SVGProps } from "react";

export function SearchAltDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="11"
                cy="11"
                r="6"
                fill="currentColor"
                stroke="currentColor"
                fillOpacity=".24"
                strokeWidth="1.2"
            />
            <path
                stroke="currentColor"
                d="M11 8a2.9998 2.9998 0 0 0-3 3m12 9-3-3"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default SearchAltDuotoneLine;
