import React, { SVGProps } from "react";

export function ExpandDownStopLight(props: SVGProps<SVGSVGElement>) {
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
                d="m12 13-.3536.3536.3536.3535.3536-.3535L12 13ZM5.6464 7.3536l6 6 .7072-.7072-6-6-.7072.7072Zm6.7072 6 6-6-.7072-.7072-6 6 .7072.7072Z"
            />
            <path stroke="currentColor" d="M17 18H7" />
        </svg>
    );
}
export default ExpandDownStopLight;
