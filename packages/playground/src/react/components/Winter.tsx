import React, { SVGProps } from "react";

export function Winter(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="3" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 8V6m0-3v3m0 0L9 4m3 2 3-2m1 8h2m3 0h-3m0 0 2-3m-2 3 2 3m-8 1v2m0 3v-3m0 0-3 2m3-2 3 2m-7-8H6m-3 0h3m0 0L4 9m2 3-2 3"
            />
        </svg>
    );
}
export default Winter;
