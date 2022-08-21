import React, { SVGProps } from "react";

export function Time(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M16.5 12h-4.25a.25.25 0 0 1-.25-.25V8.5"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Time;
