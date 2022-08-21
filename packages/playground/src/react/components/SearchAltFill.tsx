import React, { SVGProps } from "react";

export function SearchAltFill(props: SVGProps<SVGSVGElement>) {
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
                d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7Zm0-12a5.0001 5.0001 0 0 0-5 5c0 .5523.4477 1 1 1s1-.4477 1-1a2.9998 2.9998 0 0 1 3-3c.5523 0 1-.4477 1-1s-.4477-1-1-1Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path stroke="currentColor" d="m20 20-2-2" strokeWidth="2" />
        </svg>
    );
}
export default SearchAltFill;
