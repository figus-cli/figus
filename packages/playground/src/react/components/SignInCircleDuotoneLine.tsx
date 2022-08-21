import React, { SVGProps } from "react";

export function SignInCircleDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                fillOpacity=".24"
                rx="8"
                ry="8"
                transform="matrix(0 -1 -1 0 14 12)"
            />
            <path
                stroke="currentColor"
                d="M5.7 12c0-4.584 3.716-8.3 8.3-8.3 4.584 0 8.3 3.716 8.3 8.3 0 4.584-3.716 8.3-8.3 8.3-4.584 0-8.3-3.716-8.3-8.3Z"
                strokeOpacity=".24"
                strokeWidth=".6"
            />
            <path
                stroke="currentColor"
                d="M4.929 19.0711a10 10 0 1 0 0-14.1422"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                d="m15 12 .4685-.3748.2999.3748-.2999.3748L15 12Zm-12 .6a.6.6 0 1 1 0-1.2v1.2Zm8.4685-5.9748 4 5-.937.7496-4-5 .937-.7496Zm4 5.7496-4 5-.937-.7496 4-5 .937.7496ZM15 12.6H3v-1.2h12v1.2Z"
            />
        </svg>
    );
}
export default SignInCircleDuotoneLine;
