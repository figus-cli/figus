import React, { SVGProps } from "react";

export function Lock(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M4 13c0-1.8856 0-2.8284.5858-3.4142C5.1716 9 6.1144 9 8 9h8c1.8856 0 2.8284 0 3.4142.5858C20 10.1716 20 11.1144 20 13v2c0 2.8284 0 4.2426-.8787 5.1213C18.2426 21 16.8284 21 14 21h-4c-2.8284 0-4.2426 0-5.1213-.8787C4 19.2426 4 17.8284 4 15v-2Z"
                strokeWidth="2"
            />
            <path
                stroke="currentColor"
                d="M16 8V7c0-2.2091-1.7909-4-4-4-2.2091 0-4 1.7909-4 4v1"
                strokeWidth="2"
            />
            <circle cx="12" cy="15" r="2" fill="currentColor" />
        </svg>
    );
}
export default Lock;
