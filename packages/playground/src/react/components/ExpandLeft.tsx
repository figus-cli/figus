import React, { SVGProps } from "react";

export function ExpandLeft(props: SVGProps<SVGSVGElement>) {
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
                d="m9 12-.7071-.7071L7.5858 12l.707.7071L9 12Zm5.2929-6.7071-6 6 1.4142 1.4142 6-6-1.4142-1.4142Zm-6 7.4142 6 6 1.4142-1.4142-6-6-1.4142 1.4142Z"
            />
        </svg>
    );
}
export default ExpandLeft;
