import React, { SVGProps } from "react";

export function Rename(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path stroke="currentColor" d="M9 5h5m0 0h5m-5 0v14m-5 0h5m0 0h5" />
            <path
                fill="currentColor"
                d="M2 15H1v1h1v-1Zm0 1h9v-2H2v2Zm9-8H4v2h7V8ZM1 11v4h2v-4H1Zm3-3c-1.6568 0-3 1.3431-3 3h2c0-.5523.4477-1 1-1V8Zm18 1h1V8h-1v1Zm0-1h-5v2h5V8Zm-5 8h3v-2h-3v2Zm6-3V9h-2v4h2Zm-3 3c1.6569 0 3-1.3431 3-3h-2c0 .5523-.4477 1-1 1v2Z"
            />
        </svg>
    );
}
export default Rename;
