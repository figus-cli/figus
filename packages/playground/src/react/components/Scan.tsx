import React, { SVGProps } from "react";

export function Scan(props: SVGProps<SVGSVGElement>) {
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
                d="M9 3H8c-.93 0-1.395 0-1.7765.1022a3 3 0 0 0-2.1213 2.1213C4 5.605 4 6.07 4 7m11-4h1c.93 0 1.395 0 1.7765.1022a3.0001 3.0001 0 0 1 2.1213 2.1213C20 5.605 20 6.07 20 7m0 8v1c0 1.8692 0 2.8038-.4019 3.5A2.9994 2.9994 0 0 1 18.5 20.5981C17.8038 21 16.8692 21 15 21M4 15v1c0 1.8692 0 2.8038.402 3.5.2632.4561.642.8348 1.098 1.0981C6.1962 21 7.1308 21 9 21"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M3 15h18M7 11v4h10v-4c0-.9428 0-1.4142-.2929-1.7071C16.4142 9 15.9428 9 15 9H9c-.9428 0-1.4142 0-1.7071.2929C7 9.5858 7 10.0572 7 11Z"
            />
        </svg>
    );
}
export default Scan;
