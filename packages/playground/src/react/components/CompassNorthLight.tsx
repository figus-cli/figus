import React, { SVGProps } from "react";

export function CompassNorthLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="m7.5577 20.3781 4.3971-9.2827a.05.05 0 0 1 .0904 0l4.3971 9.2827a.05.05 0 0 1-.0655.0671l-4.3565-1.9362a.0503.0503 0 0 0-.0406 0l-4.3565 1.9362a.05.05 0 0 1-.0655-.0671Z"
            />
            <path fill="currentColor" d="M11.5 11.5v7h1v-7h-1Z" />
            <path
                stroke="currentColor"
                d="M10.5 8.5V3.6805c0-.0507.0668-.0692.0929-.0257l2.8142 4.6904c.0261.0435.0929.025.0929-.0257V3.5"
            />
        </svg>
    );
}
export default CompassNorthLight;
