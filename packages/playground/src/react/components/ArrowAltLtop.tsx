import React, { SVGProps } from "react";

export function ArrowAltLtop(props: SVGProps<SVGSVGElement>) {
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
                d="m12 6 .7071-.7071L12 4.5858l-.7071.707L12 6Zm-1 12c0 .5523.4477 1 1 1s1-.4477 1-1h-2Zm5.7071-8.7071-4-4-1.4142 1.4142 4 4 1.4142-1.4142Zm-5.4142-4-4 4L8.707 10.707l4-4-1.4142-1.4142ZM11 6v12h2V6h-2Z"
            />
        </svg>
    );
}
export default ArrowAltLtop;
