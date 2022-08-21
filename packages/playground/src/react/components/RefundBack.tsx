import React, { SVGProps } from "react";

export function RefundBack(props: SVGProps<SVGSVGElement>) {
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
                d="m4 8-.7071.7071L2.5858 8l.707-.7071L4 8Zm5 12c-.5523 0-1-.4477-1-1s.4477-1 1-1v2Zm-.7071-6.2929-5-5L4.707 7.293l5 5-1.4142 1.4142Zm-5-6.4142 5-5L9.707 3.707l-5 5-1.414-1.414ZM4 7h10.5v2H4V7Zm10.5 13H9v-2h5.5v2Zm6.5-6.5c0 3.5898-2.9102 6.5-6.5 6.5v-2c2.4853 0 4.5-2.0147 4.5-4.5h2ZM14.5 7c3.5899 0 6.5 2.9101 6.5 6.5h-2c0-2.4853-2.0147-4.5-4.5-4.5V7Z"
            />
        </svg>
    );
}
export default RefundBack;
