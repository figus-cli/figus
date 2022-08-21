import React, { SVGProps } from "react";

export function Copy(props: SVGProps<SVGSVGElement>) {
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
                d="M14 7c0-.9319 0-1.3978-.1522-1.7654a2.0003 2.0003 0 0 0-1.0824-1.0824C12.3978 4 11.9319 4 11 4H8c-1.8856 0-2.8284 0-3.4142.5858C4 5.1716 4 6.1144 4 8v3c0 .9319 0 1.3978.1522 1.7654.203.49.5924.8794 1.0824 1.0824C5.6022 14 6.0681 14 7 14"
            />
            <rect
                width="10"
                height="10"
                x="10"
                y="10"
                stroke="currentColor"
                rx="2"
            />
        </svg>
    );
}
export default Copy;
