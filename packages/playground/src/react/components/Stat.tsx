import React, { SVGProps } from "react";

export function Stat(props: SVGProps<SVGSVGElement>) {
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
                height="13"
                x="18"
                y="7"
                stroke="currentColor"
                rx="1"
            />
            <rect
                width="4"
                height="7"
                x="10"
                y="13"
                stroke="currentColor"
                rx="1"
            />
            <rect
                width="4"
                height="11"
                x="2"
                y="9"
                stroke="currentColor"
                rx="1"
            />
        </svg>
    );
}
export default Stat;
