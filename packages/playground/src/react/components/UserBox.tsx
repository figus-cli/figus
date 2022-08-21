import React, { SVGProps } from "react";

export function UserBox(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M17.7956 20.7059c-.3419-1.0632-1.0952-2.0026-2.143-2.6727C14.6047 17.3632 13.3208 17 12 17c-1.3208 0-2.6047.3632-3.6526 1.0332-1.0478.6701-1.8011 1.6095-2.143 2.6727"
                strokeWidth="2"
            />
            <circle
                cx="12"
                cy="10"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
            />
            <rect
                width="18"
                height="18"
                x="3"
                y="3"
                stroke="currentColor"
                rx="3"
                strokeWidth="2"
            />
        </svg>
    );
}
export default UserBox;
