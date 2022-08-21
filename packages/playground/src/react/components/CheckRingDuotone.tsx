import React, { SVGProps } from "react";

export function CheckRingDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="8"
                fill="currentColor"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="m9.5 12 1.8939 1.8939a.15.15 0 0 0 .2122 0L15.5 10"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default CheckRingDuotone;
