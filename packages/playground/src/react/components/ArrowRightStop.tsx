import React, { SVGProps } from "react";

export function ArrowRightStop(props: SVGProps<SVGSVGElement>) {
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
                d="m14 12 .7071-.7071.7071.7071-.7071.7071L14 12ZM4 13c-.5523 0-1-.4477-1-1s.4477-1 1-1v2Zm4.7071-7.7071 6 6-1.4142 1.4142-6-6L8.707 5.293Zm6 7.4142-6 6-1.4142-1.4142 6-6 1.4142 1.4142ZM14 13H4v-2h10v2Z"
            />
            <path stroke="currentColor" d="M20 5v14" strokeWidth="2" />
        </svg>
    );
}
export default ArrowRightStop;
