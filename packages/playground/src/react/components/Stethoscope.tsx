import React, { SVGProps } from "react";

export function Stethoscope(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="19" cy="14" r="2" fill="currentColor" />
            <circle cx="9" cy="13" r="2" fill="currentColor" />
            <path
                stroke="currentColor"
                d="M19 14v2c0 2.7614-2.2386 5-5 5h-2c-2.5 0-3-1.6-3-8m0-1c3.9588 0 4.9791-2.9385 4.9997-5.9073a.149.149 0 0 0-.0826-.1342L12 5m-3 7c-3.9588 0-4.979-2.9385-4.9997-5.9073a.149.149 0 0 1 .0826-.1342L6 5"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Stethoscope;
