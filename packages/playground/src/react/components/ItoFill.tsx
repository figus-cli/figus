import React, { SVGProps } from "react";

export function ItoFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="14"
                height="14"
                x="5"
                y="5"
                fill="currentColor"
                rx="2"
            />
            <path
                stroke="currentColor"
                d="M9 6V2m0 20v-4m6 4v-4m7-3h-4M6 15H2m4-6H2m13-6c1.8638 0 2.7956 0 3.5307.3045a4.0001 4.0001 0 0 1 2.1648 2.1648C21 6.2043 21 7.1363 21 9"
                strokeWidth="2"
            />
        </svg>
    );
}
export default ItoFill;
