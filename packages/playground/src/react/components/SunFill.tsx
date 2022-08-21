import React, { SVGProps } from "react";

export function SunFill(props: SVGProps<SVGSVGElement>) {
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
                d="M17 18a4.9997 4.9997 0 0 0-5-5 5 5 0 0 0-5 5h10Z"
            />
            <path stroke="currentColor" d="m17.5 12.5 2-2" strokeWidth="2" />
            <path stroke="currentColor" d="M5 18h14" strokeWidth="2" />
            <path stroke="currentColor" d="m4.5 10.5 2 2" strokeWidth="2" />
            <path
                fill="currentColor"
                d="m12 2 .7071-.7071L12 .5858l-.7071.707L12 2Zm-1 8.5c0 .5523.4477 1 1 1s1-.4477 1-1h-2Zm4.7071-6.2071-3-3-1.4142 1.4142 3 3 1.4142-1.4142Zm-4.4142-3-3 3L9.707 5.707l3-3-1.4142-1.4142ZM11 2v8.5h2V2h-2Z"
            />
        </svg>
    );
}
export default SunFill;
