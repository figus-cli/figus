import React, { SVGProps } from "react";

export function LoadList(props: SVGProps<SVGSVGElement>) {
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
                d="M3 4h18M5 4h14v11.8c0 1.1201 0 1.6802-.218 2.108a1.9996 1.9996 0 0 1-.874.874C17.4802 19 16.9201 19 15.8 19H8.2c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C5 17.4802 5 16.9201 5 15.8V4Zm7 11V9"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m9 12 2.8939-2.894a.15.15 0 0 1 .2122 0L15 12"
                strokeWidth="2"
            />
        </svg>
    );
}
export default LoadList;
