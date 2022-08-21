import React, { SVGProps } from "react";

export function BoxRefreshRight(props: SVGProps<SVGSVGElement>) {
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
                d="m14 16 .7071-.7071.7071.7071-.7071.7071L14 16Zm-3.2929-4.7071 4 4-1.4142 1.4142-4-4 1.4142-1.4142Zm4 5.4142-4 4-1.4142-1.4142 4-4 1.4142 1.4142Z"
            />
            <path
                stroke="currentColor"
                d="M20 13.5V10c0-1.1046-.8954-2-2-2H6c-1.1046 0-2 .8954-2 2v4c0 1.1046.8954 2 2 2h7"
            />
        </svg>
    );
}
export default BoxRefreshRight;
