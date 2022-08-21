import React, { SVGProps } from "react";

export function CriticalLight(props: SVGProps<SVGSVGElement>) {
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
                d="M21 16a9.0002 9.0002 0 0 0-9-9 9 9 0 0 0-9 9h5.005a3.995 3.995 0 0 1 6.8199-2.8249A3.9954 3.9954 0 0 1 15.9949 16H21Zm-9-9v5m6.364-2.3643-3.3641 3.3641M5.636 9.6357 9 13"
            />
        </svg>
    );
}
export default CriticalLight;
