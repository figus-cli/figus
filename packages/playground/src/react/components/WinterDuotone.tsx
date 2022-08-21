import React, { SVGProps } from "react";

export function WinterDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="2.4"
                fill="currentColor"
                stroke="currentColor"
            />
            <path
                stroke="currentColor"
                d="M12 9V7m0-3v3m0 0L9 5m3 2 3-2m0 7h2m3 0h-3m0 0 2-3m-2 3 2 3m-7 0v2m0 3v-3m0 0-3 2m3-2 3 2m-6-7H7m-3 0h3m0 0L5 9m2 3-2 3"
            />
        </svg>
    );
}
export default WinterDuotone;
