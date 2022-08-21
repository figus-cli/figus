import React, { SVGProps } from "react";

export function MoneyLight(props: SVGProps<SVGSVGElement>) {
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
                height="12"
                x="3"
                y="6"
                stroke="currentColor"
                rx="2"
            />
            <path fill="currentColor" stroke="currentColor" d="M5 9h3m8 6h3" />
            <circle cx="12" cy="12" r="2" stroke="currentColor" />
        </svg>
    );
}
export default MoneyLight;
