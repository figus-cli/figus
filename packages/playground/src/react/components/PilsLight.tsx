import React, { SVGProps } from "react";

export function PilsLight(props: SVGProps<SVGSVGElement>) {
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
                d="m9 16 7-7c1.3807-1.3807 1.3807-3.6193 0-5s-3.6193-1.3807-5 0l-7 7c-1.3807 1.3807-1.3807 3.6193 0 5s3.6193 1.3807 5 0Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12.5 12.5a9.5197 9.5197 0 0 1-5-5"
            />
            <circle cx="16.5" cy="16.5" r="4" stroke="currentColor" />
            <path fill="currentColor" stroke="currentColor" d="m19 14-5 5" />
        </svg>
    );
}
export default PilsLight;
