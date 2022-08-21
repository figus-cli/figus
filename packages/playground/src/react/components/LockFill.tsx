import React, { SVGProps } from "react";

export function LockFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M16 8V7c0-2.2091-1.7909-4-4-4-2.2091 0-4 1.7909-4 4v1"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M3.8787 7.8787C3 8.7574 3 10.1716 3 13v1c0 3.7712 0 5.6569 1.1716 6.8284C5.343 22 7.2288 22 11 22h2c3.7712 0 5.6569 0 6.8284-1.1716C21 19.6569 21 17.7712 21 14v-1c0-2.8284 0-4.2426-.8787-5.1213C19.2426 7 17.8284 7 15 7H9c-2.8284 0-4.2426 0-5.1213.8787ZM12 15c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Zm3-1c0 1.3062-.8348 2.4175-2 2.8293V19h-2v-2.1707C9.8348 16.4175 9 15.3062 9 14c0-1.6569 1.3431-3 3-3s3 1.3431 3 3Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default LockFill;
