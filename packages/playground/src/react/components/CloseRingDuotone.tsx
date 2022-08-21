import React, { SVGProps } from "react";

export function CloseRingDuotone(props: SVGProps<SVGSVGElement>) {
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
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="m9 9 6 6m0-6-6 6"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default CloseRingDuotone;
