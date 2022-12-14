import React, { SVGProps } from "react";

export function ChartDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                height="16"
                x="3"
                y="4"
                fill="currentColor"
                fillOpacity=".24"
                rx="2"
            />
            <path
                stroke="currentColor"
                d="M8 10v6m4-4v4m4-8v8"
                strokeLinejoin="round"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default ChartDuotoneLine;
