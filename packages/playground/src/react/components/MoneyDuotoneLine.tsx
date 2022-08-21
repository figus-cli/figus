import React, { SVGProps } from "react";

export function MoneyDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M3.5858 6.5858C3 7.1716 3 8.1144 3 10v4c0 1.8856 0 2.8284.5858 3.4142C4.1716 18 5.1144 18 7 18h10c1.8856 0 2.8284 0 3.4142-.5858C21 16.8284 21 15.8856 21 14v-4c0-1.8856 0-2.8284-.5858-3.4142C19.8284 6 18.8856 6 17 6H7c-1.8856 0-2.8284 0-3.4142.5858ZM12 15c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3Z"
            />
            <rect
                width="18"
                height="12"
                x="3"
                y="6"
                stroke="currentColor"
                rx="2"
            />
            <path stroke="currentColor" d="M6 9h2m8 6h2" />
            <circle cx="12" cy="12" r="2.4" stroke="currentColor" />
        </svg>
    );
}
export default MoneyDuotoneLine;
