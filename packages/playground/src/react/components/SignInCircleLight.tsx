import React, { SVGProps } from "react";

export function SignInCircleLight(props: SVGProps<SVGSVGElement>) {
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
            />
            <path
                fill="currentColor"
                d="m15 12 .3904-.3123.2499.3123-.2499.3123L15 12Zm-12 .5a.5.5 0 0 1 0-1v1Zm8.3904-5.8124 4 5.0001-.7808.6246-4-5 .7808-.6246Zm4 5.6247-4 5-.7808-.6246 4-5 .7808.6246ZM15 12.5H3v-1h12v1Z"
            />
        </svg>
    );
}
export default SignInCircleLight;
