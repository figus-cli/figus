import React, { SVGProps } from "react";

export function UpLight(props: SVGProps<SVGSVGElement>) {
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
                d="m10 4 .3536-.3535L10 3.2929l-.3536.3536L10 4Zm8 16.5a.5.5 0 0 0 0-1v1ZM15.3536 8.6464l-5-5-.7072.7072 5 5 .7072-.7072Zm-5.7072-5-5 5 .7072.7072 5-5-.7072-.7071ZM9.5 4v10h1V4h-1ZM16 20.5h2v-1h-2v1ZM9.5 14c0 3.5899 2.9101 6.5 6.5 6.5v-1c-3.0376 0-5.5-2.4624-5.5-5.5h-1Z"
            />
        </svg>
    );
}
export default UpLight;
