import React, { SVGProps } from "react";

export function PilLight(props: SVGProps<SVGSVGElement>) {
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
                d="m11 18 7-7c1.3807-1.3807 1.3807-3.6193 0-5s-3.6193-1.3807-5 0l-7 7c-1.3807 1.3807-1.3807 3.6193 0 5s3.6193 1.3807 5 0Z"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M14.5 14.5a9.5196 9.5196 0 0 1-5-5"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default PilLight;
