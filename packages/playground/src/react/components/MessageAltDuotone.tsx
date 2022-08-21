import React, { SVGProps } from "react";

export function MessageAltDuotone(props: SVGProps<SVGSVGElement>) {
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
                rx="2"
            />
            <path
                fill="currentColor"
                d="M4 16V9.2427a.15.15 0 0 1 .217-.1342l6.4414 3.2207a2.9998 2.9998 0 0 0 2.6832 0l6.4413-3.2207A.15.15 0 0 1 20 9.2427V16c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2Z"
            />
        </svg>
    );
}
export default MessageAltDuotone;
