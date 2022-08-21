import React, { SVGProps } from "react";

export function ExpandDownDouble(props: SVGProps<SVGSVGElement>) {
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
                d="m12 18 .7071.7071-.7071.7071-.7071-.7071L12 18Zm6.7071-5.2929-6 6-1.4142-1.4142 6-6 1.4142 1.4142Zm-7.4142 6-6-6 1.4142-1.4142 6 6-1.4142 1.4142ZM12 12l.7071.7071-.7071.7071-.7071-.7071L12 12Zm6.7071-5.2929-6 6-1.4142-1.4142 6-6 1.4142 1.4142Zm-7.4142 6-6-6L6.707 5.293l6 6-1.4142 1.4142Z"
            />
        </svg>
    );
}
export default ExpandDownDouble;
