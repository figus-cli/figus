import React, { SVGProps } from "react";

export function MoneyFill(props: SVGProps<SVGSVGElement>) {
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
                d="M2.5858 5.5858C2 6.1716 2 7.1144 2 9v6c0 1.8856 0 2.8284.5858 3.4142C3.1716 19 4.1144 19 6 19h12c1.8856 0 2.8284 0 3.4142-.5858C22 17.8284 22 16.8856 22 15V9c0-1.8856 0-2.8284-.5858-3.4142C20.8284 5 19.8856 5 18 5H6c-1.8856 0-2.8284 0-3.4142.5858ZM5 7c-.5523 0-1 .4477-1 1s.4477 1 1 1h2c.5523 0 1-.4477 1-1s-.4477-1-1-1H5Zm11 9c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1Zm-3-4c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1Zm2 0c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Z"
            />
        </svg>
    );
}
export default MoneyFill;
