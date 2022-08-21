import React, { SVGProps } from "react";

export function ExpandDownLight(props: SVGProps<SVGSVGElement>) {
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
                d="m12 15 .3536.3536-.3536.3535-.3536-.3535L12 15Zm6.3536-5.6464-6 6-.7072-.7072 6-6 .7072.7072Zm-6.7072 6-6-6 .7072-.7072 6 6-.7072.7072Z"
            />
        </svg>
    );
}
export default ExpandDownLight;
