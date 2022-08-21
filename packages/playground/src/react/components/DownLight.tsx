import React, { SVGProps } from "react";

export function DownLight(props: SVGProps<SVGSVGElement>) {
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
                d="m14 20-.3536.3536.3536.3535.3536-.3535L14 20ZM6 3.5a.5.5 0 0 0 0 1v-1Zm2.6464 11.8536 5 5 .7072-.7072-5-5-.7072.7072Zm5.7072 5 5-5-.7072-.7072-5 5 .7072.7072ZM14.5 20V10h-1v10h1ZM8 3.5H6v1h2v-1Zm6.5 6.5c0-3.5899-2.9101-6.5-6.5-6.5v1c3.0376 0 5.5 2.4624 5.5 5.5h1Z"
            />
        </svg>
    );
}
export default DownLight;
