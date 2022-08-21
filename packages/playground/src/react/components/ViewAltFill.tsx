import React, { SVGProps } from "react";

export function ViewAltFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M17 4h.2c1.7913 0 2.687 0 3.2435.5565C21 5.113 21 6.0087 21 7.8V8m-4 12h.2c1.7913 0 2.687 0 3.2435-.5565C21 18.887 21 17.9913 21 16.2V16M7 4h-.2c-1.7913 0-2.687 0-3.2435.5565C3 5.113 3 6.0087 3 7.8V8m4 12h-.2c-1.7913 0-2.687 0-3.2435-.5565C3 18.887 3 17.9913 3 16.2V16"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M18.8149 12c0-.5363-.1257-.7538-.377-1.1888C17.5834 9.3325 15.6561 7 12 7c-3.656 0-5.5834 2.3325-6.4379 3.8112-.2513.435-.377.6525-.377 1.1888 0 .5363.1257.7538.377 1.1888C6.4166 14.6675 8.344 17 12 17s5.5834-2.3325 6.4379-3.8112c.2513-.435.377-.6525.377-1.1888ZM12 15c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3c-1.6568 0-3 1.3431-3 3s1.3432 3 3 3Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default ViewAltFill;
