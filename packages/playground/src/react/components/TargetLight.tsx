import React, { SVGProps } from "react";

export function TargetLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="7" stroke="currentColor" />
            <circle
                cx="12"
                cy="12"
                r="2"
                fill="currentColor"
                stroke="currentColor"
            />
            <path
                stroke="currentColor"
                d="M7.0503 7.0503 4 4.0003m12.9497 3.05L20 4.0003m0 16-3.0503-3.0505M4.0001 20.0003l3.0502-3.0505"
            />
        </svg>
    );
}
export default TargetLight;
