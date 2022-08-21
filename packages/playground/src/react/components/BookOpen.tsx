import React, { SVGProps } from "react";

export function BookOpen(props: SVGProps<SVGSVGElement>) {
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
                d="M5 17h4c1.6569 0 3 1.3431 3 3V10c0-2.8284 0-4.2426-.8787-5.1213C10.2426 4 8.8284 4 6 4H5c-.9428 0-1.4142 0-1.7071.2929C3 4.5858 3 5.0572 3 6v9c0 .9428 0 1.4142.2929 1.7071C3.5858 17 4.0572 17 5 17Zm14 0h-4c-1.6569 0-3 1.3431-3 3V10c0-2.8284 0-4.2426.8787-5.1213C13.7574 4 15.1716 4 18 4h1c.9428 0 1.4142 0 1.7071.2929C21 4.5858 21 5.0572 21 6v9c0 .9428 0 1.4142-.2929 1.7071C20.4142 17 19.9428 17 19 17Z"
            />
        </svg>
    );
}
export default BookOpen;
