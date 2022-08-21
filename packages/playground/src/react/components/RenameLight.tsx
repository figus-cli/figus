import React, { SVGProps } from "react";

export function RenameLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path stroke="currentColor" d="M9 5h5m0 0h5m-5 0v14m-5 0h5m0 0h5" />
            <path
                fill="currentColor"
                d="M2 15h-.5v.5H2V15Zm0 .5h9v-1H2v1Zm9-7H4v1h7v-1ZM1.5 11v4h1v-4h-1ZM4 8.5c-1.3807 0-2.5 1.1193-2.5 2.5h1c0-.8284.6716-1.5 1.5-1.5v-1ZM22 9h.5v-.5H22V9Zm0-.5h-5v1h5v-1Zm-5 7h3v-1h-3v1Zm5.5-2.5V9h-1v4h1ZM20 15.5c1.3807 0 2.5-1.1193 2.5-2.5h-1c0 .8284-.6716 1.5-1.5 1.5v1Z"
            />
        </svg>
    );
}
export default RenameLight;
