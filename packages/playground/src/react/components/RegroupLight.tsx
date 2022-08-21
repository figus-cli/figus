import React, { SVGProps } from "react";

export function RegroupLight(props: SVGProps<SVGSVGElement>) {
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
                d="m18 20-.3536.3536.3536.3535.3536-.3535L18 20ZM13 4.5a.5.5 0 0 0 0 1v-1Zm.6464 11.8536 4 4 .7072-.7072-4-4-.7072.7072Zm4.7072 4 4-4-.7072-.7072-4 4 .7072.7072ZM18.5 20V9h-1v11h1ZM14 4.5h-1v1h1v-1ZM18.5 9c0-2.4853-2.0147-4.5-4.5-4.5v1c1.933 0 3.5 1.567 3.5 3.5h1ZM6 4l.3536-.3535L6 3.2929l-.3536.3536L6 4Zm5 15.5a.5.5 0 0 0 0-1v1Zm-.6464-11.8536-4-4-.7072.7072 4 4 .7072-.7072Zm-4.7072-4-4 4 .7071.7072 4-4-.707-.7071ZM5.5 4v11h1V4h-1ZM10 19.5h1v-1h-1v1ZM5.5 15c0 2.4853 2.0147 4.5 4.5 4.5v-1c-1.933 0-3.5-1.567-3.5-3.5h-1Z"
            />
        </svg>
    );
}
export default RegroupLight;
