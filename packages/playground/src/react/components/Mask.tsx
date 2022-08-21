import React, { SVGProps } from "react";

export function Mask(props: SVGProps<SVGSVGElement>) {
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
                d="M8.5 8.5h7c1.1046 0 2 .8954 2 2v4c0 1.1046-.8954 2-2 2h-7c-1.1046 0-2-.8954-2-2v-4c0-1.1046.8954-2 2-2Zm-2 2H4.8246c-1.1436 0-1.9512 1.1204-1.5895 2.2053a1.6754 1.6754 0 0 0 1.0596 1.0596L6.5 14.5m11-4h1.6754c1.1436 0 1.9511 1.1204 1.5895 2.2053a1.6755 1.6755 0 0 1-1.0596 1.0596L17.5 14.5m-5.5-4v4m2-2h-4"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default Mask;
