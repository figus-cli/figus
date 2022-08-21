import React, { SVGProps } from "react";

export function LineOutLight(props: SVGProps<SVGSVGElement>) {
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
                d="M9 15v3c0 .9428 0 1.4142-.2929 1.7071C8.4142 20 7.9428 20 7 20H6c-.9428 0-1.4142 0-1.7071-.2929C4 19.4142 4 18.9428 4 18v-1c0-.9428 0-1.4142.2929-1.7071C4.5858 15 5.0572 15 6 15h3Zm6-11h5v5m0-5L9 15"
            />
        </svg>
    );
}
export default LineOutLight;
