import React, { SVGProps } from "react";

export function Fluid(props: SVGProps<SVGSVGElement>) {
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
                d="m12 3-.7071-.7071L12 1.5858l.7071.707L12 3Zm1 11c0 .5523-.4477 1-1 1s-1-.4477-1-1h2ZM6.2929 7.2929l5-5 1.4142 1.4142-5 5L6.293 7.293Zm6.4142-5 5 5-1.4142 1.4142-5-5 1.4142-1.4142ZM13 3v11h-2V3h2Z"
            />
            <path
                fill="currentColor"
                d="m12 21-.7071.7071.7071.7071.7071-.7071L12 21Zm1-7c0-.5523-.4477-1-1-1s-1 .4477-1 1h2Zm-6.7071 2.7071 5 5 1.4142-1.4142-5-5-1.4142 1.4142Zm6.4142 5 5-5-1.4142-1.4142-5 5 1.4142 1.4142ZM13 21v-7h-2v7h2Z"
            />
        </svg>
    );
}
export default Fluid;
