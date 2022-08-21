import React, { SVGProps } from "react";

export function CandlestickDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M7.5 3.5v3m0 8v4"
                strokeOpacity=".24"
            />
            <path
                fill="currentColor"
                d="M5 7.8C5 6.8059 5.8059 6 6.8 6h1.4c.9941 0 1.8.8059 1.8 1.8v5.4c0 .9941-.8059 1.8-1.8 1.8H6.8c-.9941 0-1.8-.8059-1.8-1.8V7.8Z"
            />
            <path
                stroke="currentColor"
                d="M16.5 6.5v5m0 5v4"
                strokeOpacity=".24"
            />
            <path
                fill="currentColor"
                d="M14 12.8c0-.9941.8059-1.8 1.8-1.8h1.4c.9941 0 1.8.8059 1.8 1.8v2.4c0 .9941-.8059 1.8-1.8 1.8h-1.4c-.9941 0-1.8-.8059-1.8-1.8v-2.4Z"
            />
        </svg>
    );
}
export default CandlestickDuotoneLine;
