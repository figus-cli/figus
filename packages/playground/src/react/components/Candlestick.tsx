import React, { SVGProps } from "react";

export function Candlestick(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path fill="currentColor" stroke="currentColor" d="M8 3v3m0 8v3" />
            <rect
                width="4"
                height="8"
                x="6"
                y="6"
                stroke="currentColor"
                rx=".8"
            />
            <path fill="currentColor" stroke="currentColor" d="M16 7v5m0 5v3" />
            <rect
                width="4"
                height="5"
                x="14"
                y="12"
                stroke="currentColor"
                rx=".8"
            />
        </svg>
    );
}
export default Candlestick;
