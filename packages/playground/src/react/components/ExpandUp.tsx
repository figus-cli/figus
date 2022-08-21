import React, { SVGProps } from "react";

export function ExpandUp(props: SVGProps<SVGSVGElement>) {
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
                d="m12 9 .7071-.7071L12 7.5858l-.7071.707L12 9Zm6.7071 5.2929-6-6-1.4142 1.4142 6 6 1.4142-1.4142Zm-7.4142-6-6 6 1.4142 1.4142 6-6-1.4142-1.4142Z"
            />
        </svg>
    );
}
export default ExpandUp;
