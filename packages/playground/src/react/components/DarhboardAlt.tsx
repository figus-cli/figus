import React, { SVGProps } from "react";

export function DarhboardAlt(props: SVGProps<SVGSVGElement>) {
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
                height="7"
                x="4"
                y="4"
                stroke="currentColor"
                rx="1"
                strokeLinejoin="round"
            />
            <rect
                width="6"
                height="5"
                x="4"
                y="15"
                stroke="currentColor"
                rx="1"
                strokeLinejoin="round"
            />
            <rect
                width="6"
                height="5"
                x="14"
                y="4"
                stroke="currentColor"
                rx="1"
                strokeLinejoin="round"
            />
            <rect
                width="6"
                height="7"
                x="14"
                y="13"
                stroke="currentColor"
                rx="1"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default DarhboardAlt;
