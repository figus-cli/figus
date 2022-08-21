import React, { SVGProps } from "react";

export function Wow(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="10" stroke="currentColor" />
            <circle
                cx="9"
                cy="9"
                r="1.25"
                fill="currentColor"
                stroke="currentColor"
            />
            <circle
                cx="15"
                cy="9"
                r="1.25"
                fill="currentColor"
                stroke="currentColor"
            />
            <path
                fill="currentColor"
                d="M15 15.5c0 1.3807-1.3431 2.5-3 2.5s-3-1.1193-3-2.5 1.3431-2.5 3-2.5 3 1.1193 3 2.5Z"
            />
        </svg>
    );
}
export default Wow;
