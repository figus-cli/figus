import React, { SVGProps } from "react";

export function Bag(props: SVGProps<SVGSVGElement>) {
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
                d="M8 8V7c0-2.2091 1.7909-4 4-4 2.2091 0 4 1.7909 4 4v1m-1 6v-2m-6 2v-2"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M4 12c0-1.8856 0-2.8284.5858-3.4142C5.1716 8 6.1144 8 8 8h8c1.8856 0 2.8284 0 3.4142.5858C20 9.1716 20 10.1144 20 12v1c0 3.7712 0 5.6569-1.1716 6.8284C17.6569 21 15.7712 21 12 21c-3.7712 0-5.6569 0-6.8284-1.1716C4 18.6569 4 16.7712 4 13v-1Z"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Bag;
