import React, { SVGProps } from "react";

export function HorizontalDownLeftMain(props: SVGProps<SVGSVGElement>) {
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
                d="m22 8 .7071-.7071.7071.7071-.7071.7071L22 8ZM12 9c-.5523 0-1-.4477-1-1s.4477-1 1-1v2Zm6.7071-5.7071 4 4-1.4142 1.4142-4-4 1.4142-1.4142Zm4 5.4142-4 4-1.4142-1.4142 4-4 1.4142 1.4142ZM22 9H12V7h10v2ZM2 16l-.7071-.7071L.5858 16l.707.7071L2 16Zm19 1c.5523 0 1-.4477 1-1s-.4477-1-1-1v2ZM5.2929 11.2929l-4 4 1.4142 1.4142 4-4-1.4142-1.4142Zm-4 5.4142 4 4 1.4142-1.4142-4-4-1.4142 1.4142ZM2 17h19v-2H2v2Z"
            />
        </svg>
    );
}
export default HorizontalDownLeftMain;
