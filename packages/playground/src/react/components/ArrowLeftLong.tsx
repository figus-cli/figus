import React, { SVGProps } from "react";

export function ArrowLeftLong(props: SVGProps<SVGSVGElement>) {
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
                d="M7 11c-.5523 0-1 .4477-1 1s.4477 1 1 1v-2Zm14 2c.5523 0 1-.4477 1-1s-.4477-1-1-1v2ZM7 13h14v-2H7v2Z"
            />
            <path
                fill="currentColor"
                d="m2.2848 11.7966 5.4502-3.893C8.2645 7.5254 9 7.9039 9 8.5546v6.8908c0 .6507-.7355 1.0292-1.265.651l-5.4502-3.893a.25.25 0 0 1 0-.4068Z"
            />
        </svg>
    );
}
export default ArrowLeftLong;
