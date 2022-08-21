import React, { SVGProps } from "react";

export function NfcLight(props: SVGProps<SVGSVGElement>) {
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
                d="m6 8 5 8m6.7224 4.5a16.9996 16.9996 0 0 0 0-17M14.3923 18a12.0002 12.0002 0 0 0 0-12m-3.4641 10a8.0006 8.0006 0 0 0 0-8m-4.8564 8a8 8 0 0 1 0-8"
            />
        </svg>
    );
}
export default NfcLight;
