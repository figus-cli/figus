import React, { SVGProps } from "react";

export function Clock(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M5.9647 3.1363a4 4 0 0 0-2.8284 2.8284m14.899-2.8284a4 4 0 0 1 2.8284 2.8284M12 8v3.75a.25.25 0 0 0 .25.25H15"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Clock;
