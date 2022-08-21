import React, { SVGProps } from "react";

export function DoneRoundDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="10" cy="14" r="7" fill="currentColor" />
            <path
                stroke="currentColor"
                d="m6 13 3.214 2.4104a1 1 0 0 0 1.3893-.186L17 7"
            />
        </svg>
    );
}
export default DoneRoundDuotoneLine;
