import React, { SVGProps } from "react";

export function KeyLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="9" cy="14" r="4" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m12 11 3.5-3.5M17 6l-1.5 1.5m0 0L18 10"
            />
        </svg>
    );
}
export default KeyLight;
