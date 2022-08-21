import React, { SVGProps } from "react";

export function UploadLight(props: SVGProps<SVGSVGElement>) {
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
                d="m12 5 .3536-.3536L12 4.293l-.3536.3535L12 5Zm-.5 12a.5.5 0 0 0 1 0h-1Zm6.8536-6.3536-6-6-.7072.7072 6 6 .7072-.7072Zm-6.7072-6-6 6 .7072.7072 6-6-.7072-.7072ZM11.5 5v12h1V5h-1Z"
            />
            <path stroke="currentColor" d="M5 21h14" />
        </svg>
    );
}
export default UploadLight;
