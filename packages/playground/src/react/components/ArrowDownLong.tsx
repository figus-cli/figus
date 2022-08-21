import React, { SVGProps } from "react";

export function ArrowDownLong(props: SVGProps<SVGSVGElement>) {
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
                d="M13 17c0 .5523-.4477 1-1 1s-1-.4477-1-1h2ZM11 3c0-.5523.4477-1 1-1s1 .4477 1 1h-2Zm0 14V3h2v14h-2Z"
            />
            <path
                fill="currentColor"
                d="m12.2034 21.7152 3.893-5.4502c.3782-.5295-.0003-1.265-.651-1.265H8.5546c-.6508 0-1.0293.7355-.651 1.265l3.893 5.4502a.25.25 0 0 0 .4068 0Z"
            />
        </svg>
    );
}
export default ArrowDownLong;
