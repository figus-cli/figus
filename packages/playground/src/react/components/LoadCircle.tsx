import React, { SVGProps } from "react";

export function LoadCircle(props: SVGProps<SVGSVGElement>) {
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
                d="M5.2385 14.8117a7 7 0 0 0 13.523 0"
            />
            <path
                fill="currentColor"
                d="m12 13-.6247.7809.6247.4997.6247-.4997L12 13Zm1-9c0-.5523-.4477-1-1-1s-1 .4477-1 1h2ZM6.3753 9.7809l5 4 1.2494-1.5618-5-4L6.3753 9.781Zm6.2494 4 5-4-1.2494-1.5618-5 4 1.2494 1.5618ZM13 13V4h-2v9h2Z"
            />
        </svg>
    );
}
export default LoadCircle;
