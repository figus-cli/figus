import React, { SVGProps } from "react";

export function CompassNorth(props: SVGProps<SVGSVGElement>) {
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
                d="m6.1996 20.6341 5.6687-10.3927a.15.15 0 0 1 .2634 0l5.6687 10.3927c.0673.1234-.0568.2633-.1874.2111l-4.536-1.8144a.1499.1499 0 0 1-.0918-.1124l-.8376-4.6067c-.0299-.1642-.2653-.1642-.2952 0l-.8376 4.6067a.1499.1499 0 0 1-.0918.1124l-4.536 1.8144c-.1306.0522-.2547-.0877-.1874-.2111Z"
            />
            <path
                stroke="currentColor"
                d="M9 9V3.1207a.05.05 0 0 1 .0854-.0353l5.8292 5.8293A.05.05 0 0 0 15 8.8793V3"
                strokeWidth="2"
            />
        </svg>
    );
}
export default CompassNorth;
