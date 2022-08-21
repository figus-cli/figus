import React, { SVGProps } from "react";

export function Order(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                rx="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9 9h6m-6 4h6m-6 4h4"
            />
        </svg>
    );
}
export default Order;
