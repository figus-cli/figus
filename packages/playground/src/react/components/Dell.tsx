import React, { SVGProps } from "react";

export function Dell(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="9" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m9.0001 14.9997 6-6M15 15 9 9"
            />
        </svg>
    );
}
export default Dell;
