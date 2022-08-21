import React, { SVGProps } from "react";

export function ArrowTopLight(props: SVGProps<SVGSVGElement>) {
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
                d="m12 4-.3536-.3535L12 3.2929l.3536.3536L12 4Zm.5 15a.5.5 0 0 1-1 0h1ZM5.6464 9.6464l6-6 .7072.7072-6 6-.7072-.7072Zm6.7072-6 6 6-.7072.7072-6-6 .7072-.7071ZM12.5 4v15h-1V4h1Z"
            />
        </svg>
    );
}
export default ArrowTopLight;
