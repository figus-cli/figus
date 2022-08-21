import React, { SVGProps } from "react";

export function Paper(props: SVGProps<SVGSVGElement>) {
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
                d="M18 3c1.6569 0 3 1.3431 3 3v2.143c0 .334 0 .5012-.0766.6231a.5005.5005 0 0 1-.1574.1574C20.644 9 20.477 9 20.1429 9H15m3-6c-1.6569 0-3 1.3431-3 3v3m3-6H7c-1.8856 0-2.8284 0-3.4142.5858C3 4.1716 3 5.1144 3 7v14l3-1 3 1 3-1 3 1V9"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M7 7h4m-3 4H7m0 4h3"
            />
        </svg>
    );
}
export default Paper;
