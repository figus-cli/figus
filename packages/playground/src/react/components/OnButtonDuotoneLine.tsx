import React, { SVGProps } from "react";

export function OnButtonDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                cy="15"
                r="5"
                fill="currentColor"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="M6.3431 6.3431a8 8 0 1 0 11.3138 0M12 8V4"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default OnButtonDuotoneLine;
