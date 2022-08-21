import React, { SVGProps } from "react";

export function Ito(props: SVGProps<SVGSVGElement>) {
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
                d="M6 7c0-.5523.4477-1 1-1h8c1.6569 0 3 1.3431 3 3v8c0 .5523-.4477 1-1 1H7c-.5523 0-1-.4477-1-1V7Zm3-1V2m0 20v-4m6 4v-4m7-3h-4M6 15H2m4-6H2m13-6a6.0003 6.0003 0 0 1 6 6"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Ito;
