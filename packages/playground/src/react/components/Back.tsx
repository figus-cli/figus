import React, { SVGProps } from "react";

export function Back(props: SVGProps<SVGSVGElement>) {
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
                d="m4 10-.7071.7071L2.5858 10l.707-.7071L4 10Zm17 8c0 .5523-.4477 1-1 1s-1-.4477-1-1h2ZM8.2929 15.7071l-5-5L4.707 9.2929l5 5-1.4142 1.4142Zm-5-6.4142 5-5L9.707 5.707l-5 5-1.414-1.4141ZM4 9h10v2H4V9Zm17 7v2h-2v-2h2Zm-7-7c3.866 0 7 3.134 7 7h-2c0-2.7614-2.2386-5-5-5V9Z"
            />
        </svg>
    );
}
export default Back;
