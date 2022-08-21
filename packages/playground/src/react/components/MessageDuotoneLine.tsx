import React, { SVGProps } from "react";

export function MessageDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                d="m4 9 7.1056 3.5528a2 2 0 0 0 1.7888 0L20 9"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M11.3739 12.0161 5.2932 8.9758A1.254 1.254 0 0 1 4.6 7.8541C4.6 7.1615 5.1615 6.6 5.8541 6.6h12.2918c.6926 0 1.2541.5615 1.2541 1.2541 0 .475-.2684.9093-.6933 1.1217l-6.0806 3.0403a1.3998 1.3998 0 0 1-1.2522 0Z"
            />
        </svg>
    );
}
export default MessageDuotoneLine;
