import React, { SVGProps } from "react";

export function CandlestickLight(props: SVGProps<SVGSVGElement>) {
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
                d="M7.5 3.5v3m0 8v4"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M6.8 6.5c-.718 0-1.3.582-1.3 1.3v5.4c0 .718.582 1.3 1.3 1.3h1.4c.718 0 1.3-.582 1.3-1.3V7.8c0-.718-.582-1.3-1.3-1.3H6.8Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M16.5 6.5v5m0 5v4"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M15.8 11.5c-.718 0-1.3.582-1.3 1.3v2.4c0 .718.582 1.3 1.3 1.3h1.4c.718 0 1.3-.582 1.3-1.3v-2.4c0-.718-.582-1.3-1.3-1.3h-1.4Z"
            />
        </svg>
    );
}
export default CandlestickLight;
