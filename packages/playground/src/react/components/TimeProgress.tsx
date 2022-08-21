import React, { SVGProps } from "react";

export function TimeProgress(props: SVGProps<SVGSVGElement>) {
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
                d="M5.636 5.636A9 9 0 1 0 12 3m0 9L6 6m6-3v2m9 7h-2m-7 7v2m-7-9H3"
                strokeWidth="2"
            />
        </svg>
    );
}
export default TimeProgress;
