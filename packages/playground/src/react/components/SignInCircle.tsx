import React, { SVGProps } from "react";

export function SignInCircle(props: SVGProps<SVGSVGElement>) {
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
                d="M4.929 19.0711a10 10 0 1 0 0-14.1422"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="m15 12 .7809-.6247.4997.6247-.4997.6247L15 12ZM3 13c-.5523 0-1-.4477-1-1s.4477-1 1-1v2Zm8.7809-6.6247 4 5-1.5618 1.2494-4-5 1.5618-1.2494Zm4 6.2494-4 5-1.5618-1.2494 4-5 1.5618 1.2494ZM15 13H3v-2h12v2Z"
            />
        </svg>
    );
}
export default SignInCircle;
