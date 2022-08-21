import React, { SVGProps } from "react";

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
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
                d="m20 12 .7071-.7071.7071.7071-.7071.7071L20 12ZM5 13c-.5523 0-1-.4477-1-1s.4477-1 1-1v2Zm9.7071-7.7071 6 6-1.4142 1.4142-6-6 1.4142-1.4142Zm6 7.4142-6 6-1.4142-1.4142 6-6 1.4142 1.4142ZM20 13H5v-2h15v2Z"
            />
        </svg>
    );
}
export default ArrowRight;
