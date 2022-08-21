import React, { SVGProps } from "react";

export function MicAltDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="12"
                height="16"
                x="6"
                y="3"
                fill="currentColor"
                stroke="currentColor"
                fillOpacity=".24"
                rx="6"
                strokeLinejoin="round"
                strokeWidth="1.2"
            />
            <path
                stroke="currentColor"
                d="M12 22v-3m-2-6H7m11 0h-2m-6-4H7m11 0h-2"
                strokeLinejoin="round"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default MicAltDuotone;
