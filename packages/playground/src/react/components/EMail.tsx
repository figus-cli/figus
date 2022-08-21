import React, { SVGProps } from "react";

export function EMail(props: SVGProps<SVGSVGElement>) {
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
                d="M21 12a8.9996 8.9996 0 0 0-6.107-8.5224 9 9 0 1 0-.5636 17.2157"
                strokeWidth="2"
            />
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M16 9v4.5c0 1.3807 1.1193 2.5 2.5 2.5s2.5-1.1193 2.5-2.5V12"
                strokeWidth="2"
            />
        </svg>
    );
}
export default EMail;
