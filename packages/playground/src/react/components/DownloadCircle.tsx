import React, { SVGProps } from "react";

export function DownloadCircle(props: SVGProps<SVGSVGElement>) {
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
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="m12 4-.6247-.7809L12 2.7194l.6247.4997L12 4Zm1 9c0 .5523-.4477 1-1 1s-1-.4477-1-1h2ZM6.3753 7.2191l5-4 1.2494 1.5618-5 4L6.3753 7.219Zm6.2494-4 5 4-1.2494 1.5618-5-4 1.2494-1.5618ZM13 4v9h-2V4h2Z"
            />
        </svg>
    );
}
export default DownloadCircle;
