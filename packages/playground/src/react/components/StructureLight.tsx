import React, { SVGProps } from "react";

export function StructureLight(props: SVGProps<SVGSVGElement>) {
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
                height="7"
                x="4"
                y="4"
                stroke="currentColor"
                rx="1"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M4 16c0-.9428 0-1.4142.2929-1.7071C4.5858 14 5.0572 14 6 14h4v4c0 .9428 0 1.4142-.2929 1.7071C9.4142 20 8.9428 20 8 20H6c-.9428 0-1.4142 0-1.7071-.2929C4 19.4142 4 18.9428 4 18v-2Zm10-2h4c.9428 0 1.4142 0 1.7071.2929C20 14.5858 20 15.0572 20 16v2c0 .9428 0 1.4142-.2929 1.7071C19.4142 20 18.9428 20 18 20h-2c-.9428 0-1.4142 0-1.7071-.2929C14 19.4142 14 18.9428 14 18v-4Z"
            />
        </svg>
    );
}
export default StructureLight;
