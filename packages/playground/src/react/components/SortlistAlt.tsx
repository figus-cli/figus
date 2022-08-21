import React, { SVGProps } from "react";

export function SortlistAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M4 8v8h2V8H4Zm1.208-5.688 2.9628 4.4442C8.5253 7.288 8.1441 8 7.5052 8H2.4948c-.639 0-1.02-.7121-.6656-1.2438L4.792 2.312a.25.25 0 0 1 .416 0Zm0 19.376 2.9628-4.4442C8.5253 16.7121 8.1441 16 7.5052 16H2.4948c-.639 0-1.02.7121-.6656 1.2438L4.792 21.688a.25.25 0 0 0 .416 0Z"
            />
            <path
                stroke="currentColor"
                d="M11 7h8m-8 5h8m-8 5h8"
                strokeWidth="2"
            />
        </svg>
    );
}
export default SortlistAlt;
