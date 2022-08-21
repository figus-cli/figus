import React, { SVGProps } from "react";

export function WidgetLight(props: SVGProps<SVGSVGElement>) {
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
            />
            <rect
                width="7"
                height="7"
                x="3"
                y="14"
                stroke="currentColor"
                rx="1"
            />
            <rect
                width="7"
                height="7"
                x="14"
                y="3"
                stroke="currentColor"
                rx="1"
            />
            <rect
                width="7"
                height="7"
                x="14"
                y="14"
                stroke="currentColor"
                rx="1"
            />
        </svg>
    );
}
export default WidgetLight;
