import React, { SVGProps } from "react";

export function OrderDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="14"
                height="17"
                x="5"
                y="4"
                fill="currentColor"
                stroke="currentColor"
                fillOpacity=".24"
                rx="2"
                strokeWidth="1.2"
            />
            <path
                stroke="currentColor"
                d="M9 9h6m-6 4h6m-6 4h4"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default OrderDuotoneLine;
