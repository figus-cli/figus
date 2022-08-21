import React, { SVGProps } from "react";

export function TransferTop(props: SVGProps<SVGSVGElement>) {
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
                d="M9 19v-7H5.4828c-.1781 0-.2674-.2154-.1414-.3414L12 5l6.6586 6.6586c.126.126.0367.3414-.1414.3414H15v7"
            />
        </svg>
    );
}
export default TransferTop;
