import React, { SVGProps } from "react";

export function HorizontalTopRightMain(props: SVGProps<SVGSVGElement>) {
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
                d="m22 8 .7071-.7071.7071.7071-.7071.7071L22 8ZM3 9c-.5523 0-1-.4477-1-1s.4477-1 1-1v2Zm15.7071-5.7071 4 4-1.4142 1.4142-4-4 1.4142-1.4142Zm4 5.4142-4 4-1.4142-1.4142 4-4 1.4142 1.4142ZM22 9H3V7h19v2ZM2 16l-.7071-.7071L.5858 16l.707.7071L2 16Zm9 1c.5523 0 1-.4477 1-1s-.4477-1-1-1v2Zm-5.7071-5.7071-4 4 1.4142 1.4142 4-4-1.4142-1.4142Zm-4 5.4142 4 4 1.4142-1.4142-4-4-1.4142 1.4142ZM2 17h9v-2H2v2Z"
            />
        </svg>
    );
}
export default HorizontalTopRightMain;
