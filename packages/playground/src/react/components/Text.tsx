import React, { SVGProps } from "react";

export function Text(props: SVGProps<SVGSVGElement>) {
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
                d="M7 6v8.5925c0 1.7183 2.0238 2.6366 3.317 1.5051L11 15.5M4 9h6m4 0 5 8m0-8-5 8"
            />
        </svg>
    );
}
export default Text;
