import React, { SVGProps } from "react";

export function ChatPlusLight(props: SVGProps<SVGSVGElement>) {
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
                d="M12 5c3.866 0 7 3.134 7 7v4.4545c0 .507 0 .7605-.0457.9706a2 2 0 0 1-1.5292 1.5292C17.215 19 16.9615 19 16.4545 19H12c-3.866 0-7-3.134-7-7"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9 11h6M5 8V2M2 5h6m4 10h3"
            />
        </svg>
    );
}
export default ChatPlusLight;
