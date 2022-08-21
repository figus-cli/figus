import React, { SVGProps } from "react";

export function ExpandRightStopLight(props: SVGProps<SVGSVGElement>) {
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
                d="m13 12 .3536-.3536.3535.3536-.3535.3536L13 12ZM7.3536 5.6464l6 6-.7072.7072-6-6 .7072-.7072Zm6 6.7072-6 6-.7072-.7072 6-6 .7072.7072Z"
            />
            <path stroke="currentColor" d="M18 7v10" />
        </svg>
    );
}
export default ExpandRightStopLight;
