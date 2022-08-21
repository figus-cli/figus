import React, { SVGProps } from "react";

export function OrderDuotone(props: SVGProps<SVGSVGElement>) {
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
                height="18"
                x="5"
                y="3"
                fill="currentColor"
                rx="2"
            />
            <path stroke="currentColor" d="M9.5 7.5h5m-5 3h3m-3 3h4m-4 3h3" />
            <rect
                width="1"
                height="1"
                x="7"
                y="7"
                fill="currentColor"
                rx=".5"
            />
            <rect
                width="1"
                height="1"
                x="7"
                y="10"
                fill="currentColor"
                rx=".5"
            />
            <rect
                width="1"
                height="1"
                x="7"
                y="13"
                fill="currentColor"
                rx=".5"
            />
            <rect
                width="1"
                height="1"
                x="7"
                y="16"
                fill="currentColor"
                rx=".5"
            />
        </svg>
    );
}
export default OrderDuotone;
