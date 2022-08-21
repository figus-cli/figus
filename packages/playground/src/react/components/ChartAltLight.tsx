import React, { SVGProps } from "react";

export function ChartAltLight(props: SVGProps<SVGSVGElement>) {
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
                d="m17 9-3.0442 4.5662c-.4259.6389-1.383.5793-1.7264-.1075l-.4588-.9174c-.3434-.6868-1.3005-.7464-1.7264-.1075L7 17"
            />
            <rect
                width="18"
                height="18"
                x="3"
                y="3"
                stroke="currentColor"
                rx="2"
            />
        </svg>
    );
}
export default ChartAltLight;
