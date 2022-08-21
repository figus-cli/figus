import React, { SVGProps } from "react";

export function LoadCircleLight(props: SVGProps<SVGSVGElement>) {
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
                d="m12 13-.3123.3904.3123.2499.3123-.2499L12 13Zm.5-9a.5.5 0 0 0-1 0h1ZM6.6876 9.3904l5.0001 4 .6246-.7808-5-4-.6246.7808Zm5.6247 4 5-4-.6246-.7808-5 4 .6246.7808ZM12.5 13V4h-1v9h1Z"
            />
        </svg>
    );
}
export default LoadCircleLight;
