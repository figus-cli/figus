import React, { SVGProps } from "react";

export function Calendar(props: SVGProps<SVGSVGElement>) {
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
                height="15"
                x="3"
                y="6"
                stroke="currentColor"
                rx="2"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M4 11h16M9 16h6M8 3v4m8-4v4"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Calendar;
