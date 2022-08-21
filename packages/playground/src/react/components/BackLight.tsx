import React, { SVGProps } from "react";

export function BackLight(props: SVGProps<SVGSVGElement>) {
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
                d="m4 10-.3535.3536L3.2929 10l.3536-.3536L4 10Zm16.5 8a.5.5 0 0 1-1 0h1ZM8.6464 15.3536l-5-5 .7072-.7072 5 5-.7072.7072Zm-5-5.7072 5-5 .7072.7072-5 5-.7071-.7072ZM4 9.5h10v1H4v-1ZM20.5 16v2h-1v-2h1ZM14 9.5c3.5898 0 6.5 2.9101 6.5 6.5h-1c0-3.0376-2.4624-5.5-5.5-5.5v-1Z"
            />
        </svg>
    );
}
export default BackLight;
