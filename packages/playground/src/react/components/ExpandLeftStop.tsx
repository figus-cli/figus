import React, { SVGProps } from "react";

export function ExpandLeftStop(props: SVGProps<SVGSVGElement>) {
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
                d="m11 12-.7071-.7071L9.5858 12l.7071.7071L11 12Zm5.2929-6.7071-6 6 1.4142 1.4142 6-6-1.4142-1.4142Zm-6 7.4142 6 6 1.4142-1.4142-6-6-1.4142 1.4142Z"
            />
            <path stroke="currentColor" d="M6 7v10" />
        </svg>
    );
}
export default ExpandLeftStop;
