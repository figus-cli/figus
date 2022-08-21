import React, { SVGProps } from "react";

export function HorizontalTopLeftMainLight(props: SVGProps<SVGSVGElement>) {
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
                d="m2 8-.3536-.3536L1.293 8l.3536.3536L2 8Zm19 .5a.5.5 0 0 0 0-1v1ZM5.6464 3.6464l-4 4 .7071.7072 4-4-.707-.7071Zm-4 4.7072 4 4 .7072-.7072-4-4-.7072.7072ZM2 8.5h19v-1H2v1ZM22 16l.3536-.3536.3535.3536-.3535.3536L22 16Zm-9 .5a.5.5 0 0 1 0-1v1Zm5.3536-4.8536 4 4-.7072.7072-4-4 .7072-.7072Zm4 4.7072-4 4-.7072-.7072 4-4 .7072.7072ZM22 16.5h-9v-1h9v1Z"
            />
        </svg>
    );
}
export default HorizontalTopLeftMainLight;
