import React, { SVGProps } from "react";

export function MicDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="6"
                height="11"
                x="9"
                y="3"
                fill="currentColor"
                stroke="currentColor"
                fillOpacity=".24"
                rx="3"
                strokeLinejoin="round"
                strokeWidth="1.2"
            />
            <path
                stroke="currentColor"
                d="M5.4 11a6.6 6.6 0 1 0 13.2 0M12 21v-2"
                strokeLinejoin="round"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default MicDuotone;
