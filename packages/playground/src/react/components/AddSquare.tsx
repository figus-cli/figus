import React, { SVGProps } from "react";

export function AddSquare(props: SVGProps<SVGSVGElement>) {
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
                d="M3 11c0-3.7712 0-5.6569 1.1716-6.8284C5.343 3 7.2288 3 11 3h2c3.7712 0 5.6569 0 6.8284 1.1716C21 5.343 21 7.2288 21 11v2c0 3.7712 0 5.6569-1.1716 6.8284C18.6569 21 16.7712 21 13 21h-2c-3.7712 0-5.6569 0-6.8284-1.1716C3 18.6569 3 16.7712 3 13v-2Z"
            />
            <path fill="currentColor" stroke="currentColor" d="M12 8v8m4-4H8" />
        </svg>
    );
}
export default AddSquare;
