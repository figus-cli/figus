import React, { SVGProps } from "react";

export function StopDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="4"
                height="14"
                x="6"
                y="5"
                fill="currentColor"
                stroke="currentColor"
                fillOpacity=".24"
                rx="1"
                strokeWidth="1.2"
            />
            <rect
                width="4"
                height="14"
                x="14"
                y="5"
                fill="currentColor"
                stroke="currentColor"
                fillOpacity=".24"
                rx="1"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default StopDuotone;
