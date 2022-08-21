import React, { SVGProps } from "react";

export function ChartAltDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="18"
                height="18"
                x="3"
                y="3"
                fill="currentColor"
                fillOpacity=".24"
                rx="2"
            />
            <path
                stroke="currentColor"
                d="m18 8-3.8953 4.8691a.15.15 0 0 1-.2232.0124l-2.7654-2.7654a.15.15 0 0 0-.2213.0101L6 16"
                strokeLinejoin="round"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default ChartAltDuotone;
