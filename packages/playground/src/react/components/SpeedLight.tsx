import React, { SVGProps } from "react";

export function SpeedLight(props: SVGProps<SVGSVGElement>) {
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
                d="M3.5 14A8.5003 8.5003 0 0 1 12 5.5a8.5001 8.5001 0 0 1 8.5 8.5"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9.5 15a2.4999 2.4999 0 0 1 3.4567-2.3097 2.501 2.501 0 0 1 1.353 1.353c.1256.3033.1903.6284.1903.9567"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m13.5 12.5 2-3"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M20.5 14v.5c0 .5523-.4477 1-1 1h-15c-.5523 0-1-.4477-1-1V14"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default SpeedLight;
