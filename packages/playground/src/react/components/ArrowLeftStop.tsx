import React, { SVGProps } from "react";

export function ArrowLeftStop(props: SVGProps<SVGSVGElement>) {
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
                d="m10 12-.7071-.7071L8.5858 12l.707.7071L10 12Zm10 1c.5523 0 1-.4477 1-1s-.4477-1-1-1v2Zm-4.7071-7.7071-6 6 1.4142 1.4142 6-6-1.4142-1.4142Zm-6 7.4142 6 6 1.4142-1.4142-6-6-1.4142 1.4142ZM10 13h10v-2H10v2Z"
            />
            <path stroke="currentColor" d="M4 5v14" strokeWidth="2" />
        </svg>
    );
}
export default ArrowLeftStop;
