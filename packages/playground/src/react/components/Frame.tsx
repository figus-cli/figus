import React, { SVGProps } from "react";

export function Frame(props: SVGProps<SVGSVGElement>) {
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
                d="M8 3v1c0 1.8856 0 2.8284-.5858 3.4142C6.8284 8 5.8856 8 4 8H3m13-5v1c0 1.8856 0 2.8284.5858 3.4142C17.1716 8 18.1144 8 20 8h1M8 21v-1c0-1.8856 0-2.8284-.5858-3.4142C6.8284 16 5.8856 16 4 16H3m13 5v-1c0-1.8856 0-2.8284.5858-3.4142C17.1716 16 18.1144 16 20 16h1"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Frame;
