import React, { SVGProps } from "react";

export function ExpandLeftDouble(props: SVGProps<SVGSVGElement>) {
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
                d="m6 12-.7071.7071L4.5858 12l.707-.7071L6 12Zm5.2929 6.7071-6-6 1.4142-1.4142 6 6-1.4142 1.4142Zm-6-7.4142 6-6 1.4142 1.4142-6 6-1.4142-1.4142ZM12 12l-.7071.7071L10.5858 12l.7071-.7071L12 12Zm5.2929 6.7071-6-6 1.4142-1.4142 6 6-1.4142 1.4142Zm-6-7.4142 6-6 1.4142 1.4142-6 6-1.4142-1.4142Z"
            />
        </svg>
    );
}
export default ExpandLeftDouble;
