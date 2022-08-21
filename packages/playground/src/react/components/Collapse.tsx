import React, { SVGProps } from "react";

export function Collapse(props: SVGProps<SVGSVGElement>) {
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
                d="m9 13-.7071-.7071L9 11.5858l.7071.7071L9 13Zm1 9c0 .5523-.4477 1-1 1s-1-.4477-1-1h2Zm-6.7071-4.7071 5-5 1.4142 1.4142-5 5-1.4142-1.4142Zm6.4142-5 5 5-1.4142 1.4142-5-5 1.4142-1.4142ZM10 13v9H8v-9h2Zm5-2-.7071.7071.7071.7071.7071-.7071L15 11Zm1-9c0-.5523-.4477-1-1-1s-1 .4477-1 1h2ZM9.2929 6.7071l5 5 1.4142-1.4142-5-5L9.2929 6.707Zm6.4142 5 5-5-1.4142-1.4142-5 5 1.4142 1.4142ZM16 11V2h-2v9h2Z"
            />
        </svg>
    );
}
export default Collapse;
