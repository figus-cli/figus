import React, { SVGProps } from "react";

export function Navigate(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path stroke="currentColor" d="m5 20 7-16 7 16-7-2-7 2Z" />
            <path
                fill="currentColor"
                d="m12 13-.5812.8137a.9997.9997 0 0 0 1.1624 0L12 13Zm-4.0812-1.6863 3.5 2.5 1.1624-1.6274-3.5-2.5-1.1624 1.6274Zm4.6624 2.5 3.5-2.5-1.1624-1.6274-3.5 2.5 1.1624 1.6274Z"
            />
        </svg>
    );
}
export default Navigate;
