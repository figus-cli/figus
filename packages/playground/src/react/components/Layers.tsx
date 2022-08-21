import React, { SVGProps } from "react";

export function Layers(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M12 4 5 7l7 3 7-3-7-3Z"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M7.0255 10.044 4.606 11.0809a1 1 0 0 0 0 1.8383l7 3a1 1 0 0 0 .7878 0l7-3a1 1 0 0 0 0-1.8383l-2.4193-1.0369-2.5386 1.088 2.0254.868L12 13.9121 7.5386 12l2.0254-.868-2.5385-1.088Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M7.0255 15.044 4.606 16.0809a1 1 0 0 0 0 1.8383l7 3a1 1 0 0 0 .7878 0l7-3a1 1 0 0 0 0-1.8383l-2.4193-1.0369-2.5386 1.088 2.0254.868L12 18.9121 7.5386 17l2.0254-.868-2.5385-1.088Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default Layers;
