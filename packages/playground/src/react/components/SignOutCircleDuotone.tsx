import React, { SVGProps } from "react";

export function SignOutCircleDuotone(props: SVGProps<SVGSVGElement>) {
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
                rx="7"
                ry="7"
                transform="matrix(0 -1 -1 0 15 12)"
            />
            <path
                fill="currentColor"
                d="M6.8536 9.8536a.5.5 0 1 0-.7072-.7072l.7072.7072ZM4 12l-.3535-.3536L3.2929 12l.3536.3536L4 12Zm2.1464 2.8536a.5001.5001 0 0 0 .7072-.7072l-.7072.7072ZM14 12.5a.5.5 0 0 0 0-1v1ZM6.1464 9.1464l-2.5 2.5.7072.7072 2.5-2.5-.7072-.7072Zm-2.5 3.2072 2.5 2.5.7072-.7072-2.5-2.5-.7071.7072ZM4 12.5h10v-1H4v1Z"
            />
        </svg>
    );
}
export default SignOutCircleDuotone;
