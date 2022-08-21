import React, { SVGProps } from "react";

export function SignOutCircleLight(props: SVGProps<SVGSVGElement>) {
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
                d="m2 12-.3904-.3123-.25.3123.25.3123L2 12Zm9 .5a.5.5 0 0 0 0-1v1ZM5.6096 6.6876l-4 5.0001.7808.6246 4-5-.7808-.6246Zm-4 5.6247 4 5 .7808-.6246-4-5-.7808.6246ZM2 12.5h9v-1H2v1Z"
            />
        </svg>
    );
}
export default SignOutCircleLight;
