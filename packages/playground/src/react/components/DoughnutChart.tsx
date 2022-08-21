import React, { SVGProps } from "react";

export function DoughnutChart(props: SVGProps<SVGSVGElement>) {
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
                d="M12 3v4.5M18 18l-3-3m3-9-3 3M3 12h4.5"
                strokeWidth="2"
            />
        </svg>
    );
}
export default DoughnutChart;
