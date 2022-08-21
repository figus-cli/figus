import React, { SVGProps } from "react";

export function CloseSquareDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="9" fill="currentColor" />
            <path stroke="currentColor" d="m16 8-8 8m0-8 8 8" />
        </svg>
    );
}
export default CloseSquareDuotone;
