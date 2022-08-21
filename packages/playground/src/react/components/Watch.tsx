import React, { SVGProps } from "react";

export function Watch(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="14"
                height="12"
                x="5"
                y="5"
                stroke="currentColor"
                rx="3"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M8 4c0-.9428 0-1.4142.2929-1.7071C8.5858 2 9.0572 2 10 2h4c.9428 0 1.4142 0 1.7071.2929C16 2.5858 16 3.0572 16 4v1H8V4Zm0 16c0 .9428 0 1.4142.2929 1.7071C8.5858 22 9.0572 22 10 22h4c.9428 0 1.4142 0 1.7071-.2929C16 21.4142 16 20.9428 16 20v-3H8v3Z"
            />
        </svg>
    );
}
export default Watch;
