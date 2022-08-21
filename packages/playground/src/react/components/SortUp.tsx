import React, { SVGProps } from "react";

export function SortUp(props: SVGProps<SVGSVGElement>) {
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
                d="M5 17h8m-8-5h6M5 7h4"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m19 6 3 3m-3-3-3 3m3-3v12"
            />
        </svg>
    );
}
export default SortUp;
