import React, { SVGProps } from "react";

export function NotebookLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="13"
                height="17"
                x="6"
                y="4"
                stroke="currentColor"
                rx="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M15 10V8M4 9h4m-4 4h4m-4 4h4"
            />
        </svg>
    );
}
export default NotebookLight;
