import React, { SVGProps } from "react";

export function OrderFill(props: SVGProps<SVGSVGElement>) {
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
                d="M5.5858 4.5858C5 5.1716 5 6.1144 5 8v9c0 1.8856 0 2.8284.5858 3.4142C6.1716 21 7.1144 21 9 21h6c1.8856 0 2.8284 0 3.4142-.5858C19 19.8284 19 18.8856 19 17V8c0-1.8856 0-2.8284-.5858-3.4142C17.8284 4 16.8856 4 15 4H9c-1.8856 0-2.8284 0-3.4142.5858ZM9 8c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1H9Zm0 4c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1H9Zm0 4c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1H9Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default OrderFill;
