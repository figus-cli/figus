import React, { SVGProps } from "react";

export function InfoAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M10.5 12H12v4h2m-2-8h.01m1.5528 12.8633a8.9998 8.9998 0 0 0 7.2239-6.9153 9.001 9.001 0 0 0-1.1962-6.7837A9.0002 9.0002 0 0 0 7.1643 4.4095a9 9 0 0 0 6.3985 16.4538Z"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
}
export default InfoAlt;
