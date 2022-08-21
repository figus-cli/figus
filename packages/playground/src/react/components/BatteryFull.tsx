import React, { SVGProps } from "react";

export function BatteryFull(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="10"
                height="15"
                x="7"
                y="6"
                stroke="currentColor"
                rx="2"
                strokeWidth="2"
            />
            <rect
                width="6"
                height="11"
                x="9"
                y="8"
                fill="currentColor"
                rx=".8"
            />
            <path
                fill="currentColor"
                d="M9.2929 1.2929C9 1.5858 9 2.0572 9 3h6c0-.9428 0-1.4142-.2929-1.7071C14.4142 1 13.9428 1 13 1h-2c-.9428 0-1.4142 0-1.7071.2929Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default BatteryFull;
