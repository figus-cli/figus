import React, { SVGProps } from "react";

export function MicLight(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                rx="3"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M5.5 11a6.5 6.5 0 0 0 13 0M12 21v-2"
            />
        </svg>
    );
}
export default MicLight;
