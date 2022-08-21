import React, { SVGProps } from "react";

export function ExpandDownStop(props: SVGProps<SVGSVGElement>) {
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
                d="m12 13-.7071.7071.7071.7071.7071-.7071L12 13ZM5.2929 7.7071l6 6 1.4142-1.4142-6-6L5.293 7.707Zm7.4142 6 6-6-1.4142-1.4142-6 6 1.4142 1.4142Z"
            />
            <path stroke="currentColor" d="M17 18H7" strokeWidth="2" />
        </svg>
    );
}
export default ExpandDownStop;
