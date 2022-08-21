import React, { SVGProps } from "react";

export function WidgetAltLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <rect
                width="6"
                height="6"
                stroke="currentColor"
                rx="1"
                transform="matrix(1 0 0 -1 14 10)"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M10 14h4c.9428 0 1.4142 0 1.7071.2929C16 14.5858 16 15.0572 16 16v2c0 .9428 0 1.4142-.2929 1.7071C15.4142 20 14.9428 20 14 20h-4v-6Zm0-4c0-.9428 0-1.4142-.2929-1.7071C9.4142 8 8.9428 8 8 8H6c-.9428 0-1.4142 0-1.7071.2929C4 8.5858 4 9.0572 4 10v4h6v-4Zm0 10H6c-.9428 0-1.4142 0-1.7071-.2929C4 19.4142 4 18.9428 4 18v-4h6v6Z"
            />
        </svg>
    );
}
export default WidgetAltLight;
