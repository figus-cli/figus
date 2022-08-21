import React, { SVGProps } from "react";

export function Stop(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="4"
                height="14"
                x="6"
                y="5"
                stroke="currentColor"
                rx="1"
            />
            <rect
                width="4"
                height="14"
                x="14"
                y="5"
                stroke="currentColor"
                rx="1"
            />
        </svg>
    );
}
export default Stop;
