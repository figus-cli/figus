import React, { SVGProps } from "react";

export function SortUpAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M4.5 7.5h10m-10 4h7m-7 4h5"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m17.5 9.5 2 2m-2-2-2 2m2-2v6"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default SortUpAlt;
