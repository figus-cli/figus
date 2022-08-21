import React, { SVGProps } from "react";

export function WidgetAlt(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="20"
                height="9"
                x="2"
                y="3"
                stroke="currentColor"
                rx="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M16 18c0 1.1046-.8954 2-2 2h-4c-1.1046 0-2-.8954-2-2m11-4c0 1.1046-.8954 2-2 2H7c-1.1046 0-2-.8954-2-2"
            />
        </svg>
    );
}
export default WidgetAlt;
