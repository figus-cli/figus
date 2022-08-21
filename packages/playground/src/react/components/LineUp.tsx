import React, { SVGProps } from "react";

export function LineUp(props: SVGProps<SVGSVGElement>) {
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
                d="m21 6-5.2929 5.2929c-.3905.3905-1.0237.3905-1.4142 0l-1.5858-1.5858c-.3905-.3905-1.0237-.3905-1.4142 0L7 14"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M3 3v14.8c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C4.5198 21 5.08 21 6.2 21H21"
                strokeWidth="2"
            />
        </svg>
    );
}
export default LineUp;
