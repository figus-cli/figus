import React, { SVGProps } from "react";

export function SubttasksAltFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="4"
                height="4"
                x="16"
                y="9"
                fill="currentColor"
                stroke="currentColor"
                rx="2"
                transform="rotate(90 16 9)"
            />
            <rect
                width="4"
                height="4"
                x="20"
                y="17"
                fill="currentColor"
                stroke="currentColor"
                rx="2"
                transform="rotate(90 20 17)"
            />
            <path
                stroke="currentColor"
                d="M5 4v11c0 1.8856 0 2.8284.5858 3.4142C6.1716 19 7.1144 19 9 19h7"
            />
            <path
                stroke="currentColor"
                d="M5 7c0 1.8856 0 2.8284.5858 3.4142C6.1716 11 7.1144 11 9 11h3"
            />
        </svg>
    );
}
export default SubttasksAltFill;
