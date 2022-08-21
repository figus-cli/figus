import React, { SVGProps } from "react";

export function DownloadLight(props: SVGProps<SVGSVGElement>) {
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
                d="m12 16-.3536.3536.3536.3535.3536-.3535L12 16Zm.5-12a.5.5 0 0 0-1 0h1Zm-6.8536 6.3536 6 6 .7072-.7072-6-6-.7072.7072Zm6.7072 6 6-6-.7072-.7072-6 6 .7072.7072ZM12.5 16V4h-1v12h1Z"
            />
            <path stroke="currentColor" d="M5 21h14" />
        </svg>
    );
}
export default DownloadLight;
