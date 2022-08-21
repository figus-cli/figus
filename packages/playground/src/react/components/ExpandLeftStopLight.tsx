import React, { SVGProps } from "react";

export function ExpandLeftStopLight(props: SVGProps<SVGSVGElement>) {
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
                d="m11 12-.3536-.3536-.3535.3536.3535.3536L11 12Zm5.6464-6.3536-6 6 .7072.7072 6-6-.7072-.7072Zm-6 6.7072 6 6 .7072-.7072-6-6-.7072.7072Z"
            />
            <path stroke="currentColor" d="M6 7v10" />
        </svg>
    );
}
export default ExpandLeftStopLight;
