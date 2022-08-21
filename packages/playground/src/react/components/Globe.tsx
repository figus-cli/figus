import React, { SVGProps } from "react";

export function Globe(props: SVGProps<SVGSVGElement>) {
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
                r="8"
                stroke="currentColor"
                strokeWidth="2"
            />
            <ellipse
                cx="12"
                cy="12"
                stroke="currentColor"
                rx="3"
                ry="8"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M4 12h16"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Globe;
