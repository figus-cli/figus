import React, { SVGProps } from "react";

export function SunlightDuotone(props: SVGProps<SVGSVGElement>) {
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
                r="4"
                fill="currentColor"
                stroke="currentColor"
            />
            <path
                stroke="currentColor"
                d="M12 8V4m0 16v-4M9.1717 9.1716 6.3433 6.343m11.3135 11.3139-2.8284-2.8285M16 12h4M4 12h4m6.8283-2.8284 2.8284-2.8285M6.3432 17.6569l2.8284-2.8285"
            />
        </svg>
    );
}
export default SunlightDuotone;
