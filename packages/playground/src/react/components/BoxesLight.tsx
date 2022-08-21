import React, { SVGProps } from "react";

export function BoxesLight(props: SVGProps<SVGSVGElement>) {
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
                d="M6.5 6.3c0-.9941.8059-1.8 1.8-1.8h6.4c.9941 0 1.8.8059 1.8 1.8v5.2H8.3c-.9941 0-1.8-.8059-1.8-1.8V6.3Zm-2 7c0-.9941.8059-1.8 1.8-1.8h6.2v8H6.3c-.9941 0-1.8-.8059-1.8-1.8v-4.4Zm8-1.8h6.2c.9941 0 1.8.8059 1.8 1.8v4.4c0 .9941-.8059 1.8-1.8 1.8h-6.2v-8Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M16.5 11.5v3m-8-3v3m3-10v3"
            />
        </svg>
    );
}
export default BoxesLight;
