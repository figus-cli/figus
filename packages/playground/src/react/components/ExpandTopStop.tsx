import React, { SVGProps } from "react";

export function ExpandTopStop(props: SVGProps<SVGSVGElement>) {
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
                d="m12 11 .7071-.7071L12 9.5858l-.7071.7071L12 11Zm6.7071 5.2929-6-6-1.4142 1.4142 6 6 1.4142-1.4142Zm-7.4142-6-6 6 1.4142 1.4142 6-6-1.4142-1.4142Z"
            />
            <path stroke="currentColor" d="M7 6h10" strokeWidth="2" />
        </svg>
    );
}
export default ExpandTopStop;
