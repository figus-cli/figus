import React, { SVGProps } from "react";

export function VerticalSwitch(props: SVGProps<SVGSVGElement>) {
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
                d="m8 20-.7071.7071.7071.7071.7071-.7071L8 20Zm2-15c.5523 0 1-.4477 1-1s-.4477-1-1-1v2ZM3.2929 16.7071l4 4 1.4142-1.4142-4-4-1.4142 1.4142Zm5.4142 4 4-4-1.4142-1.4142-4 4 1.4142 1.4142ZM9 20V6H7v14h2ZM9 6c0-.5523.4477-1 1-1V3C8.3431 3 7 4.3431 7 6h2Zm7-2-.7071-.7071L16 2.5858l.7071.707L16 4Zm0 15h1-1Zm-2 3c-.5523 0-1-.4477-1-1s.4477-1 1-1v2ZM11.2929 7.2929l4-4 1.4142 1.4142-4 4-1.4142-1.4142Zm5.4142-4 4 4-1.4142 1.4142-4-4 1.4142-1.4142ZM17 4v15h-2V4h2Zm0 15c0 1.6569-1.3431 3-3 3v-2c.5523 0 1-.4477 1-1h2Z"
            />
        </svg>
    );
}
export default VerticalSwitch;
