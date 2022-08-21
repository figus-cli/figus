import React, { SVGProps } from "react";

export function Download(props: SVGProps<SVGSVGElement>) {
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
                d="m12 16-.7071.7071.7071.7071.7071-.7071L12 16Zm1-12c0-.5523-.4477-1-1-1s-1 .4477-1 1h2Zm-7.7071 6.7071 6 6 1.4142-1.4142-6-6L5.293 10.707Zm7.4142 6 6-6-1.4142-1.4142-6 6 1.4142 1.4142ZM13 16V4h-2v12h2Z"
            />
            <path stroke="currentColor" d="M5 21h14" strokeWidth="2" />
        </svg>
    );
}
export default Download;
