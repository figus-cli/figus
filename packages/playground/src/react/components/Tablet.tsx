import React, { SVGProps } from "react";

export function Tablet(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                rx="2"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M15 17H9"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Tablet;
