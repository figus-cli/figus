import React, { SVGProps } from "react";

export function DelAltLight(props: SVGProps<SVGSVGElement>) {
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
                d="M18.5 7c0 1.5-3 2.5-6.5 2.5S5.5 8.5 5.5 7s3-2.5 6.5-2.5 6.5 1 6.5 2.5Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m5.5 7 1.8131 10.4253a1.8264 1.8264 0 0 0 1.2218 1.4197 10.9583 10.9583 0 0 0 6.9302 0 1.8264 1.8264 0 0 0 1.2218-1.4197L18.5 7"
            />
        </svg>
    );
}
export default DelAltLight;
