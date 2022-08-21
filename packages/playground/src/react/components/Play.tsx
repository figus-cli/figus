import React, { SVGProps } from "react";

export function Play(props: SVGProps<SVGSVGElement>) {
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
                d="M16.2111 11.1056 9.7367 7.8683C8.9387 7.4693 8 8.0496 8 8.9416v6.1168c0 .892.9388 1.4722 1.7367 1.0733l6.4744-3.2373c.7371-.3685.7371-1.4203 0-1.7888Z"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Play;
