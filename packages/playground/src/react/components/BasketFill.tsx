import React, { SVGProps } from "react";

export function BasketFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path stroke="currentColor" d="M8 5 6 9m10-4 2 4" strokeWidth="2" />
            <path
                fill="currentColor"
                d="M21 10h-1.1978a1 1 0 0 0-.9762.7831l-1.478 6.6508A2 2 0 0 1 15.3957 19H8.6043a2 2 0 0 1-1.9523-1.5661l-1.478-6.6508A1 1 0 0 0 4.1978 10H3c-.5523 0-1-.4477-1-1s.4477-1 1-1h18c.5523 0 1 .4477 1 1s-.4477 1-1 1Zm-10 2c0-.5523-.4477-1-1-1s-1 .4477-1 1v3c0 .5523.4477 1 1 1s1-.4477 1-1v-3Zm4 0c0-.5523-.4477-1-1-1s-1 .4477-1 1v3c0 .5523.4477 1 1 1s1-.4477 1-1v-3Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default BasketFill;
