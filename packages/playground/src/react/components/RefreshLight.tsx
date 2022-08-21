import React, { SVGProps } from "react";

export function RefreshLight(props: SVGProps<SVGSVGElement>) {
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
                d="m10 19-.3536-.3536L9.293 19l.3536.3536L10 19Zm3.6464-4.3536-4 4 .7072.7072 4-4-.7072-.7072Zm-4 4.7072 4 4 .7072-.7072-4-4-.7072.7072Z"
            />
            <path
                stroke="currentColor"
                d="M5.9378 15.5a7 7 0 1 1 5.0111 3.4206"
            />
        </svg>
    );
}
export default RefreshLight;
