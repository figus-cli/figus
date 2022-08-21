import React, { SVGProps } from "react";

export function ArrowDropLeft(props: SVGProps<SVGSVGElement>) {
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
                d="m9.2305 11.8079 4.4574-3.7144C14.2089 7.6592 15 8.0298 15 8.708v6.584c0 .6782-.7911 1.0488-1.3121.6145l-4.4574-3.7144a.25.25 0 0 1 0-.3842Z"
            />
        </svg>
    );
}
export default ArrowDropLeft;
