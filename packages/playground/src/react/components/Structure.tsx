import React, { SVGProps } from "react";

export function Structure(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="16"
                height="5"
                x="4"
                y="4"
                stroke="currentColor"
                rx="1"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M4 17c0-.9428 0-1.4142.2929-1.7071C4.5858 15 5.0572 15 6 15h3v3c0 .9428 0 1.4142-.2929 1.7071C8.4142 20 7.9428 20 7 20H6c-.9428 0-1.4142 0-1.7071-.2929C4 19.4142 4 18.9428 4 18v-1Zm11-2h3c.9428 0 1.4142 0 1.7071.2929C20 15.5858 20 16.0572 20 17v1c0 .9428 0 1.4142-.2929 1.7071C19.4142 20 18.9428 20 18 20h-1c-.9428 0-1.4142 0-1.7071-.2929C15 19.4142 15 18.9428 15 18v-3Z"
            />
        </svg>
    );
}
export default Structure;
