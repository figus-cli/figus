import React, { SVGProps } from "react";

export function Boxes(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="8"
                height="8"
                x="5"
                y="4"
                stroke="currentColor"
                rx="1.8"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M4 13.8c0-.9941.8059-1.8 1.8-1.8h4.4c.9941 0 1.8.8059 1.8 1.8V20H5.8c-.9941 0-1.8-.8059-1.8-1.8v-4.4Zm8 0c0-.9941.8059-1.8 1.8-1.8h4.4c.9941 0 1.8.8059 1.8 1.8v4.4c0 .9941-.8059 1.8-1.8 1.8H12v-6.2Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M16 12v3m-8-3v3M9 4v3"
            />
        </svg>
    );
}
export default Boxes;
