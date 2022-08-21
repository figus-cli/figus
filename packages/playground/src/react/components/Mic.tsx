import React, { SVGProps } from "react";

export function Mic(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="6"
                height="11"
                x="9"
                y="3"
                stroke="currentColor"
                rx="3"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M5 11a6.9998 6.9998 0 0 0 11.9497 4.9497A6.9997 6.9997 0 0 0 19 11m-7 10v-2"
            />
        </svg>
    );
}
export default Mic;
