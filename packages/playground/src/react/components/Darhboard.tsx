import React, { SVGProps } from "react";

export function Darhboard(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="6"
                height="6"
                x="4"
                y="4"
                stroke="currentColor"
                rx="1"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <rect
                width="6"
                height="6"
                x="4"
                y="14"
                stroke="currentColor"
                rx="1"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <rect
                width="6"
                height="6"
                x="14"
                y="14"
                stroke="currentColor"
                rx="1"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <rect
                width="6"
                height="6"
                x="14"
                y="4"
                stroke="currentColor"
                rx="1"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Darhboard;
