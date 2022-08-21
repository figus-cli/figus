import React, { SVGProps } from "react";

export function OnButton(props: SVGProps<SVGSVGElement>) {
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
                d="M6.3431 6.3431a8 8 0 1 0 11.3138 0M12 8V4"
                strokeWidth="2"
            />
        </svg>
    );
}
export default OnButton;
