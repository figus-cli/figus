import React, { SVGProps } from "react";

export function ArrowRightLight(props: SVGProps<SVGSVGElement>) {
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
                d="m20 12 .3536-.3536.3535.3536-.3535.3536L20 12Zm-15 .5a.5.5 0 0 1 0-1v1Zm9.3536-6.8536 6 6-.7072.7072-6-6 .7072-.7072Zm6 6.7072-6 6-.7072-.7072 6-6 .7072.7072ZM20 12.5H5v-1h15v1Z"
            />
        </svg>
    );
}
export default ArrowRightLight;
