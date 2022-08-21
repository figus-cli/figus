import React, { SVGProps } from "react";

export function ExpandUpDouble(props: SVGProps<SVGSVGElement>) {
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
                d="m12 12 .7071-.7071L12 10.5858l-.7071.7071L12 12Zm6.7071 5.2929-6-6-1.4142 1.4142 6 6 1.4142-1.4142Zm-7.4142-6-6 6 1.4142 1.4142 6-6-1.4142-1.4142ZM12 6l.7071-.7071L12 4.5858l-.7071.707L12 6Zm6.7071 5.2929-6-6-1.4142 1.4142 6 6 1.4142-1.4142Zm-7.4142-6-6 6 1.4142 1.4142 6-6-1.4142-1.4142Z"
            />
        </svg>
    );
}
export default ExpandUpDouble;
