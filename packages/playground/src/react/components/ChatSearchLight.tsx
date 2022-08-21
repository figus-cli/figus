import React, { SVGProps } from "react";

export function ChatSearchLight(props: SVGProps<SVGSVGElement>) {
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
                d="M14.5 18.5h-8c-.5523 0-1-.4477-1-1v-8c0-2.2091 1.7909-4 4-4h5c2.2091 0 4 1.7909 4 4v2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M7.5 10.5h7m-7 3h5"
            />
            <circle cx="16.5" cy="15.5" r="2" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m19 18 1.5 1.5"
            />
        </svg>
    );
}
export default ChatSearchLight;
