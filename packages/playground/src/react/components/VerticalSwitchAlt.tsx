import React, { SVGProps } from "react";

export function VerticalSwitchAlt(props: SVGProps<SVGSVGElement>) {
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
                d="m8 20-.7071.7071.7071.7071.7071-.7071L8 20Zm0-8H7h1Zm2-1c.5523 0 1-.4477 1-1s-.4477-1-1-1v2Zm-6.7071 5.7071 4 4 1.4142-1.4142-4-4-1.4142 1.4142Zm5.4142 4 4-4-1.4142-1.4142-4 4 1.4142 1.4142ZM9 20v-8H7v8h2Zm0-8c0-.5523.4477-1 1-1V9c-1.6569 0-3 1.3431-3 3h2Zm7-8-.7071-.7071L16 2.5858l.7071.707L16 4Zm0 8h1-1Zm-2 3c-.5523 0-1-.4477-1-1s.4477-1 1-1v2Zm-2.7071-7.7071 4-4 1.4142 1.4142-4 4-1.4142-1.4142Zm5.4142-4 4 4-1.4142 1.4142-4-4 1.4142-1.4142ZM17 4v8h-2V4h2Zm0 8c0 1.6569-1.3431 3-3 3v-2c.5523 0 1-.4477 1-1h2Z"
            />
        </svg>
    );
}
export default VerticalSwitchAlt;
