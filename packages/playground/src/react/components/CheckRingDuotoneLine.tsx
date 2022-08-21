import React, { SVGProps } from "react";

export function CheckRingDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                r="9"
                fill="currentColor"
                stroke="currentColor"
            />
            <path stroke="currentColor" d="m8 12 3 3 5-6" />
        </svg>
    );
}
export default CheckRingDuotoneLine;
