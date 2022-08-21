import React, { SVGProps } from "react";

export function In(props: SVGProps<SVGSVGElement>) {
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
                d="M3 9v6c0 2.8284 0 4.2426.8787 5.1213C4.7574 21 6.1716 21 9 21h6c2.8284 0 4.2426 0 5.1213-.8787C21 19.2426 21 17.8284 21 15V9c0-2.8284 0-4.2426-.8787-5.1213C19.2426 3 17.8284 3 15 3H9"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M15 15v1h1v-1h-1ZM7.7071 6.2929c-.3905-.3905-1.0237-.3905-1.4142 0-.3905.3905-.3905 1.0237 0 1.4142L7.707 6.293ZM14 8v7h2V8h-2Zm1 6H8v2h7v-2Zm.7071.2929-8-8L6.293 7.707l8 8 1.4142-1.4142Z"
            />
        </svg>
    );
}
export default In;
