import React, { SVGProps } from "react";

export function External(props: SVGProps<SVGSVGElement>) {
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
                d="M15 3.5h5.5m0 0V9m0-5.5-8 8"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M11.5 5.5h-4c-1.1046 0-2 .8954-2 2v9c0 1.1046.8954 2 2 2h9c1.1046 0 2-.8954 2-2v-4"
            />
        </svg>
    );
}
export default External;
