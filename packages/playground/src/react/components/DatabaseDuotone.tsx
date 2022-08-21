import React, { SVGProps } from "react";

export function DatabaseDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M5 8c4.1874 2.991 9.8126 2.991 14 0v10c-4.3376 2.4786-9.6624 2.4786-14 0V8Z"
                fillOpacity=".24"
            />
            <ellipse
                cx="12"
                cy="7"
                stroke="currentColor"
                rx="7"
                ry="3"
                strokeWidth="1.2"
            />
            <path
                stroke="currentColor"
                d="M5 13v4c0 1.6569 3.134 3 7 3s7-1.3431 7-3v-4"
                strokeWidth="1.2"
            />
            <path
                stroke="currentColor"
                d="M5 7v5c0 1.6569 3.134 3 7 3s7-1.3431 7-3V7"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default DatabaseDuotone;
