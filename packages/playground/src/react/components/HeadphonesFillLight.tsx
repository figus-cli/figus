import React, { SVGProps } from "react";

export function HeadphonesFillLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="4"
                height="7"
                x="16"
                y="12"
                stroke="currentColor"
                rx="2"
            />
            <rect
                width="4"
                height="7"
                x="4"
                y="12"
                stroke="currentColor"
                rx="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M4 13v3m16-3v3m0-3c0-2.3869-.8429-4.6761-2.3431-6.364C16.1566 4.9482 14.1217 4 12 4s-4.1566.9482-5.6569 2.636C4.843 8.324 4 10.6131 4 13"
            />
        </svg>
    );
}
export default HeadphonesFillLight;
