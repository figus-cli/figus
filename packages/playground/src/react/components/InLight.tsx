import React, { SVGProps } from "react";

export function InLight(props: SVGProps<SVGSVGElement>) {
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
            />
            <path
                fill="currentColor"
                d="M15 15v.5h.5V15H15ZM7.3536 6.6464a.5.5 0 1 0-.7072.7072l.7072-.7072ZM14.5 8v7h1V8h-1Zm.5 6.5H8v1h7v-1Zm.3536.1464-8-8-.7072.7072 8 8 .7072-.7072Z"
            />
        </svg>
    );
}
export default InLight;
