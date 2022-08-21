import React, { SVGProps } from "react";

export function ArhiveFill(props: SVGProps<SVGSVGElement>) {
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
                d="M2 7c0-1.8856 0-2.8284.5858-3.4142C3.1716 3 4.1144 3 6 3h12c1.8856 0 2.8284 0 3.4142.5858C22 4.1716 22 5.1144 22 7c0 .9428 0 1.4142-.2929 1.7071C21.4142 9 20.9428 9 20 9H4c-.9428 0-1.4142 0-1.7071-.2929C2 8.4142 2 7.9428 2 7Z"
            />
            <path
                fill="currentColor"
                d="M4.8787 20.1213C4 19.2426 4 17.8284 4 15v-4h16v4c0 2.8284 0 4.2426-.8787 5.1213C18.2426 21 16.8284 21 14 21h-4c-2.8284 0-4.2426 0-5.1213-.8787ZM10 15c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1h-4Z"
            />
        </svg>
    );
}
export default ArhiveFill;
