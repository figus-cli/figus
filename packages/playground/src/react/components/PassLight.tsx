import React, { SVGProps } from "react";

export function PassLight(props: SVGProps<SVGSVGElement>) {
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
                d="M5.5 5.5c0-.5523.4477-1 1-1h11c.5523 0 1 .4477 1 1v13c0 .5523-.4477 1-1 1h-11c-.5523 0-1-.4477-1-1v-13Z"
                strokeLinejoin="round"
            />
            <circle
                cx="12"
                cy="10"
                r="3.5"
                stroke="currentColor"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M13.5 10c0 1.0438-.2126 1.964-.533 2.6048-.3354.6707-.7061.8952-.967.8952s-.6316-.2245-.967-.8952c-.3204-.6408-.533-1.561-.533-2.6048s.2126-1.964.533-2.6048c.3354-.6707.7061-.8952.967-.8952s.6316.2245.967.8952c.3204.6408.533 1.561.533 2.6048Z"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M15.5 10h-7m7 5.5h-7m6 2h-5"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default PassLight;
