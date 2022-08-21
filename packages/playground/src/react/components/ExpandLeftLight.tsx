import React, { SVGProps } from "react";

export function ExpandLeftLight(props: SVGProps<SVGSVGElement>) {
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
                d="m9 12-.3536-.3536L8.293 12l.3536.3536L9 12Zm5.6464-6.3536-6 6 .7072.7072 6-6-.7072-.7072Zm-6 6.7072 6 6 .7072-.7072-6-6-.7072.7072Z"
            />
        </svg>
    );
}
export default ExpandLeftLight;
