import React, { SVGProps } from "react";

export function DoneRoundLight(props: SVGProps<SVGSVGElement>) {
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
                d="m5 14 3.233 2.4248a1 1 0 0 0 1.374-.1667L18 6"
            />
        </svg>
    );
}
export default DoneRoundLight;
