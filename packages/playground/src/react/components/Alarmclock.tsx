import React, { SVGProps } from "react";

export function Alarmclock(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="13" r="7" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M5 5 3 7m16-2 2 2M9 11l2.8093 1.8729a.25.25 0 0 0 .3339-.0519L14 10.5"
            />
        </svg>
    );
}
export default Alarmclock;
