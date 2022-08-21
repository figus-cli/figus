import React, { SVGProps } from "react";

export function Tie(props: SVGProps<SVGSVGElement>) {
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
                d="M9 7V3h6v4M9 7 7 19l5 2 5-2-2-12M9 7h6m-3.5 5.5H9"
            />
        </svg>
    );
}
export default Tie;
