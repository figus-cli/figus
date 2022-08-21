import React, { SVGProps } from "react";

export function Code(props: SVGProps<SVGSVGElement>) {
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
                d="m20 12 .7809-.6247.4997.6247-.4997.6247L20 12Zm-3.2191-5.6247 4 5-1.5618 1.2494-4-5 1.5618-1.2494Zm4 6.2494-4 5-1.5618-1.2494 4-5 1.5618 1.2494ZM4 12l-.7809-.6247L2.7194 12l.4997.6247L4 12Zm3.2191-5.6247-4 5 1.5618 1.2494 4-5L7.219 6.3753Zm-4 6.2494 4 5 1.5618-1.2494-4-5-1.5618 1.2494Z"
            />
        </svg>
    );
}
export default Code;
