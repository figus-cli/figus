import React, { SVGProps } from "react";

export function Chart(props: SVGProps<SVGSVGElement>) {
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
                d="M8 10v6m4-4v4m4-8v8"
            />
            <rect
                width="18"
                height="16"
                x="3"
                y="4"
                stroke="currentColor"
                rx="2"
            />
        </svg>
    );
}
export default Chart;
