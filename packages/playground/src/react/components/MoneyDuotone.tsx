import React, { SVGProps } from "react";

export function MoneyDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M3 10c0-1.8856 0-2.8284.5858-3.4142C4.1716 6 5.1144 6 7 6h10c1.8856 0 2.8284 0 3.4142.5858C21 7.1716 21 8.1144 21 10v4c0 1.8856 0 2.8284-.5858 3.4142C19.8284 18 18.8856 18 17 18H7c-1.8856 0-2.8284 0-3.4142-.5858C3 16.8284 3 15.8856 3 14v-4Z"
                fillOpacity=".24"
            />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <rect
                width="3"
                height="1"
                x="5"
                y="8"
                fill="currentColor"
                rx=".5"
            />
            <rect
                width="3"
                height="1"
                x="16"
                y="15"
                fill="currentColor"
                rx=".5"
            />
        </svg>
    );
}
export default MoneyDuotone;
