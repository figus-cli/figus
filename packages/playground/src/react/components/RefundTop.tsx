import React, { SVGProps } from "react";

export function RefundTop(props: SVGProps<SVGSVGElement>) {
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
                d="m8 4 .7071-.7071L8 2.5858l-.7071.707L8 4Zm12 5c0-.5523-.4477-1-1-1s-1 .4477-1 1h2Zm-6.2929-.7071-5-5L7.293 4.707l5 5 1.4142-1.4142Zm-6.4142-5-5 5L3.707 9.707l5-5-1.414-1.414ZM7 4v10.5h2V4H7Zm13 10.5V9h-2v5.5h2ZM13.5 21c3.5899 0 6.5-2.9102 6.5-6.5h-2c0 2.4853-2.0147 4.5-4.5 4.5v2ZM7 14.5c0 3.5899 2.9101 6.5 6.5 6.5v-2C11.0147 19 9 16.9853 9 14.5H7Z"
            />
        </svg>
    );
}
export default RefundTop;
