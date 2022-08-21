import React, { SVGProps } from "react";

export function LineIn(props: SVGProps<SVGSVGElement>) {
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
                d="M15 9V6c0-.9428 0-1.4142.2929-1.7071C15.5858 4 16.0572 4 17 4h1c.9428 0 1.4142 0 1.7071.2929C20 4.5858 20 5.0572 20 6v1c0 .9428 0 1.4142-.2929 1.7071C19.4142 9 18.9428 9 18 9h-3ZM9 20H4v-5m0 5L15 9"
            />
        </svg>
    );
}
export default LineIn;
