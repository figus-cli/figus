import React, { SVGProps } from "react";

export function SearchFill(props: SVGProps<SVGSVGElement>) {
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
                d="M18 11c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7Z"
            />
            <path stroke="currentColor" d="m20 20-2-2" strokeWidth="2" />
        </svg>
    );
}
export default SearchFill;
