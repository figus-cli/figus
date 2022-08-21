import React, { SVGProps } from "react";

export function Regroup(props: SVGProps<SVGSVGElement>) {
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
                d="m18 20-.7071.7071.7071.7071.7071-.7071L18 20ZM13 4c-.5523 0-1 .4477-1 1s.4477 1 1 1V4Zm.2929 12.7071 4 4 1.4142-1.4142-4-4-1.4142 1.4142Zm5.4142 4 4-4-1.4142-1.4142-4 4 1.4142 1.4142ZM19 20V9h-2v11h2ZM14 4h-1v2h1V4Zm5 5c0-2.7614-2.2386-5-5-5v2c1.6569 0 3 1.3431 3 3h2ZM6 4l.7071-.7071L6 2.5858l-.7071.707L6 4Zm5 16c.5523 0 1-.4477 1-1s-.4477-1-1-1v2Zm-.2929-12.7071-4-4L5.293 4.707l4 4 1.414-1.414Zm-5.4142-4-4 4L2.707 8.707l4-4-1.414-1.414ZM5 4v11h2V4H5Zm5 16h1v-2h-1v2Zm-5-5c0 2.7614 2.2386 5 5 5v-2c-1.6569 0-3-1.3431-3-3H5Z"
            />
        </svg>
    );
}
export default Regroup;
