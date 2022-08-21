import React, { SVGProps } from "react";

export function InfoAltDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                r="8"
                fill="currentColor"
                transform="matrix(-1 0 0 1 12 12)"
            />
            <path
                stroke="currentColor"
                d="M11 10.5h.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h.5m-1-7h.01"
            />
        </svg>
    );
}
export default InfoAltDuotone;
