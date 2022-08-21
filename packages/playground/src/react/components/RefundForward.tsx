import React, { SVGProps } from "react";

export function RefundForward(props: SVGProps<SVGSVGElement>) {
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
                d="m20 8 .7071.7071L21.4142 8l-.7071-.7071L20 8Zm-5 12c.5523 0 1-.4477 1-1s-.4477-1-1-1v2Zm.7071-6.2929 5-5-1.4142-1.4142-5 5 1.4142 1.4142Zm5-6.4142-5-5-1.4142 1.4142 5 5 1.4142-1.4142ZM20 7H9.5v2H20V7ZM9.5 20H15v-2H9.5v2ZM3 13.5C3 17.0898 5.9101 20 9.5 20v-2C7.0147 18 5 15.9853 5 13.5H3ZM9.5 7C5.9101 7 3 9.9101 3 13.5h2C5 11.0147 7.0147 9 9.5 9V7Z"
            />
        </svg>
    );
}
export default RefundForward;
