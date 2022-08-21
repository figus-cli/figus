import React, { SVGProps } from "react";

export function FileDockLight(props: SVGProps<SVGSVGElement>) {
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
                d="M19 13v2c0 2.8284 0 4.2426-.8787 5.1213C17.2426 21 15.8284 21 13 21h-2c-2.8284 0-4.2426 0-5.1213-.8787C5 19.2426 5 17.8284 5 15V9c0-2.8284 0-4.2426.8787-5.1213C6.7574 3 8.1716 3 11 3h1m6 0v6m3-3h-6m-6 7h6M9 9h4m-4 8h4"
            />
        </svg>
    );
}
export default FileDockLight;
