import React, { SVGProps } from "react";

export function CloseRingLight(props: SVGProps<SVGSVGElement>) {
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
                d="M12 21A8.9999 8.9999 0 0 1 3.685 8.5558a9.0001 9.0001 0 1 1 14.679 9.8082A9.0008 9.0008 0 0 1 12 21ZM9 9l6 6m0-6-6 6"
            />
        </svg>
    );
}
export default CloseRingLight;
