import React, { SVGProps } from "react";

export function DellDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                r="8.4"
                stroke="currentColor"
                strokeOpacity=".24"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m9 14.9997 6.0001-6M15 15 9 9"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default DellDuotoneLine;
