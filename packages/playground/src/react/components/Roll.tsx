import React, { SVGProps } from "react";

export function Roll(props: SVGProps<SVGSVGElement>) {
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
                d="M5 16c5.3333 0 5.3333-7.4286 0-8m12 8c5.3333 0 5.3333-7.4286 0-8m-6 8c5.3333 0 5.3333-7.4286 0-8m6.5 8H5m12-8H5"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M5 16a1.9999 1.9999 0 1 1 .5176-3.9319"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Roll;
