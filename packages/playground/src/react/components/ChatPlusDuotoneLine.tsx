import React, { SVGProps } from "react";

export function ChatPlusDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M12 4c4.4183 0 8 3.5817 8 8v5.0909c0 .8466 0 1.2699-.1261 1.608a1.9996 1.9996 0 0 1-1.175 1.175C18.3608 20 17.9375 20 17.0909 20H12c-4.4183 0-8-3.5817-8-8"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9 11h6"
                strokeLinejoin="round"
                strokeOpacity=".24"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M5 8V2M2 5h6"
                strokeLinejoin="round"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 15h3"
                strokeLinejoin="round"
                strokeOpacity=".24"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default ChatPlusDuotoneLine;
