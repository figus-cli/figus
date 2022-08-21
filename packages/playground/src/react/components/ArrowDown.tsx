import React, { SVGProps } from "react";

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
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
                d="m12 20-.7071.7071.7071.7071.7071-.7071L12 20Zm1-15c0-.5523-.4477-1-1-1s-1 .4477-1 1h2Zm-7.7071 9.7071 6 6 1.4142-1.4142-6-6-1.4142 1.4142Zm7.4142 6 6-6-1.4142-1.4142-6 6 1.4142 1.4142ZM13 20V5h-2v15h2Z"
            />
        </svg>
    );
}
export default ArrowDown;
