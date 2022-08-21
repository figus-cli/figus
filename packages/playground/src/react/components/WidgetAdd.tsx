import React, { SVGProps } from "react";

export function WidgetAdd(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="7"
                height="7"
                x="3"
                y="3"
                stroke="currentColor"
                rx="1"
                strokeWidth="2"
            />
            <rect
                width="7"
                height="7"
                x="3"
                y="14"
                stroke="currentColor"
                rx="1"
                strokeWidth="2"
            />
            <rect
                width="7"
                height="7"
                x="14"
                y="3"
                stroke="currentColor"
                rx="1"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M17.5 14.0002v7.0002m3.5001-3.5003H14"
                strokeWidth="2"
            />
        </svg>
    );
}
export default WidgetAdd;
