import React, { SVGProps } from "react";

export function KeyAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M3 7c0-1.4001 0-2.1002.2725-2.635A2.5001 2.5001 0 0 1 4.365 3.2725C4.8998 3 5.6 3 7 3h10c1.4001 0 2.1002 0 2.635.2725a2.5 2.5 0 0 1 1.0925 1.0925C21 4.8998 21 5.6 21 7v10c0 1.4001 0 2.1002-.2725 2.635a2.5 2.5 0 0 1-1.0925 1.0925C19.1002 21 18.4001 21 17 21H7c-1.4001 0-2.1002 0-2.635-.2725a2.5 2.5 0 0 1-1.0925-1.0925C3 19.1002 3 18.4001 3 17V7Z"
            />
            <circle cx="8" cy="12" r="2" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M10 12h4m3 2v-1.85a.15.15 0 0 0-.15-.15H14m0 0v2"
            />
        </svg>
    );
}
export default KeyAlt;
