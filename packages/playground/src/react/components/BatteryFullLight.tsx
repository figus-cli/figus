import React, { SVGProps } from "react";

export function BatteryFullLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="9"
                height="14"
                x="7.5"
                y="6.5"
                stroke="currentColor"
                rx="1.5"
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
                d="M9.2929 3.2929C9 3.5858 9 4.0572 9 5h6c0-.9428 0-1.4142-.2929-1.7071C14.4142 3 13.9428 3 13 3h-2c-.9428 0-1.4142 0-1.7071.2929Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default BatteryFullLight;
