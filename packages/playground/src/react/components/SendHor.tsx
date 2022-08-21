import React, { SVGProps } from "react";

export function SendHor(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                d="m6.9981 10.2467.4349.761c.2768.4845.4153.7267.4153.9923 0 .2656-.1385.5078-.4153.9923l-.4349.761c-1.2383 2.167-1.8574 3.2506-1.3746 3.7879.4828.5373 1.6261.0371 3.9127-.9633l6.2757-2.7456c1.7955-.7855 2.6932-1.1783 2.6932-1.8323 0-.654-.8977-1.0468-2.6932-1.8323L9.5362 7.4221c-2.2866-1.0004-3.4299-1.5006-3.9127-.9633-.4828.5373.1363 1.6209 1.3746 3.7879Z"
                strokeWidth="2"
            />
        </svg>
    );
}
export default SendHor;
