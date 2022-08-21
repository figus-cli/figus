import React, { SVGProps } from "react";

export function ChartFill(props: SVGProps<SVGSVGElement>) {
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
                d="M2.8787 3.8787C2 4.7574 2 6.1716 2 9v6c0 2.8284 0 4.2426.8787 5.1213C3.7574 21 5.1716 21 8 21h8c2.8284 0 4.2426 0 5.1213-.8787C22 19.2426 22 17.8284 22 15V9c0-2.8284 0-4.2426-.8787-5.1213C20.2426 3 18.8284 3 16 3H8c-2.8284 0-4.2426 0-5.1213.8787ZM16 8c.5523 0 1 .4477 1 1v8c0 .5523-.4477 1-1 1s-1-.4477-1-1V9c0-.5523.4477-1 1-1Zm-7 3c0-.5523-.4477-1-1-1s-1 .4477-1 1v6c0 .5523.4477 1 1 1s1-.4477 1-1v-6Zm4 2c0-.5523-.4477-1-1-1s-1 .4477-1 1v4c0 .5523.4477 1 1 1s1-.4477 1-1v-4Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default ChartFill;
