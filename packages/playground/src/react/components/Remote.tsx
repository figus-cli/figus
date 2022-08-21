import React, { SVGProps } from "react";

export function Remote(props: SVGProps<SVGSVGElement>) {
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
                d="m11 9 .7809-.6247.4997.6247-.4997.6247L11 9ZM7.7809 3.3753l4 5-1.5618 1.2494-4-5L7.781 3.3753Zm4 6.2494-4 5-1.5618-1.2494 4-5 1.5618 1.2494ZM13 15l-.7809-.6247-.4997.6247.4997.6247L13 15Zm3.2191-5.6247-4 5 1.5618 1.2494 4-5-1.5618-1.2494Zm-4 6.2494 4 5 1.5618-1.2494-4-5-1.5618 1.2494Z"
            />
        </svg>
    );
}
export default Remote;
