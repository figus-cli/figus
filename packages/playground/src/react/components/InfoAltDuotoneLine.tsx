import React, { SVGProps } from "react";

export function InfoAltDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M11 10.5h.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h.5m-1-7h.01"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M13.3892 19.8785a8.0006 8.0006 0 0 0 6.4212-6.147 8.0003 8.0003 0 0 0-3.2218-8.2847 8.0001 8.0001 0 1 0-3.1994 14.4317Z"
                strokeOpacity=".24"
            />
        </svg>
    );
}
export default InfoAltDuotoneLine;
