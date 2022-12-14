import React, { SVGProps } from "react";

export function TargetDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M7.0503 7.0503 4 4.0003m12.9497 3.05L20 4.0003m0 16-3.0503-3.0505M4.0001 20.0003l3.0502-3.0505"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                d="M12 19c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7Zm0-4c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M18.4 12c0 3.5346-2.8654 6.4-6.4 6.4v1.2c4.1974 0 7.6-3.4026 7.6-7.6h-1.2ZM12 5.6c3.5346 0 6.4 2.8654 6.4 6.4h1.2c0-4.1974-3.4026-7.6-7.6-7.6v1.2ZM5.6 12c0-3.5346 2.8654-6.4 6.4-6.4V4.4c-4.1974 0-7.6 3.4026-7.6 7.6h1.2Zm6.4 6.4c-3.5346 0-6.4-2.8654-6.4-6.4H4.4c0 4.1974 3.4026 7.6 7.6 7.6v-1.2Zm2.4-6.4c0 1.3255-1.0745 2.4-2.4 2.4v1.2c1.9882 0 3.6-1.6118 3.6-3.6h-1.2ZM12 9.6c1.3255 0 2.4 1.0745 2.4 2.4h1.2c0-1.9882-1.6118-3.6-3.6-3.6v1.2ZM9.6 12c0-1.3255 1.0745-2.4 2.4-2.4V8.4c-1.9882 0-3.6 1.6118-3.6 3.6h1.2Zm2.4 2.4c-1.3255 0-2.4-1.0745-2.4-2.4H8.4c0 1.9882 1.6118 3.6 3.6 3.6v-1.2Z"
            />
        </svg>
    );
}
export default TargetDuotoneLine;
