import React, { SVGProps } from "react";

export function SortArrowLight(props: SVGProps<SVGSVGElement>) {
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
                d="m8 2-.3536-.3536L8 1.293l.3536.3536L8 2Zm.5 15a.5.5 0 0 1-1 0h1ZM3.6464 5.6464l4-4 .7072.7071-4 4-.7071-.707Zm4.7072-4 4 4-.7072.7072-4-4 .7072-.7072ZM8.5 2v15h-1V2h1ZM16 22l-.3536.3536.3536.3535.3536-.3535L16 22Zm.5-15a.5.5 0 0 0-1 0h1Zm-4.8536 11.3536 4 4 .7072-.7072-4-4-.7072.7072Zm4.7072 4 4-4-.7072-.7072-4 4 .7072.7072ZM16.5 22V7h-1v15h1Z"
            />
        </svg>
    );
}
export default SortArrowLight;
