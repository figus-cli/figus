import React, { SVGProps } from "react";

export function BoxRefreshAltRight(props: SVGProps<SVGSVGElement>) {
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
                d="m16 16 .7071-.7071.7071.7071-.7071.7071L16 16Zm-3.2929-4.7071 4 4-1.4142 1.4142-4-4 1.4142-1.4142Zm4 5.4142-4 4-1.4142-1.4142 4-4 1.4142 1.4142Z"
            />
            <path
                stroke="currentColor"
                d="M13 8h4m-1 8H8c-2.2091 0-4-1.7909-4-4 0-2.2091 1.7909-4 4-4h1"
            />
        </svg>
    );
}
export default BoxRefreshAltRight;
