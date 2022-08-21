import React, { SVGProps } from "react";

export function TimeDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                r="8.6"
                fill="currentColor"
                stroke="currentColor"
                fillOpacity=".24"
                strokeWidth="1.2"
            />
            <path
                stroke="currentColor"
                d="M16.5 12h-4.25a.25.25 0 0 1-.25-.25V8.5"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default TimeDuotoneLine;
