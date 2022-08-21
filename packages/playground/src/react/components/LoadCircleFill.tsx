import React, { SVGProps } from "react";

export function LoadCircleFill(props: SVGProps<SVGSVGElement>) {
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
                d="M7.0864 13.0691 5.384 11.7072A6.9896 6.9896 0 0 0 5 13.9996c0 3.866 3.134 7 7 7s7-3.134 7-7a6.9904 6.9904 0 0 0-.384-2.2924l-1.7024 1.3619a5.031 5.031 0 0 1 .0864.9305c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5c0-.318.0297-.629.0864-.9305Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                fill="currentColor"
                d="m12 13-.6247.7809.6247.4997.6247-.4997L12 13Zm1-9c0-.5523-.4477-1-1-1s-1 .4477-1 1h2ZM6.3753 9.7809l5 4 1.2494-1.5618-5-4L6.3753 9.781Zm6.2494 4 5-4-1.2494-1.5618-5 4 1.2494 1.5618ZM13 13V4h-2v9h2Z"
            />
        </svg>
    );
}
export default LoadCircleFill;
