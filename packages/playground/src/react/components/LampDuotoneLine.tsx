import React, { SVGProps } from "react";

export function LampDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="9" r="7" fill="currentColor" />
            <path
                stroke="currentColor"
                d="M11 14V9.75c0-.6904-.5596-1.25-1.25-1.25S8.5 9.0596 8.5 9.75 9.0596 11 9.75 11h4.5c.6904 0 1.25-.5596 1.25-1.25s-.5596-1.25-1.25-1.25S13 9.0596 13 9.75V14"
            />
            <path
                fill="currentColor"
                d="M15 16.5637c0-.1102-.115-.1831-.216-.1392C13.9307 16.7947 12.9893 17 12 17c-.9893 0-1.9307-.2053-2.784-.5755-.101-.0439-.216.029-.216.1392V18.5c0 1.3807 1.1193 2.5 2.5 2.5h1c1.3807 0 2.5-1.1193 2.5-2.5v-1.9363Z"
            />
        </svg>
    );
}
export default LampDuotoneLine;
