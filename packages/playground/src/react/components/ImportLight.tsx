import React, { SVGProps } from "react";

export function ImportLight(props: SVGProps<SVGSVGElement>) {
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
                d="m12 14-.3536.3536.3536.3535.3536-.3535L12 14Zm.5-9a.5.5 0 0 0-1 0h1ZM6.6464 9.3536l5 5 .7072-.7072-5-5-.7072.7072Zm5.7072 5 5-5-.7072-.7072-5 5 .7072.7072ZM12.5 14V5h-1v9h1Z"
            />
            <path
                stroke="currentColor"
                d="M5 16v1c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2v-1"
            />
        </svg>
    );
}
export default ImportLight;
