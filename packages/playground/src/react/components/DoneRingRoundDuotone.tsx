import React, { SVGProps } from "react";

export function DoneRingRoundDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="8" fill="currentColor" />
            <path
                stroke="currentColor"
                d="m8.5 11 2.8939 2.8939a.15.15 0 0 0 .2122 0L19.5 6"
            />
            <path
                stroke="currentColor"
                d="M19.3578 10.5465A7.5 7.5 0 1 1 15.75 5.5048"
            />
        </svg>
    );
}
export default DoneRingRoundDuotone;
