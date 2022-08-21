import React, { SVGProps } from "react";

export function TransferDown(props: SVGProps<SVGSVGElement>) {
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
                d="M9 5v7H5.4828c-.1781 0-.2674.2154-.1414.3414L12 19l6.6586-6.6586c.126-.126.0367-.3414-.1414-.3414H15V5"
                strokeWidth="2"
            />
        </svg>
    );
}
export default TransferDown;
