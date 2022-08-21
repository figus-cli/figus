import React, { SVGProps } from "react";

export function ArrowDownLight(props: SVGProps<SVGSVGElement>) {
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
                d="m12 20-.3536.3536.3536.3535.3536-.3535L12 20Zm.5-15a.5.5 0 0 0-1 0h1Zm-6.8536 9.3536 6 6 .7072-.7072-6-6-.7072.7072Zm6.7072 6 6-6-.7072-.7072-6 6 .7072.7072ZM12.5 20V5h-1v15h1Z"
            />
        </svg>
    );
}
export default ArrowDownLight;
