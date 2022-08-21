import React, { SVGProps } from "react";

export function TabletLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="15"
                height="19"
                x="4.5"
                y="2.5"
                stroke="currentColor"
                rx="2.5"
            />
            <path fill="currentColor" stroke="currentColor" d="M15 18H9" />
        </svg>
    );
}
export default TabletLight;
