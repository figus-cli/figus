import React, { SVGProps } from "react";

export function Message(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                rx="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m4 9 7.1056 3.5528a2 2 0 0 0 1.7888 0L20 9"
            />
        </svg>
    );
}
export default Message;
