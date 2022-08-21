import React, { SVGProps } from "react";

export function SunlightFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <path
                stroke="currentColor"
                d="M12 8V4m0 16v-4M9.1716 9.1712 6.343 6.3428m11.3138 11.3138-2.8284-2.8285M16 12h4M4 12h4m6.8284-2.8288 2.8285-2.8284M6.3432 17.6566l2.8284-2.8285"
            />
        </svg>
    );
}
export default SunlightFill;
