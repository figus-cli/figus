import React, { SVGProps } from "react";

export function DelAltFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <ellipse
                cx="12"
                cy="7"
                stroke="currentColor"
                rx="7"
                ry="3"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M7 18 5 7l3 3h8l3-3-2 11-3 2h-4l-3-2Z"
            />
            <path
                stroke="currentColor"
                d="m5 7 1.9962 10.9792a.0682.0682 0 0 0 .0188.0358c2.7531 2.7531 7.2169 2.7531 9.97 0a.0681.0681 0 0 0 .0188-.0358L19 7"
                strokeWidth="2"
            />
        </svg>
    );
}
export default DelAltFill;
