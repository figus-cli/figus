import React, { SVGProps } from "react";

export function ArrowAltLeft(props: SVGProps<SVGSVGElement>) {
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
                d="m5 12-.7071-.7071L3.5858 12l.707.7071L5 12Zm12 1c.5523 0 1-.4477 1-1s-.4477-1-1-1v2ZM8.2929 7.2929l-4 4 1.4142 1.4142 4-4L8.293 7.293Zm-4 5.4142 4 4 1.4142-1.4142-4-4-1.4142 1.4142ZM5 13h12v-2H5v2Z"
            />
        </svg>
    );
}
export default ArrowAltLeft;
