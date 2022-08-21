import React, { SVGProps } from "react";

export function CancelDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                strokeOpacity=".24"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M16 16 8 8"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default CancelDuotoneLine;
