import React, { SVGProps } from "react";

export function ArrowTop(props: SVGProps<SVGSVGElement>) {
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
                d="m12 4-.7071-.7071L12 2.5858l.7071.707L12 4Zm1 15c0 .5523-.4477 1-1 1s-1-.4477-1-1h2ZM5.2929 9.2929l6-6 1.4142 1.4142-6 6L5.293 9.2929Zm7.4142-6 6 6-1.4142 1.4142-6-6 1.4142-1.4142ZM13 4v15h-2V4h2Z"
            />
        </svg>
    );
}
export default ArrowTop;
