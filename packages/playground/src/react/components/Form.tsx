import React, { SVGProps } from "react";

export function Form(props: SVGProps<SVGSVGElement>) {
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
                d="M4 7c0-1.8856 0-2.8284.5858-3.4142C5.1716 3 6.1144 3 8 3h8c1.8856 0 2.8284 0 3.4142.5858C20 4.1716 20 5.1144 20 7v8c0 2.8284 0 4.2426-.8787 5.1213C18.2426 21 16.8284 21 14 21h-4c-2.8284 0-4.2426 0-5.1213-.8787C4 19.2426 4 17.8284 4 15V7Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M15 18v3m-6-3v3M9 8h6m-6 4h6"
            />
        </svg>
    );
}
export default Form;
