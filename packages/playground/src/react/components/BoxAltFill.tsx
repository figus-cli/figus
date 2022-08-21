import React, { SVGProps } from "react";

export function BoxAltFill(props: SVGProps<SVGSVGElement>) {
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
                d="M4 7.4142c0-.2044 0-.3066.038-.3984.0381-.092.1104-.1642.2549-.3087l1.5355-1.5355c.578-.578.8671-.8671 1.2347-1.0194C7.4306 4 7.8393 4 8.6569 4h6.6862c.8175 0 1.2263 0 1.5938.1522.3676.1523.6566.4413 1.2347 1.0194l1.5355 1.5355c.1445.1445.2168.2168.2548.3087.0381.0918.0381.194.0381.3984V8H4v-.5858Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M21 8H3v9c0 1.8856 0 2.8284.5858 3.4142C4.1716 21 5.1144 21 7 21h10c1.8856 0 2.8284 0 3.4142-.5858C21 19.8284 21 18.8856 21 17V8Zm-11 3c0-.5523-.4477-1-1-1s-1 .4477-1 1a3.9998 3.9998 0 0 0 4 4 3.9996 3.9996 0 0 0 2.8284-1.1716A3.9996 3.9996 0 0 0 16 11c0-.5523-.4477-1-1-1s-1 .4477-1 1a2 2 0 0 1-4 0Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default BoxAltFill;
