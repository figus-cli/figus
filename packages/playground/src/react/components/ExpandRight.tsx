import React, { SVGProps } from "react";

export function ExpandRight(props: SVGProps<SVGSVGElement>) {
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
                d="m15 12 .7071-.7071.7071.7071-.7071.7071L15 12ZM9.7071 5.2929l6 6-1.4142 1.4142-6-6L9.707 5.293Zm6 7.4142-6 6-1.4142-1.4142 6-6 1.4142 1.4142Z"
            />
        </svg>
    );
}
export default ExpandRight;
