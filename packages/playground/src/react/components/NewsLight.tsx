import React, { SVGProps } from "react";

export function NewsLight(props: SVGProps<SVGSVGElement>) {
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
                height="14"
                x="5"
                y="5"
                stroke="currentColor"
                rx="3"
            />
            <path fill="currentColor" stroke="currentColor" d="M5 10h14" />
        </svg>
    );
}
export default NewsLight;
