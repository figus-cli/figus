import React, { SVGProps } from "react";

export function SunlightLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="4" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 8V4m0 16v-4M9.1717 9.1712 6.3433 6.3428m11.3135 11.3138-2.8284-2.8285M16 12h4M4 12h4m6.8283-2.8288 2.8284-2.8284M6.3432 17.6566l2.8284-2.8285"
            />
        </svg>
    );
}
export default SunlightLight;
