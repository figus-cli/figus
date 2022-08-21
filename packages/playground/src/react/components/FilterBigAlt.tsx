import React, { SVGProps } from "react";

export function FilterBigAlt(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <ellipse
                cx="7"
                cy="7"
                stroke="currentColor"
                rx="3"
                ry="3"
                transform="rotate(90 7 7)"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9.5 5H18c1.1046 0 2 .8954 2 2s-.8954 2-2 2H9.5"
            />
            <ellipse
                stroke="currentColor"
                rx="3"
                ry="3"
                transform="matrix(0 1 1 0 17 17)"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M14.5 15H6c-1.1046 0-2 .8954-2 2s.8954 2 2 2h8.5"
            />
        </svg>
    );
}
export default FilterBigAlt;
