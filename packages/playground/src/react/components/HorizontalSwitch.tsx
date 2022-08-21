import React, { SVGProps } from "react";

export function HorizontalSwitch(props: SVGProps<SVGSVGElement>) {
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
                d="m4 8-.7071-.7071L2.5858 8l.707.7071L4 8Zm15 2c0 .5523.4477 1 1 1s1-.4477 1-1h-2ZM7.2929 3.2929l-4 4L4.707 8.707l4-4-1.414-1.414Zm-4 5.4142 4 4 1.4142-1.4142-4-4L3.293 8.707ZM4 9h14V7H4v2Zm14 0c.5523 0 1 .4477 1 1h2c0-1.6569-1.3431-3-3-3v2Zm2 7 .7071-.7071.7071.7071-.7071.7071L20 16ZM5 16v1-1Zm-3-2c0-.5523.4477-1 1-1s1 .4477 1 1H2Zm14.7071-2.7071 4 4-1.4142 1.4142-4-4 1.4142-1.4142Zm4 5.4142-4 4-1.4142-1.4142 4-4 1.4142 1.4142ZM20 17H5v-2h15v2ZM5 17c-1.6568 0-3-1.3431-3-3h2c0 .5523.4477 1 1 1v2Z"
            />
        </svg>
    );
}
export default HorizontalSwitch;
