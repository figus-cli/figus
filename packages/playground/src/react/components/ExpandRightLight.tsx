import React, { SVGProps } from "react";

export function ExpandRightLight(props: SVGProps<SVGSVGElement>) {
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
                d="m15 12 .3536-.3536.3535.3536-.3535.3536L15 12ZM9.3536 5.6464l6 6-.7072.7072-6-6 .7072-.7072Zm6 6.7072-6 6-.7072-.7072 6-6 .7072.7072Z"
            />
        </svg>
    );
}
export default ExpandRightLight;
