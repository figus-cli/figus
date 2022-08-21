import React, { SVGProps } from "react";

export function FilterAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M12 7h8M4 7h4m9 10h3M4 17h8"
                strokeWidth="2"
            />
            <circle
                cx="10"
                cy="7"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
                transform="rotate(90 10 7)"
            />
            <circle
                cx="15"
                cy="17"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
                transform="rotate(90 15 17)"
            />
        </svg>
    );
}
export default FilterAlt;
