import React, { SVGProps } from "react";

export function JumpTimeFill(props: SVGProps<SVGSVGElement>) {
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
                d="m17.3441 8.0752-4.4636 8.2896c-.3776.7012-1.3834.7012-1.761 0L6.6559 8.0752c-.4766-.885.5039-1.841 1.3766-1.3424l3.4714 1.9837a.9998.9998 0 0 0 .9922 0l3.4714-1.9836c.8727-.4988 1.8532.4573 1.3766 1.3423Z"
            />
            <path stroke="currentColor" d="M4 19h5m6 0h5" />
        </svg>
    );
}
export default JumpTimeFill;
