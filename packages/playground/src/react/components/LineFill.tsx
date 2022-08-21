import React, { SVGProps } from "react";

export function LineFill(props: SVGProps<SVGSVGElement>) {
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
                x="6"
                y="13"
                fill="currentColor"
                stroke="currentColor"
                rx="2"
                strokeWidth="2"
                transform="rotate(90 6 13)"
            />
            <rect
                width="4"
                height="4"
                x="17"
                y="12"
                fill="currentColor"
                stroke="currentColor"
                rx="2"
                strokeWidth="2"
                transform="rotate(-90 17 12)"
            />
            <path
                stroke="currentColor"
                d="m18 11-1.5 1.5c-1.0171 1.0171-1.5256 1.5256-2.1372 1.6384a2.0019 2.0019 0 0 1-.7256 0c-.6116-.1128-1.1201-.6213-2.1372-1.6384-1.0171-1.0171-1.5256-1.5256-2.1372-1.6384a2.0015 2.0015 0 0 0-.7256 0c-.6116.1128-1.1201.6213-2.1372 1.6384L5 14"
                strokeWidth="2"
            />
        </svg>
    );
}
export default LineFill;
