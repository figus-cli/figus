import React, { SVGProps } from "react";

export function PhoneDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="12"
                height="18"
                x="6"
                y="3"
                fill="currentColor"
                stroke="currentColor"
                rx="2"
            />
            <path
                stroke="currentColor"
                d="M9 3c0 .465 0 .6975.0511.8882a1.5 1.5 0 0 0 1.0607 1.0607C10.3025 5 10.535 5 11 5h2c.465 0 .6975 0 .8882-.0511a1.5 1.5 0 0 0 1.0607-1.0607C15 3.6975 15 3.465 15 3"
            />
            <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>
    );
}
export default PhoneDuotoneLine;
