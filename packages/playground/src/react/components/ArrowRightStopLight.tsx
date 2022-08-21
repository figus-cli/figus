import React, { SVGProps } from "react";

export function ArrowRightStopLight(props: SVGProps<SVGSVGElement>) {
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
                d="m14 12 .3536-.3536.3535.3536-.3535.3536L14 12Zm-10 .5a.5.5 0 0 1 0-1v1Zm4.3536-6.8536 6 6-.7072.7072-6-6 .7072-.7072Zm6 6.7072-6 6-.7072-.7072 6-6 .7072.7072ZM14 12.5H4v-1h10v1Z"
            />
            <path stroke="currentColor" d="M20 5v14" />
        </svg>
    );
}
export default ArrowRightStopLight;
