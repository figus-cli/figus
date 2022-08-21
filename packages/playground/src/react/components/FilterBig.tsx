import React, { SVGProps } from "react";

export function FilterBig(props: SVGProps<SVGSVGElement>) {
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
                d="M11 8h9M4 16h10"
            />
            <ellipse
                cx="7"
                cy="8"
                stroke="currentColor"
                rx="3"
                ry="3"
                transform="rotate(90 7 8)"
            />
            <ellipse
                cx="17"
                cy="16"
                stroke="currentColor"
                rx="3"
                ry="3"
                transform="rotate(90 17 16)"
            />
        </svg>
    );
}
export default FilterBig;
