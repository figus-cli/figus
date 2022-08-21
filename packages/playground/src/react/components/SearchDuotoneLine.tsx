import React, { SVGProps } from "react";

export function SearchDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
            />
            <path stroke="currentColor" d="m20 20-3-3" />
        </svg>
    );
}
export default SearchDuotoneLine;
