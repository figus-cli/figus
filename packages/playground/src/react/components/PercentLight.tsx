import React, { SVGProps } from "react";

export function PercentLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path fill="currentColor" stroke="currentColor" d="M18 6 6 18" />
            <circle cx="7" cy="8" r="3.5" stroke="currentColor" />
            <circle cx="17" cy="16" r="3.5" stroke="currentColor" />
        </svg>
    );
}
export default PercentLight;
