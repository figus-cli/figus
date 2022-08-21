import React, { SVGProps } from "react";

export function FluidLight(props: SVGProps<SVGSVGElement>) {
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
                d="m12 3-.3536-.3535L12 2.2929l.3536.3536L12 3Zm.5 11a.5.5 0 0 1-1 0h1ZM6.6464 7.6464l5-5 .7072.7071-5 5-.7072-.707Zm5.7072-5 5 5-.7072.7072-5-5 .7072-.7071ZM12.5 3v11h-1V3h1Z"
            />
            <path
                fill="currentColor"
                d="m12 21-.3536.3536.3536.3535.3536-.3535L12 21Zm.5-7a.5.5 0 0 0-1 0h1Zm-5.8536 2.3536 5 5 .7072-.7072-5-5-.7072.7072Zm5.7072 5 5-5-.7072-.7072-5 5 .7072.7072ZM12.5 21v-7h-1v7h1Z"
            />
        </svg>
    );
}
export default FluidLight;
