import React, { SVGProps } from "react";

export function ChatPlusFill(props: SVGProps<SVGSVGElement>) {
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
                d="M13.7586 3.006C13.2404 3 12.6591 3 12 3c-2.7957 0-4.1935 0-5.2961.4567A6 6 0 0 0 3.4567 6.704C3 7.8065 3 9.2043 3 12v3c0 2.8284 0 4.2426.8787 5.1213C4.7574 21 6.1716 21 9 21h3c2.7956 0 4.1935 0 5.2961-.4567a6.0001 6.0001 0 0 0 3.2472-3.2472C21 16.1935 21 14.7956 21 12c0-.6591 0-1.2404-.006-1.7586A2.9884 2.9884 0 0 1 19 11c-1.6569 0-3-1.3431-3-3-1.6569 0-3-1.3431-3-3 0-.7655.2867-1.464.7586-1.994ZM9 8.9997c-.5523 0-1 .4477-1 1 0 .5522.4477 1 1 1h6c.5523 0 1-.4478 1-1 0-.5523-.4477-1-1-1H9Zm0 4c-.5523 0-1 .4477-1 1 0 .5522.4477 1 1 1h3c.5523 0 1-.4478 1-1 0-.5523-.4477-1-1-1H9Z"
            />
            <path stroke="currentColor" d="M19 8V2m-3 3h6" />
        </svg>
    );
}
export default ChatPlusFill;
