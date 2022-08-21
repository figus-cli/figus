import React, { SVGProps } from "react";

export function ItoLight(props: SVGProps<SVGSVGElement>) {
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
                d="M5.5 7c0-.8284.6716-1.5 1.5-1.5h8c1.933 0 3.5 1.567 3.5 3.5v8c0 .8284-.6716 1.5-1.5 1.5H7c-.8284 0-1.5-.6716-1.5-1.5V7ZM9 6V2m0 20v-4m6 4v-4m7-3h-4M6 15H2m4-6H2m13-6c1.8638 0 2.7956 0 3.5307.3045a4.0001 4.0001 0 0 1 2.1648 2.1648C21 6.2043 21 7.1363 21 9"
            />
        </svg>
    );
}
export default ItoLight;
