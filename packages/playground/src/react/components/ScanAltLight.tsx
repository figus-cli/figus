import React, { SVGProps } from "react";

export function ScanAltLight(props: SVGProps<SVGSVGElement>) {
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
                d="M20 10V9c0-.93 0-1.395-.1022-1.7765a3.0001 3.0001 0 0 0-2.1213-2.1213C17.395 5 16.93 5 16 5m4 9v1c0 .93 0 1.395-.1022 1.7765a3.0002 3.0002 0 0 1-2.1213 2.1213C17.395 19 16.93 19 16 19m-6 0H9c-1.8692 0-2.8038 0-3.5-.4019A2.9997 2.9997 0 0 1 4.402 17.5C4 16.8038 4 15.8692 4 14m6-9H9c-1.8692 0-2.8038 0-3.5.402A3 3 0 0 0 4.402 6.5C4 7.1962 4 8.1308 4 10"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M10 21V3"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default ScanAltLight;
