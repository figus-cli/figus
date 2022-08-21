import React, { SVGProps } from "react";

export function SignOutCircle(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M8 18.9282a8.0005 8.0005 0 0 0 8 0A8.0006 8.0006 0 0 0 18.9282 8 7.9993 7.9993 0 0 0 12 4a8 8 0 0 0-4 1.0718"
            />
            <path
                fill="currentColor"
                d="m2 12-.7809-.6247L.7194 12l.4997.6247L2 12Zm9 1c.5523 0 1-.4477 1-1s-.4477-1-1-1v2ZM5.2191 6.3753l-4 5 1.5618 1.2494 4-5L5.219 6.3753Zm-4 6.2494 4 5 1.5618-1.2494-4-5-1.5618 1.2494ZM2 13h9v-2H2v2Z"
            />
        </svg>
    );
}
export default SignOutCircle;
