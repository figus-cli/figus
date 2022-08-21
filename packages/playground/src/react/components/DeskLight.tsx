import React, { SVGProps } from "react";

export function DeskLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="16"
                height="16"
                x="4"
                y="5"
                stroke="currentColor"
                rx="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M16 2v4c0 .9428 0 1.4142-.2929 1.7071C15.4142 8 14.9428 8 14 8h-4c-.9428 0-1.4142 0-1.7071-.2929C8 7.4142 8 6.9428 8 6V2m1 12h6"
            />
        </svg>
    );
}
export default DeskLight;
