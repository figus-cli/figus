import React, { SVGProps } from "react";

export function CreditcardDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M3 11h18v4c0 1.8856 0 2.8284-.5858 3.4142C19.8284 19 18.8856 19 17 19H7c-1.8856 0-2.8284 0-3.4142-.5858C3 17.8284 3 16.8856 3 15v-4Z"
            />
            <rect
                width="18"
                height="13"
                x="3"
                y="6"
                stroke="currentColor"
                rx="2"
            />
            <path stroke="currentColor" d="M7 15h.01M3 11h18" />
        </svg>
    );
}
export default CreditcardDuotoneLine;
