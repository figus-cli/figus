import React, { SVGProps } from "react";

export function ExpandRightStop(props: SVGProps<SVGSVGElement>) {
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
                d="m13 12 .7071-.7071.7071.7071-.7071.7071L13 12ZM7.7071 5.2929l6 6-1.4142 1.4142-6-6L7.707 5.293Zm6 7.4142-6 6-1.4142-1.4142 6-6 1.4142 1.4142Z"
            />
            <path stroke="currentColor" d="M18 7v10" />
        </svg>
    );
}
export default ExpandRightStop;
