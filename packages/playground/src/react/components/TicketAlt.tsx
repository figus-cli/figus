import React, { SVGProps } from "react";

export function TicketAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M18 21V3l-3 2-3-2-3 2-3-2v18l3-1.5 3 1.5 3-1.5 3 1.5Z"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M10 9h4m-4 6h4m-4-3h4"
                strokeWidth="2"
            />
        </svg>
    );
}
export default TicketAlt;
