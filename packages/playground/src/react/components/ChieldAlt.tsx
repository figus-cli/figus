import React, { SVGProps } from "react";

export function ChieldAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M16.8 16.4 15 17.75c-1.7778 1.3333-4.2222 1.3333-6 0L7.2 16.4A7.9999 7.9999 0 0 1 4 10V6c0-1.1046.8954-2 2-2h12c1.1046 0 2 .8954 2 2v4a8 8 0 0 1-3.2 6.4Z"
            />
            <circle cx="12" cy="10" r="1" fill="currentColor" />
            <circle cx="9" cy="10" r="1" fill="currentColor" />
            <circle cx="15" cy="10" r="1" fill="currentColor" />
        </svg>
    );
}
export default ChieldAlt;
