import React, { SVGProps } from "react";

export function CollapseLight(props: SVGProps<SVGSVGElement>) {
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
                d="m9 13-.3536-.3536L9 12.2929l.3536.3535L9 13Zm.5 9a.5.5 0 0 1-1 0h1Zm-5.8536-4.3536 5-5 .7072.7072-5 5-.7071-.7072Zm5.7072-5 5 5-.7072.7072-5-5 .7072-.7072ZM9.5 13v9h-1v-9h1Zm5.5-2-.3536.3536.3536.3535.3536-.3535L15 11Zm.5-9a.5.5 0 0 0-1 0h1ZM9.6464 6.3536l5 5 .7072-.7072-5-5-.7072.7072Zm5.7072 5 5-5-.7072-.7072-5 5 .7072.7072ZM15.5 11V2h-1v9h1Z"
            />
        </svg>
    );
}
export default CollapseLight;
