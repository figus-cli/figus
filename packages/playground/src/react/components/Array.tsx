import React, { SVGProps } from "react";

export function Array(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M15 5h5v10c0 1.8856 0 2.8284-.5858 3.4142C18.8284 19 17.8856 19 16 19h-1"
            />
            <path
                fill="currentColor"
                d="M4 19H3v1h1v-1Zm0 1h5v-2H4v2ZM9 4H6v2h3V4ZM3 7v12h2V7H3Zm3-3C4.3431 4 3 5.3431 3 7h2c0-.5523.4477-1 1-1V4Z"
            />
        </svg>
    );
}
export default Array;
