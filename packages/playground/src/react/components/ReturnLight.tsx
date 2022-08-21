import React, { SVGProps } from "react";

export function ReturnLight(props: SVGProps<SVGSVGElement>) {
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
                d="m20 10 .3536.3536.3535-.3536-.3535-.3536L20 10ZM3.5 18a.5.5 0 0 0 1 0h-1Zm11.8536-2.6464 5-5-.7072-.7072-5 5 .7072.7072Zm5-5.7072-5-5-.7072.7072 5 5 .7072-.7072ZM20 9.5H10v1h10v-1ZM3.5 16v2h1v-2h-1ZM10 9.5c-3.5899 0-6.5 2.9101-6.5 6.5h1c0-3.0376 2.4624-5.5 5.5-5.5v-1Z"
            />
        </svg>
    );
}
export default ReturnLight;
