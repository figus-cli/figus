import React, { SVGProps } from "react";

export function AddSquareFill(props: SVGProps<SVGSVGElement>) {
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
                d="M4.1716 4.1716C3 5.343 3 7.2288 3 11v2c0 3.7712 0 5.6569 1.1716 6.8284C5.343 21 7.2288 21 11 21h2c3.7712 0 5.6569 0 6.8284-1.1716C21 18.6569 21 16.7712 21 13v-2c0-3.7712 0-5.6569-1.1716-6.8284C18.6569 3 16.7712 3 13 3h-2C7.2288 3 5.3431 3 4.1716 4.1716ZM11 7v4H7v2h4v4h2v-4h4v-2h-4V7h-2Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default AddSquareFill;
