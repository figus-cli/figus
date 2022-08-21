import React, { SVGProps } from "react";

export function CheckRingRoundDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="8" fill="currentColor" />
            <path
                stroke="currentColor"
                d="m9.5 12 1.8939 1.8939a.15.15 0 0 0 .2122 0L15.5 10"
            />
            <path
                stroke="currentColor"
                d="M19.5 12a7.5002 7.5002 0 0 1-12.8033 5.3033A7.5002 7.5002 0 0 1 7.8332 5.764 7.5 7.5 0 0 1 12 4.5"
            />
        </svg>
    );
}
export default CheckRingRoundDuotone;
