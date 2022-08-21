import React, { SVGProps } from "react";

export function ArrayLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M15 5h5v10c0 1.8856 0 2.8284-.5858 3.4142C18.8284 19 17.8856 19 16 19h-1"
            />
            <path
                fill="currentColor"
                d="M4 19h-.5v.5H4V19Zm0 .5h5v-1H4v1Zm5-15H6v1h3v-1ZM3.5 7v12h1V7h-1ZM6 4.5C4.6193 4.5 3.5 5.6193 3.5 7h1c0-.8284.6716-1.5 1.5-1.5v-1Z"
            />
        </svg>
    );
}
export default ArrayLight;
