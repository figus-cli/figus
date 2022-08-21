import React, { SVGProps } from "react";

export function On(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="14"
                height="10"
                x="5"
                y="7"
                stroke="currentColor"
                rx="2"
            />
            <rect
                width="5"
                height="6"
                x="12"
                y="9"
                fill="currentColor"
                rx="1"
            />
        </svg>
    );
}
export default On;
