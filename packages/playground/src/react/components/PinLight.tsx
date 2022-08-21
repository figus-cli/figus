import React, { SVGProps } from "react";

export function PinLight(props: SVGProps<SVGSVGElement>) {
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
                d="M19.5 12c0 5.018-5.4883 8.4027-7.0751 9.2764-.2681.1476-.5817.1476-.8498 0C9.9883 20.4027 4.5 17.018 4.5 12c0-4.5 3.634-7.5 7.5-7.5 4 0 7.5 3 7.5 7.5Z"
            />
            <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
        </svg>
    );
}
export default PinLight;
