import React, { SVGProps } from "react";

export function MessageAltDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="16"
                height="12"
                x="4"
                y="6"
                fill="currentColor"
                stroke="currentColor"
                rx="2"
            />
            <path
                fill="currentColor"
                d="M11.1056 12.5528 4 9v7c0 1.1046.8954 2 2 2h12c1.1046 0 2-.8954 2-2V9l-7.1056 3.5528a2 2 0 0 1-1.7888 0Z"
            />
        </svg>
    );
}
export default MessageAltDuotoneLine;
