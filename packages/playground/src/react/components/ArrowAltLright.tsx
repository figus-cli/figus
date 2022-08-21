import React, { SVGProps } from "react";

export function ArrowAltLright(props: SVGProps<SVGSVGElement>) {
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
                d="m18 12 .7071-.7071.7071.7071-.7071.7071L18 12ZM6 13c-.5523 0-1-.4477-1-1s.4477-1 1-1v2Zm8.7071-5.7071 4 4-1.4142 1.4142-4-4 1.4142-1.4142Zm4 5.4142-4 4-1.4142-1.4142 4-4 1.4142 1.4142ZM18 13H6v-2h12v2Z"
            />
        </svg>
    );
}
export default ArrowAltLright;
