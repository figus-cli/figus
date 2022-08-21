import React, { SVGProps } from "react";

export function DateTodayDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M3 10c0-1.8856 0-2.8284.5858-3.4142C4.1716 6 5.1144 6 7 6h10c1.8856 0 2.8284 0 3.4142.5858C21 7.1716 21 8.1144 21 10v1H3v-1Z"
            />
            <rect
                width="18"
                height="15"
                x="3"
                y="6"
                stroke="currentColor"
                rx="2"
            />
            <path fill="currentColor" stroke="currentColor" d="M7 3v5m10-5v5" />
        </svg>
    );
}
export default DateTodayDuotoneLine;
