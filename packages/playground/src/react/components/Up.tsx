import React, { SVGProps } from "react";

export function Up(props: SVGProps<SVGSVGElement>) {
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
                d="m10 4 .7071-.7071L10 2.5858l-.7071.707L10 4Zm8 17c.5523 0 1-.4477 1-1s-.4477-1-1-1v2ZM15.7071 8.2929l-5-5L9.2929 4.707l5 5 1.4142-1.4142Zm-6.4142-5-5 5L5.707 9.707l5-5-1.4141-1.414ZM9 4v10h2V4H9Zm7 17h2v-2h-2v2Zm-7-7c0 3.866 3.134 7 7 7v-2c-2.7614 0-5-2.2386-5-5H9Z"
            />
        </svg>
    );
}
export default Up;
