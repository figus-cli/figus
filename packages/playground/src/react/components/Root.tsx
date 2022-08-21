import React, { SVGProps } from "react";

export function Root(props: SVGProps<SVGSVGElement>) {
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
                d="m18.5 15.5-4-4m0 4 4-4M20 7h-6.9025a.15.15 0 0 0-.1371.089l-3.8313 8.6205c-.0515.1159-.2145.1196-.2713.0062l-1.8163-3.6328A.15.15 0 0 0 6.9073 12H6"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Root;
