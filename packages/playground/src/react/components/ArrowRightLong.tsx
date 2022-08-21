import React, { SVGProps } from "react";

export function ArrowRightLong(props: SVGProps<SVGSVGElement>) {
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
                d="M17 11c.5523 0 1 .4477 1 1s-.4477 1-1 1v-2ZM3 13c-.5523 0-1-.4477-1-1s.4477-1 1-1v2Zm14 0H3v-2h14v2Z"
            />
            <path
                fill="currentColor"
                d="m21.7152 11.7966-5.4502-3.893c-.5295-.3782-1.265.0003-1.265.651v6.8908c0 .6507.7355 1.0292 1.265.651l5.4502-3.893a.25.25 0 0 0 0-.4068Z"
            />
        </svg>
    );
}
export default ArrowRightLong;
