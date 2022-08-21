import React, { SVGProps } from "react";

export function News(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="14"
                height="14"
                x="5"
                y="5"
                stroke="currentColor"
                rx="3"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M6 10h12"
                strokeWidth="2"
            />
        </svg>
    );
}
export default News;
