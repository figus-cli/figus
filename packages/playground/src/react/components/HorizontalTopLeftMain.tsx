import React, { SVGProps } from "react";

export function HorizontalTopLeftMain(props: SVGProps<SVGSVGElement>) {
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
                d="m2 8-.7071-.7071L.5858 8l.707.7071L2 8Zm19 1c.5523 0 1-.4477 1-1s-.4477-1-1-1v2ZM5.2929 3.2929l-4 4L2.707 8.707l4-4-1.414-1.414Zm-4 5.4142 4 4 1.4142-1.4142-4-4L1.293 8.707ZM2 9h19V7H2v2Zm20 7 .7071-.7071.7071.7071-.7071.7071L22 16Zm-9 1c-.5523 0-1-.4477-1-1s.4477-1 1-1v2Zm5.7071-5.7071 4 4-1.4142 1.4142-4-4 1.4142-1.4142Zm4 5.4142-4 4-1.4142-1.4142 4-4 1.4142 1.4142ZM22 17h-9v-2h9v2Z"
            />
        </svg>
    );
}
export default HorizontalTopLeftMain;
