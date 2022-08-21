import React, { SVGProps } from "react";

export function ChatSearch(props: SVGProps<SVGSVGElement>) {
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
                d="M11.4615 20H4c-.5523 0-1-.4477-1-1V8c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v3.3846M7 14h3m-3-4h6"
            />
            <circle cx="16.5" cy="15.5" r="2.5" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m18.5 17.5 3 3"
            />
        </svg>
    );
}
export default ChatSearch;
