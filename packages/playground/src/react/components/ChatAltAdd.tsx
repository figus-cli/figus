import React, { SVGProps } from "react";

export function ChatAltAdd(props: SVGProps<SVGSVGElement>) {
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
                d="M4 12c0-4.4183 3.5817-8 8-8s8 3.5817 8 8v5.0909c0 .8466 0 1.2699-.1261 1.608a1.9996 1.9996 0 0 1-1.175 1.175C18.3608 20 17.9375 20 17.0909 20H12c-4.4183 0-8-3.5817-8-8Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9 12h6m-3-3v6"
            />
        </svg>
    );
}
export default ChatAltAdd;
