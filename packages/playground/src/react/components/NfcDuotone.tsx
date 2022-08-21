import React, { SVGProps } from "react";

export function NfcDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="m5 8 5 8"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M18.7224 20.5a16.9996 16.9996 0 0 0 0-17M14.3923 18a12.0002 12.0002 0 0 0 0-12"
                strokeOpacity=".24"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M9.9282 16a8.0006 8.0006 0 0 0 0-8m-4.8564 8a8 8 0 0 1 0-8"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default NfcDuotone;
