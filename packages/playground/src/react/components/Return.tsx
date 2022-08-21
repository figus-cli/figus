import React, { SVGProps } from "react";

export function Return(props: SVGProps<SVGSVGElement>) {
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
                d="m20 10 .7071.7071.7071-.7071-.7071-.7071L20 10ZM3 18c0 .5523.4477 1 1 1s1-.4477 1-1H3Zm12.7071-2.2929 5-5-1.4142-1.4142-5 5 1.4142 1.4142Zm5-6.4142-5-5-1.4142 1.4142 5 5 1.4142-1.4142ZM20 9H10v2h10V9ZM3 16v2h2v-2H3Zm7-7c-3.866 0-7 3.134-7 7h2c0-2.7614 2.2386-5 5-5V9Z"
            />
        </svg>
    );
}
export default Return;
