import React, { SVGProps } from "react";

export function Creditcard(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="18"
                height="13"
                x="3"
                y="6"
                stroke="currentColor"
                rx="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M7 15h.01M4 11h17"
            />
        </svg>
    );
}
export default Creditcard;
