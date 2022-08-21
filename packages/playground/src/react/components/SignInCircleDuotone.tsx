import React, { SVGProps } from "react";

export function SignInCircleDuotone(props: SVGProps<SVGSVGElement>) {
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
                rx="7"
                ry="7"
                transform="matrix(0 -1 -1 0 13 12)"
            />
            <path
                fill="currentColor"
                d="M11.1464 9.8536a.5001.5001 0 0 1 .7072-.7072l-.7072.7072ZM14 12l.3536-.3536.3535.3536-.3535.3536L14 12Zm-2.1464 2.8536a.5002.5002 0 0 1-.7072 0 .5002.5002 0 0 1 0-.7072l.7072.7072ZM4 12.5a.5.5 0 0 1 0-1v1Zm7.8536-3.3536 2.5 2.5-.7072.7072-2.5-2.5.7072-.7072Zm2.5 3.2072-2.5 2.5-.7072-.7072 2.5-2.5.7072.7072ZM14 12.5H4v-1h10v1Z"
            />
        </svg>
    );
}
export default SignInCircleDuotone;
