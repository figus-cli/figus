import React, { SVGProps } from "react";

export function SignOutCircleDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <ellipse
                fill="currentColor"
                rx="6"
                ry="6"
                transform="matrix(0 -1 -1 0 14 12)"
            />
            <path
                stroke="currentColor"
                d="M7.7 12c0-3.4794 2.8206-6.3 6.3-6.3 3.4794 0 6.3 2.8206 6.3 6.3 0 3.4794-2.8206 6.3-6.3 6.3-3.4794 0-6.3-2.8206-6.3-6.3Z"
            />
            <path
                stroke="currentColor"
                d="M8 18.9282a8.0005 8.0005 0 0 0 8 0A8.0006 8.0006 0 0 0 18.9282 8 7.9993 7.9993 0 0 0 12 4a8 8 0 0 0-4 1.0718"
            />
            <path
                fill="currentColor"
                d="m2 12-.4685-.3748L1.2316 12l.2999.3748L2 12Zm9 .6a.6.6 0 1 0 0-1.2v1.2ZM5.5315 6.6252l-4 5 .937.7496 4-5-.937-.7496Zm-4 5.7496 4 5 .937-.7496-4-5-.937.7496ZM2 12.6h9v-1.2H2v1.2Z"
            />
        </svg>
    );
}
export default SignOutCircleDuotoneLine;
