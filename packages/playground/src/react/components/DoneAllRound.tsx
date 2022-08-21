import React, { SVGProps } from "react";

export function DoneAllRound(props: SVGProps<SVGSVGElement>) {
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
                d="m8.0001 13 4.2277 3.3821c.4279.3424 1.0516.2765 1.3986-.1476L22.0001 6"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="m11.1892 12.2368 4.5848-5.6035c.3497-.4275.2867-1.0575-.1408-1.4072-.4274-.3497-1.0574-.2867-1.4072.1407l-4.5733 5.5896 1.5365 1.2804Zm-3.1663 3.87-1.5365-1.2805-.6533.7985L2.6 13.2c-.4418-.3313-1.0686-.2418-1.4.2-.3314.4419-.2418 1.0687.2 1.4l3.233 2.4248c.8575.6431 2.0693.496 2.748-.3335l.642-.7845Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default DoneAllRound;
