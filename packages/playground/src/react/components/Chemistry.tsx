import React, { SVGProps } from "react";

export function Chemistry(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path stroke="currentColor" d="m11 7 2 3-2 3H8l-2-3 2-3h3Z" />
            <path
                stroke="currentColor"
                d="m16 4 2 3-2 3h-3l-2-3 2-3h3Zm0 12 2 3M5 4l3 3m0 6-2 2m7 1-2 2m-5-8H4m14 3h3m-5-3 2 3-2 3h-3l-2-3 2-3h3Z"
            />
            <circle cx="9" cy="20" r="1" fill="currentColor" />
            <circle cx="4" cy="17" r="1" fill="currentColor" />
            <circle cx="21" cy="7" r="1" fill="currentColor" />
        </svg>
    );
}
export default Chemistry;
