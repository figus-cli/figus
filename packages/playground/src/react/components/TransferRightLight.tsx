import React, { SVGProps } from "react";

export function TransferRightLight(props: SVGProps<SVGSVGElement>) {
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
                d="M5 9h7V5.4828c0-.1781.2154-.2674.3414-.1414L19 12l-6.6586 6.6586c-.126.126-.3414.0367-.3414-.1414V15H5"
            />
        </svg>
    );
}
export default TransferRightLight;
