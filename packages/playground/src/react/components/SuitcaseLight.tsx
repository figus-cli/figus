import React, { SVGProps } from "react";

export function SuitcaseLight(props: SVGProps<SVGSVGElement>) {
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
                d="M6.5 8.5c0-.5523.4477-1 1-1h9c.5523 0 1 .4477 1 1v10c0 .5523-.4477 1-1 1h-9c-.5523 0-1-.4477-1-1v-10Zm2 11v1c0 .5523.4477 1 1 1s1-.4477 1-1v-1m3 0v1c0 .5523.4477 1 1 1s1-.4477 1-1v-1m-6-12v-3c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1v3"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default SuitcaseLight;
