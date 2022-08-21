import React, { SVGProps } from "react";

export function DoneRoundDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="8"
                fill="currentColor"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="m8.5 11 2.2929 2.2929c.3905.3905 1.0237.3905 1.4142 0L19.5 6"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default DoneRoundDuotone;
