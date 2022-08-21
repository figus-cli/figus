import React, { SVGProps } from "react";

export function WatchLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="5.5" stroke="currentColor" />
            <path
                stroke="currentColor"
                d="m8.5 7.5.407-3.2554A.85.85 0 0 1 9.7503 3.5h4.4992a.85.85 0 0 1 .8435.7446L15.5 7.5m-7 9 .407 3.2554a.85.85 0 0 0 .8434.7446h4.4992a.85.85 0 0 0 .8435-.7446L15.5 16.5"
            />
            <path
                fill="currentColor"
                d="M18.15 11h-.65v2h.65a.85.85 0 0 0 .85-.85v-.3a.85.85 0 0 0-.85-.85Z"
            />
            <path stroke="currentColor" d="m12 12-2-2.5m2 2.5 2.5.5004" />
        </svg>
    );
}
export default WatchLight;
