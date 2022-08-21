import React, { SVGProps } from "react";

export function ArrowTopLong(props: SVGProps<SVGSVGElement>) {
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
                d="M11 7c0-.5523.4477-1 1-1s1 .4477 1 1h-2Zm2 14c0 .5523-.4477 1-1 1s-1-.4477-1-1h2Zm0-14v14h-2V7h2Z"
            />
            <path
                fill="currentColor"
                d="M11.7966 2.2848 7.9036 7.735C7.5254 8.2645 7.9039 9 8.5546 9h6.8908c.6507 0 1.0292-.7355.651-1.265l-3.893-5.4502a.25.25 0 0 0-.4068 0Z"
            />
        </svg>
    );
}
export default ArrowTopLong;
