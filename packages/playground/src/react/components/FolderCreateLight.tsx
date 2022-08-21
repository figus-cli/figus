import React, { SVGProps } from "react";

export function FolderCreateLight(props: SVGProps<SVGSVGElement>) {
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
                d="M9 13.5h2.5m0 0H14m-2.5 0V16m0-2.5V11"
            />
            <path
                stroke="currentColor"
                d="M7 5.5H6c-.8284 0-1.5.6716-1.5 1.5v1M7 19.5H6c-.8284 0-1.5-.6716-1.5-1.5v-1M17 19.5h1c.8284 0 1.5-.6716 1.5-1.5v-1m0-6v-1c0-.8284-.6716-1.5-1.5-1.5h-1m-2 0h-.8787a1.5 1.5 0 0 1-1.0606-.4393L12.5 7.5m-1-1-.5607-.5607A1.5 1.5 0 0 0 9.8787 5.5H9"
            />
            <path fill="currentColor" d="M19 13h1v2h-1z" />
            <path fill="currentColor" d="M4 13h1v2H4z" />
            <path fill="currentColor" d="M4 9h1v2H4z" />
            <path fill="currentColor" d="M13 19h2v1h-2z" />
            <path fill="currentColor" d="M9 19h2v1H9z" />
        </svg>
    );
}
export default FolderCreateLight;
