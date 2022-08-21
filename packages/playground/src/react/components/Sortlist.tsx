import React, { SVGProps } from "react";

export function Sortlist(props: SVGProps<SVGSVGElement>) {
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
                d="M5 7h7m-7 5h7m-7 5h7"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m19 20 3-3m-3 3-3-3m3 3V4m0 0-3 3m3-3 3 3"
            />
        </svg>
    );
}
export default Sortlist;
