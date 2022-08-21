import React, { SVGProps } from "react";

export function FileDockSearchFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="17.5"
                cy="17.5"
                r="2.5"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path stroke="currentColor" d="m21 21-1.5-1.5" strokeWidth="2" />
            <path
                fill="currentColor"
                d="M4 10c0-3.7712 0-5.6569 1.1716-6.8284C6.343 2 8.2288 2 12 2c3.7712 0 5.6569 0 6.8284 1.1716C20 4.343 20 6.2288 20 10v3.1689c-.7354-.4254-1.5893-.6689-2.5-.6689-2.7614 0-5 2.2386-5 5 0 1.9428 1.1081 3.6269 2.7268 4.4546C14.337 22 13.2765 22 12 22c-3.7712 0-5.6569 0-6.8284-1.1716C4 19.6569 4 17.7712 4 14v-4Zm4-5c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1H8Zm0 4c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1H8Zm0 4c-.5523 0-1 .4477-1 1s.4477 1 1 1h3c.5523 0 1-.4477 1-1s-.4477-1-1-1H8Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default FileDockSearchFill;
