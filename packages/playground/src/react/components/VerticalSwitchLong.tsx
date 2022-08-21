import React, { SVGProps } from "react";

export function VerticalSwitchLong(props: SVGProps<SVGSVGElement>) {
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
                d="m8 20-.7071.7071.7071.7071.7071-.7071L8 20Zm6-15c.5523 0 1-.4477 1-1s-.4477-1-1-1v2ZM3.2929 16.7071l4 4 1.4142-1.4142-4-4-1.4142 1.4142Zm5.4142 4 4-4-1.4142-1.4142-4 4 1.4142 1.4142ZM9 20V8H7v12h2Zm3-15h2V3h-2v2ZM9 8c0-1.6569 1.3431-3 3-3V3C9.2386 3 7 5.2386 7 8h2Zm7 2-.7071-.7071L16 8.5858l.7071.707L16 10Zm0 8h1-1Zm-2 3c-.5523 0-1-.4477-1-1s.4477-1 1-1v2Zm-2.7071-7.7071 4-4 1.4142 1.4142-4 4-1.4142-1.4142Zm5.4142-4 4 4-1.4142 1.4142-4-4 1.4142-1.4142ZM17 10v8h-2v-8h2Zm0 8c0 1.6569-1.3431 3-3 3v-2c.5523 0 1-.4477 1-1h2Z"
            />
        </svg>
    );
}
export default VerticalSwitchLong;
