import React, { SVGProps } from "react";

export function ExpandRightDouble(props: SVGProps<SVGSVGElement>) {
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
                d="m18 12 .7071.7071.7071-.7071-.7071-.7071L18 12Zm-5.2929 6.7071 6-6-1.4142-1.4142-6 6 1.4142 1.4142Zm6-7.4142-6-6-1.4142 1.4142 6 6 1.4142-1.4142ZM12 12l.7071.7071.7071-.7071-.7071-.7071L12 12Zm-5.2929 6.7071 6-6-1.4142-1.4142-6 6 1.4142 1.4142Zm6-7.4142-6-6L5.293 6.707l6 6 1.4142-1.4142Z"
            />
        </svg>
    );
}
export default ExpandRightDouble;
