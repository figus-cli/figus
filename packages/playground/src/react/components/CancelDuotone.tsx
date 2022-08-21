import React, { SVGProps } from "react";

export function CancelDuotone(props: SVGProps<SVGSVGElement>) {
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
                r="8.5"
                fill="currentColor"
                stroke="currentColor"
                fillOpacity=".24"
            />
            <path stroke="currentColor" d="M18 18 6 6" />
        </svg>
    );
}
export default CancelDuotone;
