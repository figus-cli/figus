import React, { SVGProps } from "react";

export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
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
                d="m4 12-.7071-.7071L2.5858 12l.707.7071L4 12Zm15 1c.5523 0 1-.4477 1-1s-.4477-1-1-1v2ZM9.2929 5.2929l-6 6 1.4142 1.4142 6-6L9.2929 5.293Zm-6 7.4142 6 6 1.4142-1.4142-6-6-1.4142 1.4142ZM4 13h15v-2H4v2Z"
            />
        </svg>
    );
}
export default ArrowLeft;
