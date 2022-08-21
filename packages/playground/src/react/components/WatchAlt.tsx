import React, { SVGProps } from "react";

export function WatchAlt(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="10"
                height="10"
                x="7"
                y="7"
                stroke="currentColor"
                rx="3"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M9 4c0-.9428 0-1.4142.2929-1.7071C9.5858 2 10.0572 2 11 2h2c.9428 0 1.4142 0 1.7071.2929C15 2.5858 15 3.0572 15 4v3H9V4Zm0 16c0 .9428 0 1.4142.2929 1.7071C9.5858 22 10.0572 22 11 22h2c.9428 0 1.4142 0 1.7071-.2929C15 21.4142 15 20.9428 15 20v-3H9v3Z"
            />
        </svg>
    );
}
export default WatchAlt;
