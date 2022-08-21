import React, { SVGProps } from "react";

export function InstaFill(props: SVGProps<SVGSVGElement>) {
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
                d="M3 11c0-3.7712 0-5.6569 1.1716-6.8284C5.343 3 7.2288 3 11 3h2c3.7712 0 5.6569 0 6.8284 1.1716C21 5.343 21 7.2288 21 11v2c0 3.7712 0 5.6569-1.1716 6.8284C18.6569 21 16.7712 21 13 21h-2c-3.7712 0-5.6569 0-6.8284-1.1716C3 18.6569 3 16.7712 3 13v-2Zm15-3.5c0 .8284-.6716 1.5-1.5 1.5S15 8.3284 15 7.5 15.6716 6 16.5 6s1.5.6716 1.5 1.5ZM14 13c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2Zm2 0c0 2.2091-1.7909 4-4 4-2.2091 0-4-1.7909-4-4 0-2.2091 1.7909-4 4-4 2.2091 0 4 1.7909 4 4Z"
            />
        </svg>
    );
}
export default InstaFill;
