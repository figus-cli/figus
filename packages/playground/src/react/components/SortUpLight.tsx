import React, { SVGProps } from "react";

export function SortUpLight(props: SVGProps<SVGSVGElement>) {
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
                d="M5 16h8m-8-4h6M5 8h4"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m19 6 3 3m-3-3-3 3m3-3v12"
            />
        </svg>
    );
}
export default SortUpLight;
