import React, { SVGProps } from "react";

export function FileDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M5 5c0-1.1046.8954-2 2-2h4.75a.25.25 0 0 1 .25.25V8c0 1.1046.8954 2 2 2h4.75a.25.25 0 0 1 .25.25V19c0 1.1046-.8954 2-2 2H7c-1.1046 0-2-.8954-2-2V5Z"
                fillOpacity=".24"
            />
            <path
                fill="currentColor"
                d="M13 8V3.6036c0-.2228.2693-.3343.4268-.1768l5.1464 5.1464c.1575.1575.046.4268-.1768.4268H14c-.5523 0-1-.4477-1-1Z"
            />
        </svg>
    );
}
export default FileDuotone;
