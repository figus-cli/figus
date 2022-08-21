import React, { SVGProps } from "react";

export function ChatPlus(props: SVGProps<SVGSVGElement>) {
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
                d="M12 4C8.2288 4 6.3431 4 5.1716 5.1716 4 6.343 4 8.2288 4 12v6c0 .9428 0 1.4142.2929 1.7071C4.5858 20 5.0572 20 6 20h6c3.7712 0 5.6569 0 6.8284-1.1716C20 17.6569 20 15.7712 20 12"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9 10h6m-6 4h3m7-6V2m-3 3h6"
            />
        </svg>
    );
}
export default ChatPlus;
