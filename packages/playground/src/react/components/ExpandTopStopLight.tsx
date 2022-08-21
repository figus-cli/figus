import React, { SVGProps } from "react";

export function ExpandTopStopLight(props: SVGProps<SVGSVGElement>) {
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
                d="m12 11 .3536-.3536L12 10.2929l-.3536.3535L12 11Zm6.3536 5.6464-6-6-.7072.7072 6 6 .7072-.7072Zm-6.7072-6-6 6 .7072.7072 6-6-.7072-.7072Z"
            />
            <path stroke="currentColor" d="M7 6h10" />
        </svg>
    );
}
export default ExpandTopStopLight;
