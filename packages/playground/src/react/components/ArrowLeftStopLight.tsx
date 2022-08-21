import React, { SVGProps } from "react";

export function ArrowLeftStopLight(props: SVGProps<SVGSVGElement>) {
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
                d="m10 12-.3536-.3536L9.293 12l.3536.3536L10 12Zm10 .5a.5.5 0 0 0 0-1v1Zm-4.3536-6.8536-6 6 .7072.7072 6-6-.7072-.7072Zm-6 6.7072 6 6 .7072-.7072-6-6-.7072.7072ZM10 12.5h10v-1H10v1Z"
            />
            <path stroke="currentColor" d="M4 5v14" />
        </svg>
    );
}
export default ArrowLeftStopLight;
