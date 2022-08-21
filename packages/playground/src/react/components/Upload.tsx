import React, { SVGProps } from "react";

export function Upload(props: SVGProps<SVGSVGElement>) {
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
                d="m12 5 .7071-.7071L12 3.5858l-.7071.707L12 5Zm-1 12c0 .5523.4477 1 1 1s1-.4477 1-1h-2Zm7.7071-6.7071-6-6-1.4142 1.4142 6 6 1.4142-1.4142Zm-7.4142-6-6 6 1.4142 1.4142 6-6-1.4142-1.4142ZM11 5v12h2V5h-2Z"
            />
            <path stroke="currentColor" d="M5 21h14" strokeWidth="2" />
        </svg>
    );
}
export default Upload;
