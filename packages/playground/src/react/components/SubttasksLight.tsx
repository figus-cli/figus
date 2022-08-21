import React, { SVGProps } from "react";

export function SubttasksLight(props: SVGProps<SVGSVGElement>) {
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
                x="18"
                y="9"
                stroke="currentColor"
                rx="2"
                transform="rotate(90 18 9)"
            />
            <rect
                width="4"
                height="4"
                x="18"
                y="17"
                stroke="currentColor"
                rx="2"
                transform="rotate(90 18 17)"
            />
            <rect
                width="4"
                height="4"
                x="3"
                y="7"
                stroke="currentColor"
                rx="2"
                transform="rotate(-90 3 7)"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M5 8v7c0 1.8856 0 2.8284.5858 3.4142C6.1716 19 7.1144 19 9 19h5"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M5 7c0 1.8856 0 2.8284.5858 3.4142C6.1716 11 7.1144 11 9 11h5"
            />
        </svg>
    );
}
export default SubttasksLight;
