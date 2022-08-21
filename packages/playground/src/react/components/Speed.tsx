import React, { SVGProps } from "react";

export function Speed(props: SVGProps<SVGSVGElement>) {
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
                d="M4 14a8.0002 8.0002 0 0 1 8-8 8 8 0 0 1 8 8"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M10 15a2.0006 2.0006 0 0 1 .5858-1.4142 2.0006 2.0006 0 0 1 2.8284 0A2.0004 2.0004 0 0 1 14 15"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m13 13 2-3m5 4v1c0 .5523-.4477 1-1 1H5c-.5523 0-1-.4477-1-1v-1"
            />
        </svg>
    );
}
export default Speed;
