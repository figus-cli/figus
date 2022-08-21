import React, { SVGProps } from "react";

export function KeyAltDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M3 11c0-3.7712 0-5.6569 1.1716-6.8284C5.343 3 7.2288 3 11 3h2c3.7712 0 5.6569 0 6.8284 1.1716C21 5.343 21 7.2288 21 11v2c0 3.7712 0 5.6569-1.1716 6.8284C18.6569 21 16.7712 21 13 21h-2c-3.7712 0-5.6569 0-6.8284-1.1716C3 18.6569 3 16.7712 3 13v-2Z"
            />
            <circle cx="8.5" cy="11.5" r="2" stroke="currentColor" />
            <path
                stroke="currentColor"
                d="M10.5 11.5h5m2 2v-1.85a.15.15 0 0 0-.15-.15H15.5m0 0v2"
            />
        </svg>
    );
}
export default KeyAltDuotone;
