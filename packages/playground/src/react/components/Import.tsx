import React, { SVGProps } from "react";

export function Import(props: SVGProps<SVGSVGElement>) {
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
                d="m12 14-.7071.7071.7071.7071.7071-.7071L12 14Zm1-9c0-.5523-.4477-1-1-1s-1 .4477-1 1h2ZM6.2929 9.7071l5 5 1.4142-1.4142-5-5L6.293 9.707Zm6.4142 5 5-5-1.4142-1.4142-5 5 1.4142 1.4142ZM13 14V5h-2v9h2Z"
            />
            <path
                stroke="currentColor"
                d="M5 16v1c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2v-1"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Import;
