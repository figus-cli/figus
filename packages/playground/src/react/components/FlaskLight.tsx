import React, { SVGProps } from "react";

export function FlaskLight(props: SVGProps<SVGSVGElement>) {
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
                d="M15.5 10.5v8.0016c0 1.6568-1.3431 2.9984-3 2.9984s-3-1.3431-3-3v-8"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                d="M15.5 8a.5.5 0 0 0 0 1V8Zm-4 1a.5.5 0 0 0 0-1v1Zm-3 2h8v-1h-8v1Zm8-3h-1v1h1V8Zm-5 0h-3v1h3V8ZM18 9.5c0-.8284-.6716-1.5-1.5-1.5v1a.5.5 0 0 1 .5.5h1ZM16.5 11c.8284 0 1.5-.6716 1.5-1.5h-1a.5.5 0 0 1-.5.5v1ZM7 9.5c0 .8284.6716 1.5 1.5 1.5v-1a.5.5 0 0 1-.5-.5H7Zm1 0a.5.5 0 0 1 .5-.5V8C7.6716 8 7 8.6716 7 9.5h1Zm5.5 6h.5a.5.5 0 0 0-.5-.5v.5Zm-2 0V15a.5.5 0 0 0-.5.5h.5Zm1.5 0v3h1v-3h-1Zm-1 3v-3h-1v3h1Zm-.5-2.5h2v-1h-2v1Zm1 3a.5.5 0 0 1-.5-.5h-1c0 .8284.6716 1.5 1.5 1.5v-1Zm.5-.5a.5.5 0 0 1-.5.5v1c.8284 0 1.5-.6716 1.5-1.5h-1Z"
            />
            <circle
                cx="16"
                cy="4"
                r="1.5"
                stroke="currentColor"
                strokeLinejoin="round"
            />
            <circle cx="13.5" cy="8.5" r=".5" fill="currentColor" />
            <circle
                cx="9.5"
                cy="5.5"
                r="1"
                stroke="currentColor"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default FlaskLight;
