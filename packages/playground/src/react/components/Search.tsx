import React, { SVGProps } from "react";

export function Search(props: SVGProps<SVGSVGElement>) {
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
                r="7"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m20 20-3-3"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Search;
