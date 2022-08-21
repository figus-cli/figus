import React, { SVGProps } from "react";

export function Flask(props: SVGProps<SVGSVGElement>) {
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
                d="M15 9v9.0004C15 19.6573 13.6569 21 12 21s-3-1.3431-3-3V9"
            />
            <path stroke="currentColor" d="M7 9h10" />
            <path
                fill="currentColor"
                d="M13 18v-2.9452A.0548.0548 0 0 0 12.9452 15h-1.8904a.0548.0548 0 0 0-.0548.0548V18c0 .5523.4477 1 1 1s1-.4477 1-1Z"
            />
            <circle
                cx="15"
                cy="4"
                r="1"
                fill="currentColor"
                stroke="currentColor"
            />
            <circle
                cx="8.5"
                cy="5.5"
                r="1"
                fill="currentColor"
                stroke="currentColor"
            />
        </svg>
    );
}
export default Flask;
