import React, { SVGProps } from "react";

export function SortDownLight(props: SVGProps<SVGSVGElement>) {
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
                d="M5 8h8m-8 4h6m-6 4h4"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m19 18 3-3m-3 3-3-3m3 3V6"
            />
        </svg>
    );
}
export default SortDownLight;
